/**
 * Import a TikTok Mini build into public/playables/<slug>/index.html.
 *
 *   node scripts/import-playable.mjs <slug> [--source <dir>]
 *
 * The source of truth for the games is the sibling `tiktok-mini` repo. Its
 * packaged `<slug>/index.html` is the TikTok *submission* build: Phaser is
 * already inlined, so it is self-contained apart from two external requests.
 * Neither is acceptable to ship as-is on inorganicgames.com:
 *
 *   1. It loads TikTok's SDK from connect.tiktok-minis.com and then calls
 *      `TTMinis.game.init(...)` UNGUARDED. Off TikTok's origin that script is
 *      not ours to depend on — if it fails, blocks, or moves, the very first
 *      statement throws `ReferenceError: TTMinis is not defined` and the game
 *      never boots. The gallery renders a dead iframe, on a page whose entire
 *      argument is that our demos really run. Verified failure, not theoretical.
 *
 *      So we strip the script and shim the SDK. Outside TikTok's webview the
 *      real SDK does nothing useful anyway: the build's own fallback block
 *      (`if (!TTMinis.game.login) { ... }`) already stubs every game API it
 *      calls. It just never gets the chance, because init() throws first. The
 *      shim supplies `game.init` and lets that existing block do the rest.
 *
 *   2. The packaged build has no viewport meta — the shells have one but
 *      packaging drops it. Without it a mobile browser lays the frame out at
 *      980px and the canvas scaling breaks. Re-add it.
 *
 *   3. It pulls Orbitron / Share Tech Mono from Google Fonts. That one only
 *      degrades to a fallback font rather than killing the demo, but
 *      public/playables/README.md states the contract as "no external asset
 *      hosts, no CDN dependency" — so we inline the woff2 (25KB, vendored in
 *      scripts/fonts/) and the builds become genuinely offline-capable.
 *
 * The end state: zero external requests. Which is also the bar a real ad unit has
 * to clear, so the discipline is the point, not just the pedantry.
 *
 * This is deliberately a script and not a one-time hand-edit. The site copy is
 * a BUILD ARTIFACT of the tiktok-mini repo — when a game is updated there, re-run
 * this. Never hand-edit public/playables/<slug>/index.html.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DEFAULT_SOURCE = resolve(process.env.HOME, 'Documents/GitHub/tiktok-mini');

const args = process.argv.slice(2);
const slug = args.find((a) => !a.startsWith('--'));
const sourceRoot = args.includes('--source') ? resolve(args[args.indexOf('--source') + 1]) : DEFAULT_SOURCE;

if (!slug) {
  console.error('usage: node scripts/import-playable.mjs <slug> [--source <tiktok-mini dir>]');
  process.exit(1);
}

const src = join(sourceRoot, slug, 'index.html');
if (!existsSync(src)) {
  console.error(`✗ no packaged build at ${src}`);
  console.error('  Package it first, in the tiktok-mini repo:');
  console.error(`    node tools/package-tiktok.mjs games/${slug}.html`);
  process.exit(1);
}

let html = readFileSync(src, 'utf8');
const before = html.length;

// 1. Drop the third-party SDK request.
const SDK_TAG = /\s*<script src="https:\/\/connect\.tiktok-minis\.com\/game\/sdk\.js"><\/script>/;
if (!SDK_TAG.test(html)) {
  console.error('✗ TikTok SDK script tag not found — the packaging format changed.');
  console.error('  Re-check this script against the build before trusting its output.');
  process.exit(1);
}
html = html.replace(SDK_TAG, '');

// 2. Shim the SDK so the build's own fallback stubs take over.
//    `game` must be a live object with `init`, because init() is called immediately
//    and `!TTMinis.game.login` is what gates the build's stub block.
const SHIM = `
  <script>
  /* Web-embed shim — not part of the TikTok submission build. See scripts/import-playable.mjs.
     Off TikTok's webview there is no SDK; this satisfies the init() call so the build's
     own stub block runs, instead of throwing before the game ever boots. */
  window.TTMinis = { game: { init: function () {} } };
  </script>`;

const HEAD_ANCHOR = '<script>\n  TTMinis.game.init({';
if (!html.includes(HEAD_ANCHOR)) {
  console.error('✗ TTMinis.game.init() call not found where expected — packaging format changed.');
  process.exit(1);
}
html = html.replace(HEAD_ANCHOR, SHIM.trim() + '\n  <script>\n  TTMinis.game.init({');

// 3. Restore the viewport meta that packaging drops.
if (!html.includes('name="viewport"')) {
  html = html.replace(
    '<meta charset="utf-8">',
    '<meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">',
  );
}

// 4. Inline the fonts and drop the Google Fonts requests.
const FONT_DIR = join(dirname(fileURLToPath(import.meta.url)), 'fonts');
const b64 = (f) => readFileSync(join(FONT_DIR, f)).toString('base64');
const FONT_CSS = `
  <style>
  /* Orbitron + Share Tech Mono, inlined. The packaged build fetches these from
     Google Fonts; on our origin the demos make zero external requests. */
  @font-face {
    font-family: 'Orbitron';
    font-style: normal;
    font-weight: 700 900;
    font-display: swap;
    src: url(data:font/woff2;base64,${b64('orbitron.woff2')}) format('woff2');
  }
  @font-face {
    font-family: 'Share Tech Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(data:font/woff2;base64,${b64('share-tech-mono.woff2')}) format('woff2');
  }
  </style>`;

const FONT_LINKS =
  /\s*<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\s*<link href="https:\/\/fonts\.googleapis\.com\/css2\?[^"]*" rel="stylesheet">/;
if (!FONT_LINKS.test(html)) {
  console.error('✗ Google Fonts links not found where expected — packaging format changed.');
  process.exit(1);
}
html = html.replace(FONT_LINKS, '\n' + FONT_CSS);

// Guard: the demos must make no external request at all. A dead iframe on the
// proof shelf undoes the one argument the page is making.
const external = [...html.matchAll(/(?:src|href)="(https?:\/\/[^"]+)"/g)].map((m) => m[1]);
if (external.length) {
  console.error('✗ external requests survived. Refusing to write:');
  external.forEach((u) => console.error(`    ${u}`));
  process.exit(1);
}

const outDir = join(process.cwd(), 'public/playables', slug);
mkdirSync(outDir, { recursive: true });
const out = join(outDir, 'index.html');
writeFileSync(out, html);

console.log(`✓ ${slug}`);
console.log(`    ${src}`);
console.log(`  → ${out}`);
console.log(`    ${(before / 1024).toFixed(0)}KB → ${(html.length / 1024).toFixed(0)}KB, no TikTok SDK dependency`);

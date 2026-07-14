#!/usr/bin/env node
/**
 * Lists every unresolved `TODO:` sentinel in site config and content.
 *
 * These exist because the alternative — a plausible-looking placeholder link or
 * an invented number — is the failure mode that costs a deal. This script makes
 * the gaps loud instead of letting them rot into something that looks real.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOTS = ['src/config', 'src/content', 'src/components', 'src/pages'];

// Only real sentinels — `TODO:` followed by a slug. Skips the type machinery in
// site.ts (`TODO:${string}`) and bare mentions in prose.
const PATTERN = /TODO:[a-z][a-z0-9-]*[^'"`\n]*/g;

async function* walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

const found = [];
for (const root of ROOTS) {
  for await (const file of walk(root)) {
    const text = await readFile(file, 'utf8');
    text.split('\n').forEach((line, i) => {
      for (const match of line.matchAll(PATTERN)) {
        found.push({ file: relative(process.cwd(), file), line: i + 1, text: match[0].trim() });
      }
    });
  }
}

if (found.length === 0) {
  console.log('✓ No unresolved TODOs.');
  process.exit(0);
}

console.log(`\n${found.length} unresolved TODO${found.length === 1 ? '' : 's'} — these render as gaps, not guesses:\n`);
for (const { file, line, text } of found) {
  console.log(`  ${file}:${line}\n    ${text}\n`);
}

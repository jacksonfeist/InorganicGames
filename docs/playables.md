# Playables: strategy, embed contract, network compliance

The most load-bearing doc in the repo, because **the demos are the site**. Without them there is no proof shelf, and a redesign around an empty gallery is just a nicer brochure.

## Strategy: what to build

**4–6 spec playables for real, named, currently-advertising games**, in genres our shipped titles already prove we understand (casual / puzzle / merge — Purrfect Alchemy maps here).

Pick targets that are running **video ads with weak or no playables** — find them via ad intelligence (SocialPeta, Sensor Tower, Meta Ad Library). Each build ends on a mock install CTA.

**Why real named games rather than generic demos:** a generic "here's a playable we made" is a vitamin. "Here's the playable we built for *your* game" is a painkiller. It's also the exact wedge for spec-led outreach, which is the actual sales engine — so the gallery does double duty:

- **Public proof** for anyone who lands on the site, and
- **The personalized asset** we send cold ("we built this for [their game] — here it is, play it").

This is the same work the validation memo already prescribed as the cheapest next test. The website and the sales motion are one motion.

## The embed contract

Every demo in the gallery must:

- **Genuinely run and be tappable in a mobile browser.** Not a video of a playable. Not a GIF. If it isn't playable, it isn't proof, and the buyer will know in two seconds.
- **Load fast.** This is a page about ad performance; a slow demo is an argument against us.
- **Be self-contained** in `public/playables/<slug>/`, embedded via iframe.
- **Be built to real MRAID/network spec** for anything we'd actually ship, so the compliance claim is honest.
- **Be instrumented** for play-rate and completion, so we learn which hooks land. That data is also the seed of our first real, honest performance story.

### Where the builds come from

`public/playables/<slug>/index.html` is a **build artifact, never hand-edited**. Two
different upstreams feed it, which is the thing to know before you go looking for one
script that does both:

| Slugs | Upstream | How |
|---|---|---|
| `gridlock`, `alchemy-bench`, `chroma-sort`, `cloud-runner` | `playable-ads` repo, `ads/<slug>/index.html` | Straight copy. The ad units are already single-file and request-free, so no transform is needed or wanted. |
| `path-guard`, `poly-drop` | `tiktok-mini` repo | `node scripts/import-playable.mjs <slug>` — strips the TikTok SDK, shims it, re-adds the viewport meta, inlines the fonts. See the header comment in that script for why each step exists. |

Note the ad units live under `ads/`, **not** `dist/`. `dist/` is the packaged zip for
network submission and lags behind. Take the newest file, then re-check the size:
`buildSizeKB` is KiB (`bytes / 1024`) for the ad units, and the card renders it as
`KB` under 1000 and `MB` above.

Posters are `screenshots/<slug>/0-hook-portrait.png` from the same repo, halved to
585×1266 and encoded webp at q80 (`sips -z 1266 585 … && cwebp -q 80 …`) — ~15–22KB.
Refresh the poster whenever the build changes, or the frame the buyer sees is of a
version that no longer exists.

### The telemetry envelope

The builds carry **no instrumentation on their own glass** — the player sees a clean
game. Each one instead posts two message types to its parent frame, and
`PlayableCard.astro` renders them beside the phone: a badge (`137 KB · 0 requests ·
60 fps`) and a live event feed (`playable_start`, `first_interaction`,
`level_complete`, `cta_click`, plus whatever the mechanic earns).

```js
{ type: 'inorganic_event', name, payload, t }        // t = ms since playable_start
{ type: 'inorganic_meta',  meta: { bytes, requests, fps } }
```

The full contract is `docs/gallery-embed.md` in the **playable-ads** repo, which is
the source of truth for the builds themselves. Two things to know when touching this:

- **Filter by `event.source`.** Every playable on the page posts to the same window,
  so a listener that doesn't check the sender writes six games' events into one feed.
- The demo is not just *claiming* zero requests, it is *reporting* them while the
  buyer plays it. That is the argument — don't quietly replace it with a static badge.

### Content collection schema

Playables are a content collection — frontmatter, not hand-built HTML.

```yaml
slug: merge-manor-concept
targetGame: "Merge Manor"          # the real, named game
genre: merge                        # casual | puzzle | merge | hyper-casual
mechanic: "raining-coins hook → 3-tap merge loop → install CTA"
buildSizeKB: 3800
networksValidated: [applovin, ironsource, unity, mintegral]
kind: concept                       # concept | demo | shipped — drives the card label
```

`kind` has three states because we have three different claims to make, and only
one of them is "we shipped this":

| `kind` | Card label | What it means |
|---|---|---|
| `concept` | "Concept build for [Game]" | Built for a real, named game we do **not** work for. The spec-led outreach asset. |
| `demo` | "Studio demo build" | Our own IP, built in-house to prove an archetype. Has not shipped, has not run on a network. |
| `shipped` | "Shipped title" | Something we actually published (the TikTok Minis). |

This replaced a boolean `isSpec`. Two states could not describe an in-house demo,
so all four of them rendered "Shipped title" — a claim none of them could support,
and precisely the kind a buyer disproves in one search.

## Network compliance — the credibility payload

This is what separates a studio from a freelancer with a template, and the specificity is the whole point. These are the real quirks; state them out loud.

| Network | The quirk that bites |
|---|---|
| **ironSource** | Requires **autoplay immediately on load** |
| **Unity Ads** | Requires **waiting for viewability** before starting |
| **Mintegral** | Needs `mtg.openurl()` — **not** `mraid.open()`. Use the wrong one and conversions don't attribute. |

Note that ironSource and Unity want **opposite behaviors** — a single build cannot satisfy both. Knowing that (and handling it) is exactly the kind of thing a $40 freelancer or a template tool doesn't.

**Size math:** base64 inlining adds **~33%**. A 3MB asset set becomes ~4MB against a typical **5MB cap**. Budget accordingly from the start rather than discovering it at packaging time.

This material feeds the homepage plumbing strip and the Process page. See `docs/homepage.md` §6.

## Honesty guardrails

Repeated here because this is where they'll actually be read.

- **Label spec work as spec work.** "Concept build for [Game]" is credible and honest.
- **Never imply a spec build was a paid client campaign.**
- **Never invent results for it.** A fabricated "+147% IPM" on a concept piece is the thing that ends a sales call the second the buyer asks about test methodology. Our legitimacy is the entire positioning — don't spend it on a vanity number.
- **No fake gameplay, ever.** Apple, Google, Meta and TikTok have all tightened enforcement on ads showing gameplay the app doesn't contain. We build from the real game. That's a selling point, not a limitation.

## Media weight

The legacy site autoplayed an 83MB MP4 on its homepage and preloaded a 65MB one. Do not repeat that.

- Ship **compressed web derivatives only** — no raw media in git.
- Poster frames on everything; lazy-load below the fold.
- Demo captures should be measured in **hundreds of KB, not tens of MB**.

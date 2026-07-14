# Inorganic Games — playable-ads studio site

## What this is

This repo is the website for **Inorganic Games**, a game studio that sells **playable ads to mobile user-acquisition teams**. It is a B2B sales site, not a game-studio portfolio. The shipped games appear only as credibility proof.

**The buyer** is a UA / growth / creative manager at an indie-to-mid mobile studio, or an agency subcontracting creative production. They have a recurring, budgeted pain (creative fatigue) and measure everything in install economics.

**The site is a closer, not a magnet.** There is no meaningful organic search demand for "playable ad studio." The site exists so that outbound conversations and agency intros convert — it's where a spec playable lands when we send it, and where a referred buyer goes to check we're real. Do not plan for it to generate its own traffic.

**Positioning, one line:** *A real game studio that builds playable ads engineered to convert — not templates, not fake gameplay.*

## Guardrails — do not violate these

These are the mistakes that cost a deal. They're here because they're the ones an LLM writing marketing copy makes by reflex.

1. **Never lead with "cheap," "affordable," "AI-powered," or "AI-fast."** That is the commoditized floor where we lose to a $29/mo template tool. We win on craft and legitimacy. (The name "Inorganic" already flirts with a shovelware read — do not compound it.)
2. **Never publish a performance number that isn't sourced, or isn't ours.** Specifically banned, because they're untraceable to any primary source and a sharp buyer will catch it: the **"4.8 vs 2.9 IPM / 66% advantage"** figure, and the **"Me2Zen 50% ROAS / 3× IAP / 9% CPI"** figure. See `docs/positioning.md` for what we *can* claim.
3. **Never lead with CTR.** It's a discredited playable metric — trivially gamed by accidental and fake-close-button clicks. Leading with it marks us as amateurs to the exact person we're selling to. Use IPM, CPI, and retention together.
4. **Never imply spec work was a paid campaign, and never attach invented results to it.** Label it "Concept build for [Game]." A fabricated "+147% IPM" on a spec piece ends the sales call the moment the buyer asks about test methodology. Our legitimacy is the entire positioning — do not spend it on a vanity number.
5. **Never open the homepage with who we are.** Open with the buyer's pain. Nobody buying playables cares about our story until we've named their problem.
6. **MAN_HUNT is never rendered.** Its App Store listing 404s. The code stays (the Apple developer subscription may be reactivated), gated behind a flag — but it must not appear on any page. A broken link on the proof shelf is worse than one fewer title.

## Stack

Astro + Tailwind, static output, deployed to GitHub Pages via the existing `CNAME` (`inorganicgames.com`).

```
npm run dev         # local dev server
npm run build       # static build to dist/
npm run build:clean # build with a cold content-collection cache — see below
npm run preview     # serve the build
```

Conventions:
- Content collections drive `playables` and `case-studies` — Markdown frontmatter, not hand-built HTML, so copy stays consistent with these docs.
- **A deleted playable or case study that still renders is a stale cache, not a bug in your code.** Astro's content layer persists to `node_modules/.astro/data-store.json` and does *not* evict entries whose source file you removed. `npm run build:clean` (`astro build --force`) rebuilds cold. Reach for this the moment a removed entry reappears — chasing it through the component tree is a dead end that has already cost an hour.
- Each playable demo is a **self-contained build** in `public/playables/<slug>/`, embedded via iframe. It must genuinely run and be tappable on mobile — never a video of a playable.
- **No raw media in git.** The old site tracked an 83MB MP4 and autoplayed it on the homepage. Commit compressed web derivatives only, with poster frames and lazy loading.
- The site is a rebuild, not a remodel. The legacy static HTML (`index.html`, `main.css`, `man_hunt/`, `ruff_rescue/`, `gamesPortfolio.html`, `careers.html`) is superseded; don't extend it.

## Where to look

| If you're… | Read |
|---|---|
| writing any user-facing copy | `docs/positioning.md` |
| building or embedding a demo | `docs/playables.md` |
| working on page structure or sections | `docs/homepage.md` |
| claiming a shipped title, a number, or a logo | `docs/proof-assets.md` |
| writing up a client result | `docs/case-study-template.md` |
| deciding what to build next | `docs/roadmap.md` |

The original strategy memo is preserved verbatim at `docs/reference/strategy-memo.md`. These docs are a lossy distillation of it; go there for the full sourcing trail.

## Current phase

**Phase 0 — building spec playables. Launch is blocked until 4–6 exist.**

The Phase 1 page scaffold is built — pages, components, and the gallery shell all exist. Don't re-litigate that; it's done.

What's still missing is the thing the site is *for*: `src/content/playables/` holds nothing but `_TEMPLATE.md`. The demo gallery *is* the site, and an empty gallery is a prettier brochure with nothing to show — **no amount of visual polish fixes an empty proof shelf.** So the hours go into building demos, not into restyling the shell that's already standing, and Phase 2/3 work (pricing page, SEO content, testimonials) doesn't start until the gallery is full. See `docs/roadmap.md`.

# Roadmap

Ship the smallest site that can close a deal, then earn the rest.

## Phase 0 — spec playables — **BLOCKS LAUNCH**

**Build 4–6 spec playables for real, named games.** `src/content/playables/` currently holds nothing but `_TEMPLATE.md`.

The Phase 1 page scaffold was built ahead of these. That was a deliberate reordering and it stands — the pages are done and they are not coming back out. What the missing demos block is no longer *building*, it's **launching**: the demo gallery *is* the site's proof shelf, and right now that shelf is empty — no client logos, no performance numbers, no shipped playable-ad case studies. We are pre-revenue on this service.

So the rule that still has teeth is the one about where the hours go: **no amount of visual polish fixes an empty proof shelf.** Don't spend another week restyling a gallery that has nothing in it. Put the hours into demos.

The good news: this work is not site work that could be skipped. The spec playables are simultaneously the product demo, the portfolio, and the outreach asset we send cold. They're reusable regardless of what happens to the website.

Spec and targeting details: `docs/playables.md`.

## Phase 1 — the MVP closer — **scaffold built, not launchable**

Built:

- One-scroll home: pain hero → **live demo gallery** → why-a-studio → plumbing strip → studio credibility → get-in-touch + free-spec CTA
- The game-studio framing is gone; the shipped titles appear only as the credibility strip
- MAN_HUNT flagged off (`docs/proof-assets.md`) — `FLAGS.MAN_HUNT: false` in `src/config/site.ts`

Still open, and each one is a `TODO:` sentinel in `src/config/site.ts` that refuses to render rather than inventing a plausible value:

- A real scheduling link, if we ever want one on `/contact` — for now every CTA leads there and email is the ask
- The short form's endpoint (`FORM_ENDPOINT` in `src/components/FinalCTA.astro`)
- `responseTime`, `turnaround`

Structure: `docs/homepage.md`.

## Phase 2 — after the first real conversations

- The Process page (compliance depth + the no-fake-gameplay stance) — this is the page agencies vet us with, so build it *for them*
- The first real case study (`docs/case-study-template.md`)
- Illustrative pricing packages + the retainer offer

## Phase 3 — only on traction

- Network-compliance guides as genuine SEO content ("How to package a playable for ironSource vs Unity Ads") — real trust content that happens to rank for what buyers search when they're stuck
- More demos, testimonials

Slow and secondary. Do not start this before the core site and demos ship.

## Pricing (for when Phase 2 lands)

Go **bifurcated**: publish illustrative starting packages to pass the indie buyer's comfort filter, and offer a custom-quote path for volume and retainers.

Market anchors, so we price sanely:

| Tier | Range |
|---|---|
| Freelancer floor | $40 – $1,500 |
| Studio, per creative | $3,000 – $5,000 |
| Complex / 3D / multi-variant | $5,000 – $15,000 |
| Iteration / variants | $500 – $2,000 each |

Our slot is the **~$3,000 studio mid-range**.

**Lead with a retainer, not one-offs.** Creative fatigue makes refresh recurring, and retainers are becoming the dominant model. Frame it as: *"a fresh batch every month so your creative never goes stale."* A single retainer (~$15k/mo) is the real outcome we're playing for.

**Never publish a rock-bottom price.** It re-anchors us against the AI/template floor and kills the margin *and* the positioning.

## Distribution — the honest part

**A redesigned site will not, by itself, bring customers.** Distribution is the documented weak spot, and a B2B studio site is a closer, not a top-of-funnel magnet. There is no organic search demand for "playable ad studio" that will fill a pipeline.

Channel order:

1. **Spec-led outreach** — the engine. Build the spec playable, send it, and the buyer lands on the gallery to check we're real.
2. **Agency subcontracting** — the fastest first dollar. Agencies will vet us via the Process page and the live demos.
3. **Low-volume, verified, warmed-domain email** — support only. Not a blast.

## The cheapest test

Ship Phase 1 with 4–6 live spec demos, then drive **~15 spec-led outreach touches + 3–5 agency conversations** to the site.

**Success bar:** ≥1 booked call that becomes a paid pilot or a serious agency capacity conversation, within 45 days.

- **Hit it** → the site + spec motion works. Invest in Phase 2.
- **Miss it** → the problem was never the website. It's the sell. And we learned that for the price of one week of build.

## Kill / burden rule

This stays a cheap call option while it's under **~$30/mo run cost and ~3 hrs/wk**. A static site is ~$0/mo, so the real cost is build hours competing with other work.

Spend those hours on **spec playables** — which are reusable outreach assets no matter what — rather than on pixel-polishing a site that has nothing to show.

# Positioning & messaging

Read this before writing any user-facing copy.

## The buyer

A **UA / growth / creative manager** at an indie-to-mid mobile game studio, or a **UA/performance agency** subcontracting creative production. Not a gamer. Not a founder browsing for a dev shop.

They are technically literate about ad metrics, they buy creative on a recurring budget, and they will screen us in about ninety seconds by looking for one thing: **portfolio proof in their genre.**

## Their trigger: creative fatigue

This is the pain the whole site is aimed at. It is chronic, expensive, and recurring — which is what makes it a business rather than a one-off sale.

- Effective creative lifespan in mature markets has fallen to **under ~5 days**.
- **84,000+** mobile advertisers compete monthly in the auction.
- Playables are the rising format: **~13.3%** of impressions by end-2025, and **~56%** of top-performing creatives.

Their creative dies in under a week and they have to feed the machine again. That's the opening line of the site.

## Their decision criteria, in priority order

Write and prioritize the site against this list. It is the actual screening sequence.

1. **Genre-relevant portfolio proof.** A disqualifier if absent. This is why the live demo gallery is the centerpiece and why it must be filterable by genre.
2. **Creative velocity / iteration economics.** Top teams test 15–40 concepts a month. Variant iteration is cheap ($500–$2,000) versus net-new builds.
3. **Real data artifacts over pitch decks.** Show the work, show the method.
4. **Turnaround reliability.** Studio norm is 2–4 weeks per creative; the fast end of the market is ~1–2 weeks. State a number we can actually hit.
5. **Network-compliance competence.** A disqualifier if absent, but rarely the *primary* filter. It's how we prove depth, not how we win the pitch.

## The messaging spine

**Lead with pain, then performance, then legitimacy.** This is the incumbent pattern — the strongest competitor site opens verbatim with *"Your ROAS is Bleeding. It's Time to Interact."* It names the buyer's P&L problem in the first line. Do the same.

**Three things to say:**

1. **The pain** — creative fatigue, rising CPI, passive ads underperforming.
2. **Performance + craft** — a studio that engineers the 3-second hook, the tutorial loop, and the clean CTA, and can prove it with demos you can play right now.
3. **Legitimacy** — a shipping game studio, real gameplay, and we know every network's plumbing.

**Three things to never say:**

1. **"Cheap" / "affordable" / "AI-powered" / "AI-fast."** This is the commoditized floor. A $29/mo template tool wins that race. Our whole edge is being the thing that *isn't* that.
2. **Unsourced stats.** See the banned list below.
3. **CTR-first metrics.** See below.

## Claims we can make

| Claim | Source | Attribution string to render |
|---|---|---|
| Playables convert at **8×** the impression-to-install rate of non-playable formats for top-spending game advertisers, and **16×** for others | Liftoff, 2025 Mobile Ad Creative Index | "Liftoff, 2025 Mobile Ad Creative Index" — and it must read as an **industry figure**, never as our result |
| Effective creative lifespan is **under ~5 days** in mature markets | Game Growth Advisor, May 2026 | Fine to state as market context |
| Playables are **~13.3%** of impressions and **~56%** of top-performing creatives | Sett.ai, Q4 2025 | Fine to state as market context |
| Playables are the format buyers are shifting budget into | Industry consensus, multiple sources below | Fine as an unnumbered statement |

Anything about **our own** performance requires a real client test. Until then we have zero performance claims of our own, and the honest move is to say nothing rather than to imply something.

## Claims that are banned

**Never put these on the site.** They are widely copied across vendor marketing and they are untraceable to any primary source. A buyer who checks will conclude we copy-pasted our credibility, and that ends the conversation.

- ❌ **The "4.8 vs 2.9 IPM / 66% advantage" figure.** Cannot be traced to any primary Liftoff report.
- ❌ **The "Me2Zen 50% ROAS / 3× IAP / 9% CPI" claim.** Does not match the original 2019 Liftoff Me2Zen case study and has no locatable primary source.
- ❌ **Any invented result on spec work** (e.g. a made-up "+147% IPM" on a concept build).
- ❌ **CTR as a headline metric.** It is gameable via accidental taps and fake-close-button tricks, and the industry knows it. Leading with CTR is a competence signal — a bad one. Always pair metrics: IPM + CPI + retention.

## Speak the buyer's language

Know the IPM tiers so copy and sales conversations land as fluent rather than as marketing:

| IPM | Read |
|---|---|
| < 4 | Weak |
| 6–9 | Average |
| > 12 | Strong |

## The two differentiators, stated properly

**1. Network-compliance depth.** Generic "MRAID compliant, we support all networks" is what everyone says and it carries no credibility. Naming the actual quirks is what proves we've shipped:

> ironSource wants autoplay on load; Unity Ads wants you to wait for viewability — opposite behaviors one build can't satisfy. Mintegral needs `mtg.openurl()`, not `mraid.open()`, or the conversion doesn't attribute. Base64 inlining adds ~33%, so a 3MB asset set lands at ~4MB against a 5MB cap.

One sentence like that does more than a page of adjectives. Details in `docs/playables.md`.

**2. No fake gameplay.** Apple, Google, Meta and TikTok have all tightened enforcement against ads showing gameplay the app doesn't contain. "We build from your real game — no bait-and-switch" is simultaneously an ethical stance, a compliance safeguard, and a differentiator that maps onto our identity as an actual game studio. Say it plainly.

## Sources

Competitor sites (crawled 2026-07-13): playablefactory.com, lunalabs.io (now Unity Grow), thegang.io, gamewheel.com.

Market/buyer research (2025–2026): admiral.media mobile-UA guide (Mar/Apr 2026); rocketshiphq.com vendor-evaluation and Liftoff-index summary (Mar/May 2026); hookin.io pricing & compliance deep-dive (Mar 2026); playableadsmaker.com network specs (Feb 2026); segwise.ai metrics & pricing (Jun 2026); playablemaker.com IPM/CTR tiers (Apr 2026); gamegrowthadvisor.com creative-lifespan and fake-gameplay policy (May 2026); lancaric.me playable production guide (Jan 2025); playbuild.app / AppAgent pricing (2025–2026); Liftoff 2025 Mobile Ad Creative Index.

Full memo with per-claim FACT/ESTIMATE tagging: `docs/reference/strategy-memo.md`.

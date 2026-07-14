# Source: Website Redesign Plan — Repositioning Around Playable Ads (Jul 2026)

> **Preserved verbatim for provenance.** The working docs (`docs/positioning.md`, `docs/homepage.md`, `docs/playables.md`, `docs/proof-assets.md`, `docs/case-study-template.md`, `docs/roadmap.md`) are a deliberately lossy distillation of this memo. Come here for the full reasoning and the per-claim FACT/ESTIMATE tagging.
>
> **Two things in this memo are superseded by later information — the working docs are correct, not this:**
> 1. The memo assumes a **"three commercial titles"** proof shelf. The real shelf is Purrfect Alchemy (Steam), WRITHE (itch.io), and **two TikTok Mini Games — Poly Drop and Poly Defense** — which the memo did not know about. The TikTok Minis are HTML5, instant-load, in-feed and size-constrained, i.e. the same competency a playable ad demands, and they should **lead** the studio credibility story. MAN_HUNT is hidden (dead App Store listing), not counted. See `docs/proof-assets.md`.
> 2. The memo treats the redesign as a remodel of the existing site. It is a **greenfield rebuild** (Astro + Tailwind, in this repo).

---

## The Core Call (read this first)

**This is not "add a playable-ads page to a game-studio site." It's a flip: the site becomes a B2B playable-ads studio that *uses* your three shipped games as a credibility asset, not the headline.** Your consumer games earned downloads, not revenue — the money in the validated play is in playables sold to UA teams. So the homepage's job is to sell playables to a user-acquisition buyer; the games move to a "we're a real shipping studio, not a freelancer" proof role.

**The crux — and it's uncomfortable, so I'm saying it first.** The websites that actually convert playable-ad buyers win on one thing above all others: **genre-relevant case studies with disclosed IPM/CPI uplift** (FACT — named the #1 vendor filter across buyer-side guides: admiral.media Mar 2026, rocketshiphq.com May 2026). You have **zero** of those right now — no client logos, no performance numbers, no shipped playable-ad case studies. You are pre-revenue on this service. No amount of visual polish fixes an empty proof shelf.

So the redesign's #1 job is not aesthetics. **It is to manufacture legitimate proof out of the only things you control:**
1. **Live, tappable spec playables** built for real, named games — embedded in the page so a buyer can *play them in the browser*. This is the universal pattern on every serious studio site AND it is your proven show-don't-tell wedge (the Cemental move that works for you).
2. **Shipped-studio credibility** — "a game studio with three commercial titles builds your playable," which a $40 freelancer or an AI tool cannot say.
3. **Deep "knows-the-plumbing" content** — network-by-network compliance depth that signals real production competence.

**The punchline: the website redesign and the memo's cheapest test are the same motion.** The memo already said the next test is "build 3–5 spec playables for specific games." Those spec playables ARE the website. Build them, and the site has a spine; skip them, and you have a prettier brochure with nothing to show. Do not build the site first and hope to fill it later.

## What the research actually says converts these buyers

Grounding for every decision below. Tagged FACT (sourced) / ESTIMATE (reasoned).

**Who the buyer is:** UA / growth / creative managers at indie-to-mid mobile studios, and UA/performance agencies who subcontract production. They have a budgeted, recurring pain (creative fatigue) and measure ROI in install terms.

**Their buying trigger:** creative fatigue — effective creative lifespan has fallen **under ~5 days** in mature markets (FACT, gamegrowthadvisor.com May 2026); 84,000+ mobile advertisers/mo compete in the auction (FACT, memo / SocialPeta 2026). Playables are the rising format: ~13.3% of impressions by end-2025, ~56% of top-performing creatives (FACT, memo / sett.ai Q4-2025).

**Their decision criteria, in priority order (FACT, synthesized from admiral.media Mar/Apr 2026, rocketshiphq.com May 2026):**
1. Genre-relevant portfolio proof (disqualifier if absent)
2. Creative velocity / iteration economics — top teams test 15–40 concepts/mo; variant iteration is cheap ($500–$2,000) vs net-new
3. Real reporting/data artifacts over pitch decks
4. Turnaround reliability (studio norm 2–4 weeks/creative; SparkLabs ~2 wks; Playworks 5–8 working days)
5. Network-compliance competence (a disqualifier if absent, rarely the primary filter)

**The performance stat you CAN stand behind:** Liftoff's 2025 Mobile Ad Creative Index — playables convert at **8× the impression-to-install rate of non-playable formats for top-spending game advertisers, 16× for others** (FACT, rocketshiphq.com Mar 2026 summarizing Liftoff). IPM literacy tiers to speak fluently: <4 weak, 6–9 average, >12 strong (FACT, playablemaker.com Apr 2026).

**Stats to NEVER put on the site (sourcing hygiene — these will get you caught by a sharp buyer):** the widely-copied "4.8 vs 2.9 IPM / 66% advantage" figure is untraceable to any primary Liftoff report; the "Me2Zen 50% ROAS / 3× IAP / 9% CPI" claim doesn't match the original 2019 Liftoff Me2Zen case study and has no locatable primary source. And **CTR alone is a discredited playable metric** — it's gameable via accidental/fake-close-button clicks (FACT, segwise.ai May 2026). Leading with CTR marks you as an amateur.

**The trust signal that actually differentiates you:** network-by-network compliance depth. Generic "MRAID compliant / we support all networks" is common and low-credibility. Demonstrating the *real* quirks signals production depth (FACT, hookin.io Mar 2026, playableadsmaker.com Feb 2026): ironSource requires immediate **autoplay on load** while Unity Ads requires waiting for viewability — opposite behaviors a single build can't satisfy; Mintegral needs `mtg.openurl()` not `mraid.open()` or conversions don't attribute; base64 inlining adds ~33% size, so a 3MB asset set becomes ~4MB against a 5MB cap. A studio that says these things out loud is obviously not a freelancer with a template.

**The no-fake-gameplay stance is a selling point:** platforms (Apple, Google, Meta, TikTok) tightened enforcement on ads showing fake gameplay (FACT, gamegrowthadvisor.com May 2026; lancaric.me Jan 2025 on "fake close button" tricks). "We build from your real game, no bait-and-switch" is both ethical and a differentiator that maps to your studio identity.

## Positioning & messaging spine

**The one-line positioning (pick this hill):** *"A real game studio that builds playable ads engineered to convert — not templates, not fake gameplay."* Credibility + performance. This is exactly what the memo said your edge must be, and it's the lane the incumbents leave open above the AI floor.

**Lead with the buyer's pain, then performance — the incumbent pattern.** The strongest incumbent studio site I inspected, Playable Factory, opens verbatim with **"Your ROAS is Bleeding. It's Time to Interact"** / *"Stop wasting budget on passive ads… slash your costs, and drive high-value installs"* (FACT, playablefactory.com, livecrawled 2026-07-13). It names the buyer's P&L pain in the first line. Do the same — do NOT open with "We're Inorganic Games, an indie studio." Nobody buying playables cares who you are until you've named their problem.

**Three things to say. Three things to never say.**

Say:
- The pain (creative fatigue / rising CPI / passive ads underperforming)
- Performance + craft (a studio that engineers the 3-second hook, tutorial loop, and clean CTA — and can prove it with live demos)
- Legitimacy (shipping game studio, real gameplay, knows every network's plumbing)

Never say:
- **"Cheap" or "AI-powered / AI-fast"** as the headline. That drops you into the Gamewheel/Hookin commoditized floor (FACT — Gamewheel.com now leads with "Turn Ads Into Playable Stories… faster, smarter," free/no-signup). You lose that race to a $29/mo tool. Your "Inorganic" name already flirts with a shovelware read — do not compound it.
- Unsourced/hero stats (see previous section).
- CTR-first metrics.

**Naming caution (ESTIMATE, worth a decision):** "Inorganic Games" is fine as the studio brand and even a wink for an ad-tech audience, but consider a service sub-brand for the playables line (e.g., "Inorganic Playables" / "Playable Lab by Inorganic Games") so the offer reads as a deliberate B2B service, not a game-studio side hustle. Low stakes; your call.

> **Decided:** keep the single "Inorganic Games" brand, positioned playables-first. No sub-brand.

## Site architecture (page map)

Keep it small and conversion-focused. A playable-ads studio site is a **closer**, not a content hub. Five destinations, one primary CTA everywhere.

1. **Home** — the whole pitch on one scroll (structure in next section). 80% of the work happens here.
2. **Work / Playables** — the live tappable demo gallery + case studies. Your single most important page after home; arguably merge it *into* home for v1.
3. **How it works / Process** — brief-to-build steps, turnaround, the network-compliance depth, the no-fake-gameplay stance. This is your "knows the plumbing" trust page.
4. **Studio** — the credibility page: three shipped titles, the "real studio, not a freelancer" story, founder/team.
5. **Contact / Book a call** — a real scheduling link (Calendly-style) + a short form.

Optional later: a **Pricing/Packages** page (see Pricing section) and a small **Resources** area of genuine network-compliance guides (doubles as SEO — see Distribution).

**Global nav:** Work · How it works · Studio · [Book a call]. Ruthlessly short. The button is a different color and present in the top-right on every page and repeated at the bottom of every section.

## The homepage, section by section

In order down the scroll. Each section earns its place.

**1. Hero (above the fold).** Pain-led headline + performance subhead + one primary CTA. Example: headline *"Your best creative is already dead. (Ad fatigue kills it in under a week.)"* → subhead *"Inorganic builds playable ads engineered to convert — real gameplay, every network, fast iteration. Play our work below."* → button **"Book a 15-min call"** + secondary text link "or see live demos ↓". Behind/beside it: one auto-looping muted playable capture. Keep it one clear message; do not stack five value props.

**2. Live playable demo gallery — THE centerpiece.** A grid of phone frames, each a *real, tappable* playable running in-browser (click-to-play or auto-boot on scroll). This is what separates a studio from a slideshow — and it's your show-don't-tell wedge. For launch these are your **spec playables** for named games (see next section). Filterable by genre (casual / puzzle / merge / hyper-casual) so a buyer instantly finds genre-relevant proof — the #1 thing they screen for. Target 4–6 at launch, growing.

**3. Proof bar.** Whatever legitimate numbers you have. At launch you won't have client IPM, so use: shipped-titles count + platforms ("3 commercial titles on Steam & App Store"), networks supported, playables built. Add the industry stat as *context* (not as your result), clearly attributed: "Playables convert up to 8–16× better than passive formats — Liftoff 2025." Replace with your own client numbers the moment you have one.

**4. Why a studio, not a freelancer or an AI tool.** Three columns attacking the buyer's real alternatives (FACT — the objection set from hookin.io Mar 2026): freelancers = quality varies, 1–3 networks, no support after delivery; AI tools = templates, no craft on the hook; in-house = $75–130k/yr loaded (memo). You = shipping-studio craft, all major networks, real gameplay, one accountable partner.

**5. How it works (condensed).** 3–4 steps: Brief → Concept & build (from your real game) → Multi-network QA → Iterate variants. State a turnaround number you can hit. Links to the full Process page.

**6. The plumbing section.** A compact "Built right for every network" block: logos/badges for AppLovin, ironSource/Unity LevelPlay, Mintegral, Meta, Google, Liftoff/Vungle, Moloco, TikTok — plus one line proving depth ("autoplay-on-load for ironSource, viewability-gated for Unity, `mtg.openurl()` for Mintegral — we handle the differences"). This one sentence does more for credibility than a page of adjectives.

**7. Case study teaser** (when you have one). Even the first spec build can be framed as a methodology showcase (see Case Study Template). Link to Work.

**8. Studio credibility strip.** "We're Inorganic Games — we ship real games" + the three titles as small cards. Proof you understand fun/retention/onboarding, which is exactly the craft a playable needs.

**9. Final CTA.** Repeat the book-a-call. Add the low-friction spec offer (see Conversion): "Want to see what we'd build for *your* game? We'll build one free."

## The live-demo gallery + spec-playable strategy (do this or the site is hollow)

**The spec playables are the product demo, the portfolio, and the sales pitch — all at once.** This is the highest-leverage work in the entire redesign, and it's the same work the validation memo already told you to do.

**What to build for launch:** 4–6 playables for **real, named, currently-advertising** casual/hyper-casual games in genres your shipped titles already prove you understand (merge/puzzle/casual — Purrfect Alchemy maps here). Pick targets that are running *video* ads with weak/no playables (find via ad-intelligence: SocialPeta, Sensor Tower, Meta Ad Library). Each ends on a mock install CTA.

**Why real named games, not generic demos (ESTIMATE, high conviction):** a generic "here's a playable" is a vitamin; "here's the playable we built for *your* game" is a painkiller and the exact spec-led outreach wedge from the memo. The gallery does double duty — public proof for inbound, and the personalized asset you send in outreach ("we built this for [their game], here it is").

**Technical must-dos (these ARE the credibility):** each demo must actually run on mobile in-browser; be genuinely tappable (not a video of a playable); load fast; and — for the ones you'd actually ship — be built to real MRAID/network spec so you can honestly claim compliance. Instrument play-rate and completion so you learn which hooks land.

**Honesty guardrail (Moat rule):** label spec/concept work as spec work. Do NOT imply these were paid client campaigns or invent IPM results for them. "Concept build for [Game]" is credible and honest; a fabricated "+147% IPM" on a spec piece is the kind of thing that ends a sales call when the buyer asks for the test methodology. Your legitimacy is the whole positioning — don't spend it on a vanity number.

## Case study template (for when you land the first client)

Build the template now so the site has a slot ready; fill it the day you have a real test. A credible playable case study contains (FACT, conventions from the trustworthy examples — Admiral Media DragonVale test, Mindworks Magic Sort, 2025–2026):

- **Named game + genre + platform + market + timeframe** ("Casual merge game, iOS + Android, US, Feb–Mar 2026").
- **Baseline-vs-benchmark table BEFORE results** — CPI, IPM, CTR, D1 retention before the intervention. Quantifying the problem first is what separates credible from vanity.
- **The mechanic, named** ("raining-coins hook → 3-tap merge loop → install CTA"). Describe what the interactive loop actually was.
- **Multi-metric results, not CTR alone** — CPI + IPM + retention together. Ideally month-by-month progression, not a single before/after jump.
- **Disclosed test method / sample size** ("≥100 conversions/creative over 7 days"). Almost no vendor case studies disclose sample size — doing so makes you stand out as rigorous (FACT, gap noted across vendor case studies in the research).
- **A named client quote** if you can get one — as a supplement to hard numbers, never a substitute.

Until you have this, the Work page is spec demos + the methodology framing. That's fine and honest.

## Pricing, conversion mechanics, and the one CTA

**Pricing — go bifurcated (FACT, this matches how the market actually splits: playbuild.app transparent tiers vs admiral.media custom-quote).** Show *illustrative* starting packages publicly to pass the credibility/comfort filter for indie buyers, and offer a custom-quote path for volume/retainers.
- Market anchors so you price sanely: studio per-creative $3,000–$5,000; complex/3D/multi-variant $5,000–$15,000; freelancer floor $40–$1,500; iteration/variants $500–$2,000 each (FACT, hookin.io Mar 2026, rocketshiphq.com Mar 2026, AppAgent 2025). Your memo mid-slot is ~$3,000.
- **Lead the ongoing offer as a retainer**, not one-offs — creative fatigue makes refresh recurring, and retainers are becoming the dominant model (ESTIMATE, strongly supported). Frame: "a fresh batch every month so your creative never goes stale." Even one retainer (~$15k/mo) is the memo's real outcome.
- Do NOT publish a rock-bottom price to win on cost — it re-anchors you against the AI floor and kills margin.

**Conversion mechanics:**
- **One primary CTA everywhere: book a call** (real scheduling link). B2B playable deals close on a call, not a cart.
- **The killer secondary CTA — the free spec build:** "Show us your game, we'll build one playable free." This is your entire sales motion productized into a button. It's low-risk for the buyer, plays directly to your build-speed edge, and turns the site into a lead engine for the spec-led outreach the memo prescribes. Gate it lightly (game name + contact).
- Keep forms short (name, email, game/company, one "what are you running now?" field). Every extra field costs conversions.
- Add a tasteful "reply within X hours" reliability promise — directly answers the freelancer-flakiness objection.

## Distribution reality check (your weak spot — read honestly)

**Blunt truth: a redesigned site will not, by itself, bring you customers.** Distribution is your documented weak spot, and a B2B studio site is a *closer*, not a top-of-funnel magnet. There is no meaningful organic search demand for "playable ad studio" that will fill your pipeline. The site's job is to make your outbound and agency conversations convert — it's where the spec playable lives when you send it, and where a referred buyer lands to sanity-check you.

**So sequence accordingly (this mirrors the memo's channel ranking):**
1. **Spec-led outreach** is the engine; the site is the destination. Build spec playable → send it → buyer lands on the gallery/case-study to validate you're real.
2. **Agency subcontracting** is the fastest first dollar — and agencies will vet you via exactly the "knows-the-plumbing" Process page and live demos. Build that page *for them*.
3. **Low-volume, verified, warmed-domain email** as support — every Cemental deliverability guardrail on. Not a blast.

**One legitimate organic angle (ESTIMATE, modest):** genuine network-compliance guides ("How to package a playable for ironSource vs Unity Ads") are real trust content that also ranks for the exact terms your buyers search when stuck. It's slow and secondary — do it only after the core site + spec demos ship.

**Consulting-lead bonus (per your revised objective function):** every mobile studio you talk to is also a potential Cemental software client. The site's book-a-call and free-spec offer double as a channel to businesses with dev budgets — count that as upside even on deals where the playable revenue is small.

## Build sequence & the cheapest test

**Don't boil the ocean. Ship the smallest site that can close a deal, then earn the rest.**

**Phase 0 — before any HTML (the real work):** build 4–6 spec playables for real named games. Without these, stop; the site has nothing to show.

**Phase 1 — MVP site (the closer), ~1 week of build once demos exist:**
- One-scroll home: pain hero → **live demo gallery** → why-a-studio → plumbing strip → studio credibility → book-a-call + free-spec CTA.
- Real scheduling link + short form.
- Kill or bury the current indie-game-studio framing; reuse the three titles only as the credibility strip.
- Fix the dead MAN_HUNT store link or drop it (a broken link on your proof shelf is worse than one fewer title). **Open item: confirm/settle the unverified third title** — don't list a game you can't point to.

**Phase 2 — after first conversations:** add the Process page (plumbing depth + no-fake-gameplay), the first real case study, illustrative pricing packages, and the retainer offer.

**Phase 3 — only if traction:** compliance-guide resources for SEO; more demos; testimonials.

**The cheapest test that tells you if the redesign works (~$0 cash, 2–4 weeks):** ship Phase 1 with 4–6 live spec demos, then drive ~15 spec-led outreach touches + 3–5 agency conversations *to the site*. **Success bar:** ≥1 booked call that turns into a paid pilot or a serious agency capacity conversation within 45 days. Hit it → the site + spec motion works, invest in Phase 2. Miss it → the problem was never the website, it's the sell, and you've learned that for the price of a week of build.

**Kill/burden check (your standing rule):** this whole effort stays a cheap call option while it's under ~$30/mo run cost and ~3 hrs/wk. A redesigned static site is ~$0/mo. The real cost is your build hours competing with Cemental — spend them on the spec playables (which are reusable outreach assets regardless), not on pixel-polishing a site with nothing to show.

## Sources

Competitor sites (livecrawled 2026-07-13): playablefactory.com, lunalabs.io (now Unity Grow), thegang.io, gamewheel.com. Buyer/market research (2025–2026): admiral.media mobile-UA guide (Mar/Apr 2026); rocketshiphq.com vendor-evaluation + Liftoff-index summary (Mar/May 2026); hookin.io pricing & compliance deep-dive (Mar 2026); playableadsmaker.com network specs (Feb 2026); segwise.ai metrics & pricing (Jun 2026); playablemaker.com IPM/CTR tiers (Apr 2026); gamegrowthadvisor.com creative-lifespan & fake-gameplay policy (May 2026); lancaric.me playable production guide (Jan 2025); playbuild.app / AppAgent pricing (2025–2026); Liftoff 2025 Mobile Ad Creative Index (via rocketshiphq summary). Validated strategy: Idea Validation Memo — Playable Ads Studio via Inorganic Games. Site audit: inorganicgames.com (browser-verified live). Flagged unreliable / do-not-cite: "4.8 vs 2.9 IPM / 66%" figure; "Me2Zen 50% ROAS / 3× IAP" figure; CTR-only metrics.

# Site map & homepage spec

## Site map

Five destinations. A playable-ads site is a closer, not a content hub — keep it small and keep every page pointed at the same action.

| Page | Job |
|---|---|
| **Home** | The whole pitch on one scroll. ~80% of the work lives here. |
| **Work / Playables** | The live tappable demo gallery + case studies. The most important page after Home — for v1, consider just merging it *into* Home. |
| **How it works / Process** | Brief-to-build steps, turnaround, network-compliance depth, the no-fake-gameplay stance. This is the "knows the plumbing" trust page, and it's the page agencies vet us with. |
| **Studio** | Credibility. The shipped titles, the real-studio-not-a-freelancer story, the team. |
| **Contact / Book a call** | A real scheduling link + a short form. |

**Global nav:** `Work · How it works · Studio · [Book a call]`

The CTA is a button, visually distinct, top-right on every page, and repeated at the bottom of every section. One primary CTA everywhere — B2B playable deals close on a call, not in a cart.

## Homepage, section by section

In scroll order. Each section states its job and its failure mode.

### 1. Hero — above the fold

**Job:** name the buyer's pain in the first line, then say what we do, then give one action.

- **Headline:** pain-led. Working example — *"Your best creative is already dead. (Ad fatigue kills it in under a week.)"*
- **Subhead:** *"Inorganic builds playable ads engineered to convert — real gameplay, every network, fast iteration. Play our work below."*
- **Primary CTA:** `Book a 15-min call`
- **Secondary:** a text link, *"or see live demos ↓"*
- **Visual:** one auto-looping, muted playable capture. Lightweight. Poster frame required.

**Failure mode:** opening with "We're Inorganic Games, an indie game studio…" Nobody buying playables cares who we are until we've named their problem. Also: stacking five value props. One clear message.

### 2. Live playable demo gallery — the centerpiece

**Job:** be the proof. This is the single highest-value section on the site and the thing that separates a studio from a slideshow.

- A grid of phone frames, each running a **real, tappable playable in-browser** — click-to-play or auto-boot on scroll.
- **Filterable by genre** (casual / puzzle / merge / hyper-casual). Genre-relevant proof is the #1 thing a buyer screens for, so let them find theirs in one click.
- Target **4–6 at launch**, growing over time.
- At launch these are spec builds. Label them **"Concept build for [Game]"** — see `docs/playables.md`.

**Failure mode:** shipping videos of playables instead of playables. If it isn't tappable, it isn't proof, and the buyer can tell instantly.

### 3. Proof bar

**Job:** legitimate numbers, honestly framed.

We have no client IPM at launch, so use what's true: shipped titles and platforms, networks supported, playables built. The Liftoff figure (playables convert at 8–16× vs passive formats) may appear here **as attributed industry context, clearly not as our result** — see the approved-claims table in `docs/positioning.md`.

Replace this section with real client numbers the moment we have one.

**Failure mode:** dressing an industry stat up as our own performance.

### 4. Why a studio, not a freelancer or an AI tool

**Job:** attack the buyer's actual alternatives. Three columns.

| Their alternative | The problem with it |
|---|---|
| **Freelancer** | Quality varies, 1–3 networks, no support after delivery |
| **AI / template tool** | Templates, no craft on the hook — the part that decides whether it converts |
| **In-house** | $75–130k/yr fully loaded |
| **Us** | Shipping-studio craft, all major networks, real gameplay, one accountable partner |

### 5. How it works, condensed

**Job:** make the process feel real and low-risk. Three or four steps:

Brief → Concept & build (from your real game) → Multi-network QA → Iterate variants

State a turnaround number we can actually hit. Link to the full Process page.

### 6. The plumbing strip

**Job:** prove production depth in one sentence.

Network badges — AppLovin, ironSource / Unity LevelPlay, Mintegral, Meta, Google, Liftoff/Vungle, Moloco, TikTok — plus the line that does the real work:

> "Autoplay-on-load for ironSource, viewability-gated for Unity, `mtg.openurl()` for Mintegral — we handle the differences."

**Failure mode:** "MRAID compliant. We support all networks." Everyone says that; it proves nothing. Specificity *is* the credibility. Details in `docs/playables.md`.

### 7. Case study teaser

**Job:** hold the slot. Build the component now; leave it empty (or hidden) until there's a real client result. Even the first spec build can be framed as a methodology showcase. Links to Work. See `docs/case-study-template.md`.

### 8. Studio credibility strip

**Job:** "we're a real studio, not a freelancer with a template."

**Lead with the TikTok Minis — Poly Drop and Poly Defense.** They're HTML5, instant-load, in-feed, size-constrained games shipped inside a social platform. That is *the same engineering competency a playable ad demands* — it is not an analogy for the work, it is the work. It's the shortest distance between anything we've shipped and this buyer's problem, so it goes first.

Then the commercial titles (Purrfect Alchemy, WRITHE) as proof we understand fun, retention and onboarding — which is exactly the craft a playable's hook and tutorial loop require.

**Do not render MAN_HUNT.** See `docs/proof-assets.md` before writing anything in this section.

### 9. Final CTA

Repeat `Book a 15-min call`, and add the low-friction offer:

> "Want to see what we'd build for *your* game? We'll build one free."

## Conversion mechanics

- **One primary CTA: book a call.** Use a real scheduling link (Calendly-style), not a "we'll get back to you" form.
- **The killer secondary CTA — the free spec build.** *"Show us your game, we'll build one playable free."* This is the entire sales motion productized into a button: low-risk for the buyer, plays to our build-speed edge, and turns the site into the destination for spec-led outreach. Gate it lightly — game name + contact, nothing more.
- **Keep forms short.** Name, email, game/company, and one open field ("what are you running now?"). Every extra field costs conversions.
- **State a response-time promise** ("we reply within X hours"). It directly answers the freelancer-flakiness objection, which is the buyer's live fear.

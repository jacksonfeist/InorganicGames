# Proof assets — what we can honestly claim

Consult this **before writing any claim about what we've shipped**. The proof shelf is the whole credibility play; a single dead link or overstated title on it does more damage than a missing one.

## Render these

| Title | Platform | Status | Role in the pitch |
|---|---|---|---|
| **Poly Drop** | TikTok Mini Game | Published | **Lead the studio strip with this.** See below. |
| **Poly Defense** | TikTok Mini Game | Published | Same. |
| **Purrfect Alchemy** | Steam | Live (verified) | Commercial title. Maps to the casual/merge genre we're selling into. |
| **WRITHE** | itch.io | Live (verified) | Commercial title. |

## Why the TikTok Minis lead

They are the strongest asset we have for this pivot, and the original strategy memo didn't know about them.

A TikTok Mini Game is **HTML5, instant-load, in-feed, and size-constrained** — it must boot in a browser inside a social platform, in seconds, under a hard weight budget, with no install step.

**That is not an analogy for playable-ad work. That is playable-ad work.**

It means the studio strip's argument gets much stronger. Instead of *"we made a Steam game, so trust us on fun,"* it becomes *"we ship instant-play web games inside a social platform's feed — which is the same engineering problem as a playable ad, and we've already solved it twice."* A freelancer can't say that. An AI template tool certainly can't.

The commercial titles (Purrfect Alchemy, WRITHE) still matter — they prove we understand fun, retention, and onboarding, which is the craft behind a playable's 3-second hook and tutorial loop. But they're the second argument, not the first.

## Do NOT render — keep in code

**MAN_HUNT.** Its App Store listing **404s** (the Apple developer subscription lapsed). The legacy site still shows a "Download on the App Store" badge pointing at a dead page — that is the single worst bug on the live site today.

The code and assets stay in the repo (the subscription may be reactivated later), but the title must be **gated behind a flag and rendered nowhere**. A broken link on the proof shelf is worse than one fewer title.

## Do NOT claim

**Ruff Rescue.** Never shipped. The legacy site still says "Coming Spring 2024," which is now two years stale. It is not a commercial title and must not be counted as one.

## Open items — these block copy

- [ ] **Get the canonical public URLs for Poly Drop and Poly Defense** on TikTok. No copy claiming them can ship without a working link.
- [ ] **Confirm both are publicly playable** right now (not unlisted, not pulled).
- [ ] Decide the exact phrasing of the titles count. With MAN_HUNT hidden and Ruff Rescue excluded, the honest line is **four shipped titles across Steam, itch.io, and TikTok** — not "three commercial titles," which the source memo assumed.

## Media reality

The existing assets are wildly too heavy for the web and cannot be reused as-is:

- `Media/PurrfectAlchemyMedia/miniTrailer.mp4` — **83MB**, currently autoplays on the homepage
- `Media/MAN_HUNTMedia/FINAL30.mp4` — **65MB**, currently preloaded
- `Media/PurrfectAlchemyMedia/trailer.mp4` — **247MB**, untracked

The repo is ~1.7GB (772MB media, 922MB `.git`).

**Requirements for the rebuild:** compressed web derivatives only, committed nowhere near their raw sizes; poster frames on every video; lazy-load anything below the fold; target hundreds of KB per asset, not tens of MB. See `docs/playables.md` §Media weight.

## Repo hygiene (deferred, not blocking)

Recorded here so it isn't forgotten, but none of it comes before Phase 0:

- `study-helper/` is deleted in the working tree but never committed as deleted — an abandoned Next.js side project, unrelated to the site. Commit the deletion.
- `.DS_Store` files are tracked despite being in `.gitignore`.
- `package-lock.json` is in `.gitignore` but tracked.
- `rock_party/` and `writhe/` are empty directories — dead scaffolding.
- `careers.html` advertises Summer 2024 internships and is orphaned. `gamesPortfolio.html` is orphaned. Both are superseded by the rebuild.

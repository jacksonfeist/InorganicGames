---
# Not rendered — the `[^_]*` glob in src/content.config.ts skips underscore files.
# Copy this to <id>.md, where <id> matches public/playables/<id>/.

# The real, named game. For a spec build this is someone else's game and the card
# renders "Concept build for <targetGame>". Never imply it was a paid campaign.
targetGame: 'Merge Manor'

genre: merge # casual | puzzle | merge | hyper-casual

# The interactive loop in one line. If you can't name it, the build didn't have one.
mechanic: 'Raining-coins hook → 3-tap merge loop → install CTA'

buildSizeKB: 3800 # optional. base64 inlining adds ~33% against a ~5MB cap.

networksValidated: [applovin, ironsource, unity, mintegral]

# true  → a concept build for a game we do not work for ("Concept build for X")
# false → something we actually shipped (the TikTok Minis)
isSpec: true

# Only true once public/playables/<id>/index.html genuinely runs and is tappable.
# A video or a GIF of a playable is NOT a playable. Never set this true on a capture.
embedReady: false

# externalUrl: 'https://…'   # where a shipped title actually lives. Spec builds have none.
# poster: '/playables/<id>/poster.webp'   # hundreds of KB, not tens of MB.
order: 1
---

Optional body copy. Use it to make the *thinking* explicit — why this hook, why
this loop — which is what makes a concept build credible as a concept build.

Do NOT put performance numbers here. A spec build has no results, and a
fabricated one ends the sales call the moment the buyer asks about methodology.

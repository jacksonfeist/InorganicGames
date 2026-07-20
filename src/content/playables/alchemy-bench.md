---
targetGame: 'Alchemy Bench'
genre: merge

mechanic: 'Drag a vial onto its twin to fuse it up a tier — chain merges toward the legendary elixir before the candle burns out.'

# The embedded single-file build. Engine and fonts are inlined, so this one file
# is the whole ad and it makes zero external requests.
buildSizeKB: 121

# Deliberately empty. This is our own concept build, built to demonstrate the
# MERGE archetype — it has never been submitted to or run through a real ad
# network, so listing one here would imply a validation we haven't done.
networksValidated: []

# Own IP, not a client spec. Built in-house to prove the MERGE archetype: a
# commit is a two-point drag (vial onto its twin), not a tap. Not yet
# distributed anywhere.
isSpec: false

# Verified: boots, renders and is tappable with every external request blocked.
embedReady: true

# No externalUrl — this hasn't shipped anywhere yet.
poster: '/playables/alchemy-bench/poster.webp'
order: 5
---

A drag-to-fuse crafting bench built to prove out gesture-driven merging rather
than a tap-only loop: every commit is a real drag, vial onto matching vial, so a
player who chains merges deliberately reads as skill rather than luck.

Candlelight is the clock — the time pressure is a flame burning down, not a
number — and the tier ladder is readable at a glance: each vial gets bigger,
brighter and more ornate on the way to the legendary elixir. Same constraints as
a real ad unit: one HTML file, engine and fonts inlined, zero network requests,
tappable offline.

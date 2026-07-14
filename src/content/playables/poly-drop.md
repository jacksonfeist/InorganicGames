---
targetGame: 'Poly Drop'
genre: puzzle

mechanic: 'Tap to release the next polygon, then stack it into the bin before the pile topples out.'

# The embedded single-file build. Engine and fonts are inlined, so this one file
# is the whole game and it makes zero external requests.
buildSizeKB: 1225

# Deliberately empty. This shipped as a TikTok Mini, not as an ad unit — it has
# never been run through an ad network, and listing one here would imply a
# validation we haven't done.
networksValidated: []

# Shipped. Live as a TikTok Mini — the card renders "Shipped title".
isSpec: false

# Verified: boots, renders and is tappable with every external request blocked.
embedReady: true

# No externalUrl — a TikTok Mini is only reachable inside the TikTok app, so
# there is no public listing to link. An honest no-link beats a broken one.
poster: '/playables/poly-drop/poster.webp'
order: 1
---

A one-thumb physics stacker. The whole loop is a single tap, and the tension comes
from the pile rather than the controls. The player is never fighting the interface,
only their own last decision.

It's here as proof of the build, not as a campaign: shape-only rendering, procedural
audio, no external assets, and the entire game, engine included, is one HTML file
that runs offline in any mobile browser. That's the same constraint an ad unit runs
under, which is why we build this way.

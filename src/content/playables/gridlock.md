---
targetGame: 'Gridlock'
genre: puzzle

mechanic: 'Tap a ship whose lane is clear and it burns out of the bay. Clear the chain in front of the crimson hero before the blast door comes down.'

# The embedded single-file build. Engine and fonts are inlined, so this one file
# is the whole ad and it makes zero external requests.
buildSizeKB: 137

# Deliberately empty. This is our own concept build, built to demonstrate the
# SEQUENCE archetype — it has never been submitted to or run through a real ad
# network, so listing one here would imply a validation we haven't done.
networksValidated: []

# Own IP, built in-house to prove the SEQUENCE archetype: an unbounded number of
# discrete tap-commits against one shared clock. Not shipped, not a client spec.
kind: demo

# Verified: boots, renders and is tappable with every external request blocked.
embedReady: true

# No externalUrl — this hasn't shipped anywhere yet.
poster: '/playables/gridlock/poster.webp'
order: 6
---

A docking-bay escape built to prove out discrete tap-commits at unbounded count:
the player decides the order and spends the clock, so the shape of the solve is
theirs rather than a script's. The one scalar the sim tracks is pacing deviation
— hasty against hesitant — which is what lets a mechanic with no launch value and
no aim still be swept for a real difficulty band.

The rule is taught without a word of text. A ship whose lane is clear has lit
thrusters; a blocked one sits dark. That single contrast carries the whole
mechanic, and the near-miss isn't scripted either — the blast door keeps closing
at its real rate through the payoff, so a good run clears a wide gap and a slow
one scrapes the hull on the way out. Same constraints as a real ad unit: one HTML
file, engine and fonts inlined, zero network requests, tappable offline.

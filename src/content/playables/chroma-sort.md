---
targetGame: 'Chroma Sort'
genre: puzzle

mechanic: 'Tap a tube, tap another — pour matching colours together and chase every tube to pure before the reservoir runs dry.'

# The embedded single-file build. Engine and fonts are inlined, so this one file
# is the whole ad and it makes zero external requests.
buildSizeKB: 116

# Deliberately empty. This is our own concept build, built to demonstrate the
# SEQUENCE archetype (discrete tap-commits against a shared clock) — it has
# never been submitted to or run through a real ad network, so listing one
# here would imply a validation we haven't done.
networksValidated: []

# Own IP, not a client spec. Shares GRIDLOCK's SEQUENCE archetype and exists to
# show it carries a second, tonally opposite theme — the same tap-commit shape
# reads as ASMR tidy-up here and as escape-under-pressure there. Not yet
# distributed anywhere.
kind: demo

# Verified: boots, renders and is tappable with every external request blocked.
embedReady: true

# No externalUrl — this hasn't shipped anywhere yet.
poster: '/playables/chroma-sort/poster.webp'
order: 4
---

A water-sort puzzle built to prove out discrete-commit pacing rather than
aim-and-fire: every tap is either a legal pour or a harmless miss, and the one
scalar the sim tracks is how hasty or hesitant that stream of taps is against a
shared reservoir.

The board is authored so the point where it looks stuck — every visible pair a
mismatch, the reservoir running low — has exactly one non-obvious pour that
unlocks the rest, and finding it is the whole tension. Same constraints as a real
ad unit: one HTML file, engine and fonts inlined, zero network requests, tappable
offline.

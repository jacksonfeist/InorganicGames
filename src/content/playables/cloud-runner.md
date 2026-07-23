---
targetGame: 'Cloud Runner'
genre: hyper-casual

mechanic: 'Steer the crowd down the racing line. Green gates multiply it, red gates shrink it, then smash the finish wall before the storm catches you.'

# The embedded single-file build. Engine and fonts are inlined, so this one file
# is the whole ad and it makes zero external requests.
buildSizeKB: 110

# Deliberately empty. This is our own concept build, built to demonstrate the
# RUNNER archetype — it has never been submitted to or run through a real ad
# network, so listing one here would imply a validation we haven't done.
networksValidated: []

# Own IP, not a client spec. Built in-house to prove the RUNNER archetype — the
# only one of the five where the thumb steers continuously rather than committing
# discrete actions. Not yet distributed anywhere.
kind: demo

# Verified: boots, renders and is tappable with every external request blocked.
embedReady: true

# No externalUrl — this hasn't shipped anywhere yet.
poster: '/playables/cloud-runner/poster.webp'
order: 7
---

A crowd-runner built to prove out live-steered control, not aim-and-fire: the
single scalar is the crowd's lateral error from the racing line, so a player who
actively steers reads as skill rather than luck on either side of the band.

Green gates grow the crowd, red gates shrink it, and a storm closes from behind —
the run ends at a wall that only a crowd large enough can smash through. Same
constraints as a real ad unit: one HTML file, engine and fonts inlined, zero
network requests, tappable offline.

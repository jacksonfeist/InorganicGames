---
# "Poly Defense" is the SHIPPED name — it's the <title> and the title screen the
# player sees in the frame below. The slug stays `path-guard` because that's the
# directory in the tiktok-mini repo that scripts/import-playable.mjs reads from;
# the two diverged when the game was renamed at packaging time. Don't "fix" the
# name back to Path Guard — the card would then contradict the running game.
targetGame: 'Poly Defense'
genre: casual

mechanic: 'Place towers on the open nodes, hold the lane, survive the next wave.'

# The embedded single-file build. Engine and fonts are inlined, so this one file
# is the whole game and it makes zero external requests.
buildSizeKB: 1249

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
poster: '/playables/path-guard/poster.webp'
order: 2
---

A defense loop compressed to fit a first session: gold, a tower tier, a wave, a
decision. The interesting part for a UA team is the pacing. The first meaningful
choice lands in under ten seconds, because a player who hasn't chosen anything yet
has nothing to lose by leaving.

That compression is the same problem a playable ad solves, on a shorter clock. This
one runs offline as a single HTML file, engine included.

---
# Not rendered. EMPTY COLLECTION BY DESIGN — there is no real client result yet,
# and the schema in src/content.config.ts will reject a case study that lacks a
# baseline or a disclosed test method. That is deliberate: it makes it structurally
# hard to ship the vanity case study every competitor ships.
#
# See docs/case-study-template.md. Fill this in the day a real result exists.

game: 'Merge Manor'
genre: 'Casual merge'
platforms: ['iOS', 'Android']
market: 'US'
timeframe: 'Feb–Mar 2026'

# Quantify the problem BEFORE the results. Almost nobody does this, and it is the
# single thing that separates a credible case study from a vanity one.
baseline:
  cpi: '$4.10'
  ipm: '3.2'
  d1Retention: '31%'
  ctr: '1.1%' # may be recorded, never led with

mechanic: 'Raining-coins hook → 3-tap merge loop → install CTA'

# CPI + IPM + retention together. Never CTR alone.
# If a result was mixed, SAY SO. "CPI improved, retention didn't move" is far more
# believable than a table where everything went up.
results:
  - metric: 'CPI'
    before: '$4.10'
    after: ''
    delta: ''
  - metric: 'IPM'
    before: '3.2'
    after: ''
    delta: ''
  - metric: 'D1 retention'
    before: '31%'
    after: ''
    delta: ''

# Almost no vendor discloses this. Doing it makes us visibly more rigorous, and
# it's free — we just have to actually run a clean test.
method:
  description: 'Even-split rotation against the incumbent video creative.'
  sampleSize: '≥100 conversions per creative over 7 days'

# quote:                      # optional. A supplement to numbers, never a substitute.
#   text: '…'                 # A glowing quote attached to no metrics reads as an
#   name: '…'                 # admission that the metrics weren't good.
#   role: '…'
order: 1
---

The narrative. What was failing, what we changed, what moved and what didn't.

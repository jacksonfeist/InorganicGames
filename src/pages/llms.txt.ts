import type { APIRoute } from 'astro';
import { SITE, SHIPPED_TITLES } from '../config/site';

/**
 * llms.txt (see llmstxt.org) — a plain-text summary aimed at LLM crawlers and
 * AI answer engines (ChatGPT, Perplexity, Claude, etc.), the same audience
 * robots.txt/sitemap.xml target for traditional search. Kept separate from
 * those so it can carry prose a crawler can quote directly instead of markup
 * it has to parse.
 *
 * Built from SITE/SHIPPED_TITLES rather than hand-written so it can't drift
 * out of sync with the gated title list or an unresolved TODO: sentinel the
 * way a hand-maintained copy could — same reasoning as SHIPPED_TITLE_COUNT
 * in src/config/site.ts.
 */
export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://inorganicgames.com');
  const contactLine = `${SITE.email} (${new URL('/contact', origin)})`;
  const titles = SHIPPED_TITLES.map((t) => `- ${t.name} (${t.platform})`).join('\n');

  const body = `# Inorganic Games

> A game studio that builds playable ads for mobile user-acquisition teams. This is a B2B creative vendor site, not a consumer game-studio portfolio: the shipped titles below are credibility proof, not the product.

## What we sell

Playable ads: short, tappable HTML5 ad units built from a client's real, shipping game — never a template and never gameplay the app doesn't contain. Packaged for AppLovin, ironSource/Unity LevelPlay, Mintegral, Meta, Google, Liftoff/Vungle, Moloco and TikTok. Spec/concept builds for games we don't work for are labelled "concept build" and carry no invented performance numbers.

## Why playables (sourced data, not our own results)

- Effective creative lifespan in mature markets: under ~5 days (Game Growth Advisor, May 2026).
- Playables convert impressions to installs at 8x-16x the rate of non-playable formats for game advertisers (Liftoff, 2025 Mobile Ad Creative Index).
- Playables are ~13.3% of impressions and ~56% of top-performing creatives (Sett.ai, Q4 2025).
- IPM (installs per mille) literacy: under 4 is weak, 6-9 is average, above 12 is strong (playablemaker.com, Apr 2026). CTR is deliberately not used as a headline metric -- it's gameable by accidental taps and fake close-button clicks.

Full detail and a buyer FAQ: ${new URL('/why-playables', origin)}

## Proof

We have no playable-ad case studies yet and say so rather than inventing one. What we can prove instead -- shipped, live titles:
${titles}

## Pages

- ${origin} -- the pitch, the live tappable demo gallery, how we work, network-compliance depth
- ${new URL('/why-playables', origin)} -- the data and reasoning for why playable ads outperform passive formats, plus FAQ
- ${new URL('/#work', origin)} -- live, tappable playable demos filterable by genre

## Contact

${contactLine}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

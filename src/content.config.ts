import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Playables — the proof shelf. Schema per docs/playables.md.
 *
 * Three kinds of entry live here and they prove three different things. The
 * distinction is the honesty mechanism, so it is a required field rather than a
 * label someone types per card:
 *
 *   kind: 'concept'  A concept build for a real, named game we do not work for.
 *                    Renders "Concept build for [Game]". This is the spec-led
 *                    outreach asset — the thing we send cold. Currently none.
 *
 *   kind: 'demo'     Our own IP, built in-house to prove an archetype. Renders
 *                    "Studio demo build". These have not shipped and have not
 *                    run on a network, so they may claim neither.
 *
 *   kind: 'shipped'  Something we actually published (the TikTok Minis).
 *                    Renders "Shipped title".
 *
 * This replaced a boolean `isSpec`, which had only two states and therefore
 * labelled every in-house demo "Shipped title" — a claim none of them could
 * support. See CLAUDE.md guardrail 4: our legitimacy is the whole positioning,
 * and a label the buyer can disprove in one search spends it.
 */
const playables = defineCollection({
  // `[^_]*` so `_TEMPLATE.md` is documentation, not a rendered entry.
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/playables' }),
  schema: z.object({
    /** The real, named game this build targets (or the shipped title's name). */
    targetGame: z.string(),
    genre: z.enum(['casual', 'puzzle', 'merge', 'hyper-casual']),

    /** The interactive loop, in one line. If you can't name it, it didn't have one. */
    mechanic: z.string(),

    /** Packaged size. Remember base64 inlining adds ~33% against a ~5MB cap. */
    buildSizeKB: z.number().positive().optional(),

    networksValidated: z
      .array(z.enum(['applovin', 'ironsource', 'unity', 'mintegral', 'meta', 'google', 'liftoff', 'moloco', 'tiktok']))
      .default([]),

    /**
     * Drives the card label. See docs/playables.md §Honesty guardrails.
     * No default — a missing `kind` must fail the build, never silently pick the
     * most flattering of the three.
     */
    kind: z.enum(['concept', 'demo', 'shipped']),

    /**
     * True only once a real, tappable build exists at public/playables/<id>/index.html.
     * False renders an explicit "build not embedded yet" frame rather than a dead
     * iframe. A video or a GIF is NOT a playable and must never set this true.
     */
    embedReady: z.boolean().default(false),

    /** Where the shipped title actually lives (TikTok, Steam). Spec builds have none. */
    externalUrl: z.string().url().optional(),

    /** Lightweight poster frame. Hundreds of KB, never tens of MB. */
    poster: z.string().optional(),

    order: z.number().default(99),

    /**
     * Performance numbers are NOT part of this schema, deliberately. A spec build
     * has no results, and inventing one ends the sales call. Real client results
     * are case studies, which have a baseline and a disclosed test method.
     */
  }),
});

/**
 * Case studies — per docs/case-study-template.md. EMPTY until a real client
 * result exists.
 *
 * `baseline` and `method` are REQUIRED on purpose. A case study with results but
 * no baseline is a vanity number, and one with no disclosed sample size is not
 * checkable. Making them required means the build fails rather than shipping a
 * case study that a sharp buyer would take apart on the first follow-up call.
 */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/case-studies' }),
  schema: z.object({
    /** "Casual merge game, iOS + Android, US market, Feb–Mar 2026." Vagueness reads as fabrication. */
    game: z.string(),
    genre: z.string(),
    platforms: z.array(z.string()).nonempty(),
    market: z.string(),
    timeframe: z.string(),

    /** Quantify the problem BEFORE the results. Almost nobody does this. */
    baseline: z.object({
      cpi: z.string(),
      ipm: z.string(),
      d1Retention: z.string(),
      /** CTR may be recorded, but never led with. See docs/positioning.md. */
      ctr: z.string().optional(),
    }),

    mechanic: z.string(),

    /** CPI + IPM + retention together. Never CTR alone. */
    results: z
      .array(
        z.object({
          metric: z.string(),
          before: z.string(),
          after: z.string(),
          delta: z.string(),
        }),
      )
      .nonempty(),

    /** Disclosed test method + sample size. e.g. "≥100 conversions per creative over 7 days." */
    method: z.object({
      description: z.string(),
      sampleSize: z.string(),
    }),

    /** A supplement to hard numbers, never a substitute. */
    quote: z
      .object({
        text: z.string(),
        name: z.string(),
        role: z.string(),
      })
      .optional(),

    order: z.number().default(99),
  }),
});

export const collections = { playables, caseStudies };

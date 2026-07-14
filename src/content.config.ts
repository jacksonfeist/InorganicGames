import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Playables — the proof shelf. Schema per docs/playables.md.
 *
 * Two kinds of entry live here and they prove different things:
 *
 *   isSpec: true   A concept build for a real, named game we do not work for.
 *                  Renders as "Concept build for [Game]". This is the gallery
 *                  the buyer screens us with, and it is the spec-led outreach
 *                  asset. Currently EMPTY — Phase 0.
 *
 *   isSpec: false  Something we actually shipped (the TikTok Minis). Renders as
 *                  a shipped title. Never let one of these sit unlabelled next
 *                  to a concept build; they are not the same claim.
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

    /** Drives the "Concept build" label. See docs/playables.md §Honesty guardrails. */
    isSpec: z.boolean(),

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

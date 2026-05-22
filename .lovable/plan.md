## Goal

Add a new section directly below `PricingPlans` and above the next `TrustBar` on the home page (`/`), matching the screenshot: a clean grid of feature items, each with a dark rounded-square icon on the left and a title + muted description on the right, arranged in two columns.

## Where it goes

`src/routes/index.tsx` — insert between `<PricingPlans />` and the following `<TrustBar />`:

```text
WorkShowcase → TrustBar → ServicesList → WhyUs → TrustBar → PricingPlans → [NEW SECTION] → TrustBar → FAQ → FinalCTA
```

## New file

`src/components/sections/PricingIncludes.tsx`

- Wrapped in `OuterContainer` + `InnerContainer borders="x"` (same shell as `PricingPlans` / `WhyUs`).
- Top status bar: orange dot + label `"What's Included"` on the left, `04 | 04` on the right (mono 12px uppercase, matching siblings). Pricing's existing `03 | 04` stays as is.
- Body: 2-column responsive grid (`grid-cols-1 md:grid-cols-2`, ~gap-y-10 gap-x-16), 6 items.
- Each item: 
  - 56×56 dark icon tile (`#252525` → soft radial highlight, `rounded-2xl`, subtle inner ring + drop shadow) with a thin white line-art glyph centered (lucide icons, ~22px, white at ~70% opacity).
  - Right column: title (Gordita 18px/600, `#252525`) + description (Saans mono 14px, `rgba(37,37,37,0.55)`, `line-height: 1.5em`, `letter-spacing: -0.01em`), 2 lines max.

## Proposed 6 items (editable later)

1. Illustration, motion & more — "Illustration and animation designed to make your product feel alive and premium."
2. Premium Design — "You work directly with senior talent. No juniors. No outsourcing."
3. Fast turnaround — "Ship in days, not months. Daily updates, never weekly silence."
4. Built to scale — "Production-ready code and design systems that grow with your team."
5. SEO ready — "Semantic structure, fast performance, and metadata baked in from day one."
6. Ongoing support — "We stick around after launch — fixes, tweaks, and new features on demand."

## Styling tokens reused

- `mono` / `display` font stacks (copied from `PricingPlans.tsx` / `WhyUs.tsx`).
- Borders: `border-[color:var(--hairline)]`.
- Accent: `#ff7a1a` (status dot).

## Open question

The screenshot only shows 2 items ("Illustration, motion & more" and "Premium Desing"). I'll start with the 6 items above as placeholders — easy to rename/remove after you see it. If you have an exact list/copy, share it and I'll swap.

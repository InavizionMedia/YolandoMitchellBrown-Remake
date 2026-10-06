# YolandoMitchellBrown.com Remake — Brief v1 (2026-10-06)

Remake target: https://yolandomitchellbrown.com/ — Yolando Mitchell Brown's personal site.
Repo: `InavizionMedia/YolandoMitchellBrown-Remake` · branch `yolando-personal-v1`.

## Direction — from Yolando herself (2026-10-06)

Her words: **"Soft colors like The Starting Blocks but professional."**

What that means for the build:
- Warm light register like TSB (warm white base, near-black ink), but dialed toward
  professional-personal rather than TSB's corporate red. Red #E02B20 stays as the
  confident accent line, not the whole identity.
- Distinct from both existing remakes: not IM-Remake's dark cinematic broadcast,
  not TSB's full red corporate treatment. This is her personal brand — softer,
  editorial, authoritative.

One taste flag (then Jon locks): soften via warm neutrals + ivory surfaces, keep one
confident red accent (buttons, key rules, play icons) instead of carrying TSB's red
at corporate scale. That keeps it in the family without repeating TSB.

## Structure — what she asked for

1. **Hero** — personal brand statement (real copy from her site, nothing invented).
2. **About** — her story in her words.
3. **Resume** — on the page AND downloadable (PDF she provides or approves).
4. **Portfolio** — videos, photography, credit graphics: "all that stuff."
5. **Contact** — real details only.

## Easy-update build — hard requirement

She has to learn to update this herself. So:
- Labeled content blocks (`<!-- PORTFOLIO: videos -->` style markers).
- One `assets/` folder — everything she might swap lives there.
- `docs/EDITING-GUIDE.md` in plain language: how to change text, swap a photo,
  add a portfolio item. No build tools, no jargon.

## Best-practice locks (from our builds)

- **Copy-completeness gate:** real copy only. Nothing invented to fill space.
- **No base64 images:** separate files, lean HTML — iMessage/FB previews must work.
- **390px mobile-first** + containing-block / while-scrolled QA.
- **Lightbox discipline:** player loads on open, stops on close; only buttons open lightboxes.
- **Font-trap rule, toggle-affordance, designed-vs-assembled taste bar.**
- **SEO/meta checklist** from the TSB pass (title, description, OG card, favicon).

## Originality candidates (pattern library — pick, don't stack)

- Real glass refraction (SVG feTurbulence/feDisplacementMap) on portfolio cards.
- Liquid tab bar for portfolio filters (videos / photos / graphics).
- Pure-CSS 3D carousel for career highlights or testimonials.
- Editorial numerals for career stats (Ivory discipline: contrast-checked, never
  gold-on-ivory failures).
- Visual Codes photo codes for her portraits (`/editorial`, `/headshot`).

## Open content (blocks the full build, not the setup)

- [ ] Her assets — she said "Let me gather." Portfolio links, videos, photos, resume.
- [ ] Recon of the live site — in flight; brief v2 folds in real copy + brand inventory.
- [ ] Resume file — pending her.

v1 is the direction + framework lock. v2 adds the real site content. Build starts on Jon's go.

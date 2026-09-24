# Design System

How this portfolio is built and why. Keep this file in sync when you change
tokens, type, or component patterns.

## Stack

- **Astro** with SSR (`output: "server"`, `@astrojs/node` standalone adapter).
  No client framework. Interactivity is plain `<script>` islands.
- **Tailwind v4** through `@tailwindcss/vite`. All tokens live in
  `src/styles/global.css` inside `@theme`. There is no `tailwind.config.mjs`;
  Tailwind v4 does not read it.
- **Typography plugin** loaded in CSS: `@plugin "@tailwindcss/typography";`.
- Aliases: `@components/*`, `@data/*`, `@sections/*`, `@layouts/*`,
  `@assets/*`, `@styles/*`, `@lib/*`.

## Type

Self-hosted through Fontsource. No Google Fonts `<link>`.

| Role | Family | Notes |
| --- | --- | --- |
| Display | Geist Variable | Headings only (`font-display`) |
| Body | Geist Variable | Default body (`font-body`) |
| Mono | IBM Plex Mono | Labels, meta, dates, numbers (`font-mono`) |

Imports live in `src/layouts/Layout.astro`:

```ts
import "@fontsource-variable/geist";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
```

Rules:

- Headlines read naturally. No italic word swapped into a sans headline.
- If italic is ever used in display type, use `leading-[1.1]` minimum plus a
  small bottom reserve so descenders (`y g j p q`) do not clip.
- Mono is for labels and data. Do not use it for running body copy.

## Color

Two roles, strictly separated.

**Action color.** `--color-accent` (deep green). Every button, link emphasis,
and the global focus ring use it. It does not change from section to section.

**Content keys.** Four hue families label content types. They appear only where
they identify real content (badges, timeline markers, card edges, category
pills). They are never used as competing button colors.

| Key | Meaning | Token family |
| --- | --- | --- |
| Amber | Education | `edu-tint` / `edu` / `edu-deep` |
| Green | Experience | `exp-tint` / `exp` / `exp-deep` |
| Iris | Portfolio | `folio-tint` / `folio` / `folio-deep` |
| Clay | Articles | `article-tint` / `article` / `article-deep` |

Surfaces: `base` (page), `surface` (alternating bands / cards), `ink` (text,
and the dark CTA band), `ink-soft` (secondary text).

**One page, one theme.** All tokens flip together under
`prefers-color-scheme: dark` in `global.css`. No section inverts on its own.
Do not use pure black or pure white.

## Shape and spacing

One radius scale, applied consistently:

- Cards, panels, media: `rounded-2xl` (smaller inline cards `rounded-xl`)
- Inputs, skeleton blocks: `rounded-lg`
- Buttons, pills, badges: `rounded-full`

Repeated but non-decorative: status and timeline dots exist only where they
carry real state (availability, content type). No dots for decoration.

## Layout

- Page width: `mx-auto max-w-6xl px-6 sm:px-8`.
- Sections: `scroll-mt-20 py-20 sm:py-28` via `SectionContainer`.
- Hero top padding is capped at `pt-20` so the hero sits in the first viewport.
- Full-height areas use `min-h-[100dvh]`, never `h-screen`.
- Breakpoints, spacing, and columns come from Tailwind defaults.

Section headers vary. `SectionHeading` takes `title`, optional `description`,
optional `kicker`, and `align`. Do not put a small uppercase label above every
section; use a kicker only where it adds meaning.

## Components

| Component | Purpose |
| --- | --- |
| `layout/SectionContainer.astro` | Section wrapper: id, `bg` (base/surface/ink), spacing |
| `layout/SectionHeading.astro` | Title + optional description/kicker |
| `layout/Navbar.astro` | Sticky nav, active-page state, one CTA |
| `layout/Footer.astro` | Nav + contact columns, social row |
| `ui/Button.astro` | `primary` / `secondary` / `ghost` / `inverted` |
| `ui/Badge.astro` | Content-key pill: edu / exp / folio / article / neutral |
| `ui/Icon.astro` | Single inline icon set (Lucide paths), `strokeWidth` 1.75 |
| `ui/SocialIcon.astro` | Thin wrapper over `Icon` |
| `cards/TimelineItem.astro` | Education / experience entry (dot + line) |
| `cards/PortfolioCard.astro` | Project card (real thumbnail when available) |
| `cards/ArticleCard.astro` | Article card |

`Button` variants: `primary` (accent + hard ink shadow), `secondary`
(bordered), `ghost` (text link), `inverted` (for use on the `ink` band).

## Imagery

Real images only. No div-based fake screenshots, no letter-on-gradient
placeholders, no hand-rolled decorative SVGs.

- Project images come from the API field `project.thumbnail`.
- When a thumbnail is missing, cards degrade to a plain `bg-surface` panel with
  a tech label. They never fake a screenshot.
- Icons come from `ui/Icon.astro`. Do not add hand-drawn SVG paths inline.
- A portrait asset is not yet available. The hero and about sections are
  intentionally type-led until a real photo is added.

## Motion

Restrained. Motion is opt-in and honest.

- `MOTION` intent is low: hover color transitions, and a single scroll reveal.
- Reveal markup: add `class="reveal"`; a tiny inline script in `Layout.astro`
  adds `.reveal-ready` to `<html>` only when JS is on and motion is allowed,
  then an `IntersectionObserver` adds `.is-visible`.
- All animation is disabled under `prefers-reduced-motion: reduce` and renders
  fully visible without JavaScript.
- Animate `transform` and `opacity` only. No `window.addEventListener("scroll")`.

## Accessibility

- WCAG AA contrast for body, labels, placeholders, and buttons.
- One visible focus ring (accent colored) on every interactive element.
- Form fields have real labels, helper text lives in markup, errors render
  below the field.
- Nav marks the current page with `aria-current="page"`.
- Marquee, scroll-jacking, and custom cursors are not used.

## Copy

- No em-dashes or en-dashes in visible text. Use periods, commas, colons, or
  hyphens.
- One label per intent. Contact intent is always "Get in touch"; the form
  submit stays "Send message".
- No section numbers, no fake-precise statistics, no "Jane Doe" placeholders.

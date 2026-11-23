# Design System

The portfolio pairs Geist headings with IBM Plex Mono labels and a graphite,
paper and lime palette. The homepage leads with an interactive three-layer
diagram of Akmal’s stack. A technology strip leads into selected work.
Project and article archives, detail pages and the contact form share the same
type, color and navigation system.

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
```

Rules:

- Headlines read naturally. No italic word swapped into a sans headline.
- If italic is ever used in display type, use `leading-[1.1]` minimum plus a
  small bottom reserve so descenders (`y g j p q`) do not clip.
- Mono is for labels and data. Do not use it for running body copy.

## Color

Two roles, strictly separated.

**Action colors.** Forest green emphasizes links on light surfaces. Lime emphasizes
links on dark surfaces and fills primary navigation actions in both themes.

**Content keys.** Four hue families label content types. They appear only where
they identify real content (badges, timeline markers, card edges, category
pills). They are never used as competing button colors.

| Key | Meaning | Token family |
| --- | --- | --- |
| Amber | Education | `edu-tint` / `edu` / `edu-deep` |
| Green | Experience | `exp-tint` / `exp` / `exp-deep` |
| Leaf | Portfolio | `folio-tint` / `folio` / `folio-deep` |
| Clay | Articles | `article-tint` / `article` / `article-deep` |

Surfaces: `base` (page), `surface` (alternating bands / cards), `ink` (text,
and the dark CTA band), `ink-soft` (secondary text).

**One page, one theme.** All tokens flip together under
`prefers-color-scheme: dark` in `global.css`. No section inverts on its own.
The stack explorer has its own dark instrument panel in both themes.

## Shape and spacing

One radius scale, applied consistently:

- Cards, panels, media: `rounded-2xl` (smaller inline cards `rounded-xl`)
- Inputs, skeleton blocks: `rounded-lg`
- Buttons and content badges: small radii. Filter chips: `rounded-full`

Repeated but non-decorative: status and timeline dots exist only where they
carry real state (availability, content type). No dots for decoration.

## Layout

- Page width: `mx-auto max-w-6xl px-6 sm:px-8`.
- Sections: `scroll-mt-20 py-14 sm:py-20` via `SectionContainer`.
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

`Button` variants: `primary` (lime surface with dark text), `secondary`
(bordered), `ghost` (text link), `inverted` (for use on the `ink` band).

## Imagery

Real images only. No div-based fake screenshots, no letter-on-gradient
placeholders, no hand-rolled decorative SVGs.

- Project images come from the API field `project.thumbnail`.
- When a thumbnail is missing, cards degrade to a plain `bg-surface` panel with
  a tech label. They never fake a screenshot.
- Icons come from `ui/Icon.astro`. Do not add hand-drawn SVG paths inline.
- The interactive stack diagram is drawn with CSS. Its three buttons select
  frontend, backend and database tools. The original monogram appears in the
  footer and in social previews.

## Motion

Changing the selected layer highlights and lifts the corresponding board.
The system reduced-motion setting makes these changes immediate.

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

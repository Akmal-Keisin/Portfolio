# Design System Guide

Complete reference for the portfolio's visual language, component patterns, and architecture.

---

## 1. Philosophy

The site follows a **warm editorial** aesthetic — not a cold tech portfolio. Every design decision ties back to one rule: **color = content type**. Amber means education, green means experience, purple means portfolio, terracotta means articles. This mapping repeats in badges, timeline dots, card borders, nav underlines, and section headings so color always signals _what kind_ of content you're looking at, not just decoration.

---

## 2. Design Tokens

Defined in `src/styles/global.css` via Tailwind v4's `@theme` directive.

### Color Palette

```css
/* Base — warm off-white editorial feel */
--color-base: #fafaf8;        /* page background */
--color-surface: #f1efe8;     /* elevated surfaces, subtle bg */
--color-ink: #2c2c2a;         /* primary text */
--color-ink-soft: #5b5b56;    /* secondary/muted text */

/* Education — amber/brown (growth, foundation) */
--color-edu-tint: #faeeda;
--color-edu: #ef9f27;
--color-edu-deep: #b26b00;

/* Experience — green (work, momentum) */
--color-exp-tint: #e1f5ee;
--color-exp: #1d9e75;
--color-exp-deep: #085041;

/* Portfolio — purple (making, imagination) */
--color-folio-tint: #eeedfe;
--color-folio: #857dff;
--color-folio-deep: #5d58ad;

/* Articles — terracotta (voice, ideas) */
--color-article-tint: #faece7;
--color-article: #d85a30;
--color-article-deep: #712b13;
```

### Typography

```css
--font-display: "Fraunces", "Iowan Old Style", ui-serif, Georgia, serif;
--font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-mono: "IBM Plex Mono", ui-monospace, "SFMono-Regular", monospace;
```

- **Fraunces** — headings, hero text, section titles (variable optical size serif)
- **Inter** — body copy, descriptions, paragraphs
- **IBM Plex Mono** — eyebrows, labels, badges, nav links, metadata

### Font Classes

Use `font-display`, `font-body`, and `font-mono` utility classes throughout.

---

## 3. UI Primitives

All primitives live in `src/components/ui/`.

### Badge

```astro
<Badge variant="edu">Education</Badge>
```

| Variant | Background | Text |
|---------|-----------|------|
| `edu` | `bg-edu-tint` | `text-edu-deep` |
| `exp` | `bg-exp-tint` | `text-exp-deep` |
| `folio` | `bg-folio-tint` | `text-folio-deep` |
| `article` | `bg-article-tint` | `text-article-deep` |
| `neutral` | `bg-surface` | `text-ink-soft` |

Styled as: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono font-medium tracking-wide`

### Button

```astro
<Button href="#portfolio" variant="primary">View my work</Button>
<Button href="#contact" variant="secondary">Get in touch</Button>
<Button variant="ghost">Learn more</Button>
```

| Variant | Style |
|---------|-------|
| `primary` | `bg-exp-deep text-base` with ink shadow offset (3D press effect) |
| `secondary` | `bg-transparent text-ink border-2 border-ink` with fill on hover |
| `ghost` | `bg-transparent text-ink-soft underline underline-offset-4` |

Auto-renders as `<a>` when `href` is provided, `<button>` otherwise. Supports `disabled` state.

### SocialIcon

```astro
<SocialIcon icon="github" class="w-5 h-5" />
```

Available icons: `github`, `linkedin`, `instagram`, `mail`, `arrow-up-right`

All are inline SVGs with `fill="currentColor"` or `stroke="currentColor"`.

---

## 4. Layout Components

### SectionContainer

Wraps every major section. Provides consistent vertical padding and max-width centering.

```astro
<SectionContainer id="about" bg="base">
  <!-- section content -->
</SectionContainer>
```

| Prop | Values | Default |
|------|--------|---------|
| `id` | string | — |
| `bg` | `"base"` \| `"surface"` \| `"ink"` | `"base"` |
| `class` | string | `""` |

Base classes: `scroll-mt-20 py-20 sm:py-28` with `mx-auto max-w-6xl px-6 sm:px-8`

When `bg="ink"`, text inverts to `text-base` for contrast.

### SectionHeading

Standard eyebrow + title + description block used at the top of every section.

```astro
<SectionHeading
  eyebrow="About Me"
  title="More than just a learner"
  description="..."
  accent="exp"
  align="left"
/>
```

| Prop | Values | Default |
|------|--------|---------|
| `eyebrow` | string | — |
| `title` | string | — |
| `description` | string | — |
| `accent` | `BadgeVariant` | `"neutral"` |
| `align` | `"left"` \| `"center"` | `"left"` |

The `accent` prop picks the colored dot next to the eyebrow text from the same `BadgeVariant` type family.

---

## 5. Card Patterns

### ArticleCard

Used in article listing grids. Terracotta accent on hover.

```astro
<ArticleCard post={article} />
```

- Rounded `3xl` border card with `border-ink/10`
- Tags rendered as `<Badge variant="article">`
- Title uses `squiggle-underline` with `text-article-deep` / `decoration-article`
- Hover: `-translate-y-1`, `border-article/40`, `shadow-lg`
- Footer: date in mono + "Read article" link with arrow icon

### PortfolioCard

Used in project listing grids. Purple accent on hover.

```astro
<PortfolioCard project={project} />
```

- Top section: `bg-folio-tint` with radial gradient, displays first letter of title as large initial
- Tags rendered as `<Badge variant="folio">` and `<Badge variant="neutral">`
- Title uses `squiggle-underline` with `text-folio-deep` / `decoration-folio`
- Hover: same translate/shadow pattern as ArticleCard

### TimelineItem

Vertical timeline for education and experience history.

```astro
<TimelineItem
  variant="edu"
  title="Multimedia"
  subtitle="SMKN 11 Semarang"
  period="2019 – 2022"
  summary="..."
  tags={["Design", "Photography"]}
  isLast={false}
/>
```

- Left column: colored dot (`edu` or `exp`) + connecting line
- Right column: title, subtitle, period, summary, badge tags
- `isLast={true}` hides the connecting line

---

## 6. Decorative Patterns

### Ambient Color Blobs

Hero sections use absolute-positioned blurred circles for a soft editorial haze:

```astro
<div class="pointer-events-none absolute inset-0" aria-hidden="true">
  <div class="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-exp-tint blur-3xl"></div>
  <div class="absolute right-[-6rem] top-10 h-80 w-80 rounded-full bg-folio-tint blur-3xl"></div>
  <div class="absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-article-tint blur-3xl"></div>
</div>
```

### Watermark Numerals

Sections use large semi-transparent numbers (01, 02, 03...) as decorative watermarks:

```astro
<div class="absolute top-6 right-6 font-display text-[180px] leading-none select-none pointer-events-none text-moss-100" aria-hidden="true">
  04
</div>
```

### Squiggle Underline

A hand-drawn SVG underline accent used on key links:

```css
.squiggle-underline {
  background-image: url("data:image/svg+xml,...");
  background-repeat: no-repeat;
  background-position: 0 92%;
  background-size: 100% 0.4em;
}
```

Apply via the `squiggle-underline` class on `<a>` tags.

### Focus Ring

Consistent keyboard focus indicator across the site:

```css
a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible {
  outline: 2px solid var(--color-folio-deep);
  outline-offset: 3px;
  border-radius: 4px;
}
```

---

## 7. Page Architecture

### File-Based Routing

```
src/pages/
├── index.astro              # Homepage (8 sections)
├── about.astro              # About page
├── skills.astro             # Skills page
├── project.astro            # Projects listing
├── article.astro            # Articles listing
├── contact.astro            # Contact page
├── article/[slug].astro     # Dynamic article detail
├── project/[slug].astro     # Dynamic project detail
├── rss.xml.js               # RSS feed
├── 404.astro                # Error page
└── 500.astro                # Server error page
```

### Homepage Composition

```
Layout.astro
├── Navbar (sticky, glass effect)
└── <slot>
    ├── Hero          — ambient blobs, availability badge, color-coded legend nav
    ├── About         — bio, principles grid, education card, work history rail
    ├── Education     — TimelineItem components
    ├── Experience    — TimelineItem components
    ├── Skills        — dark bg, categorized logo grid, approach pills
    ├── Articles      — latest 3 ArticleCards
    ├── Projects      — latest 3 PortfolioCards
    └── Contact       — contact form + contact details sidebar
```

### Layout Shell

`Layout.astro` wraps every page:

```astro
<html lang="en">
  <head> <!-- meta, fonts (Google Fonts: Fraunces, Inter, IBM Plex Mono) --> </head>
  <body class="bg-base text-ink antialiased">
    <Navbar />
    <slot />
    <Footer />
  </body>
</html>
```

### Navbar

- Sticky header with `bg-base/85 backdrop-blur` glass effect
- Desktop: logo + name, horizontal nav links, "Say hello" CTA button
- Mobile: hamburger toggle, slide-down menu
- Nav links animate underline on hover via CSS `background-size` transition

### Footer

- Dark (`bg-ink`) four-column grid
- Branding + tagline + social icons (2 cols), navigation links, contact info
- Copyright line at bottom

---

## 8. Data Architecture

### Static Data

All personal data lives in `src/data/profile.ts` — the single source of truth:

```ts
export const profile = {
  name: "Akmal Keisin",
  initials: "AK",
  role: "Full-Stack Developer",
  location: "Semarang, Indonesia",
  tagline: "Learn more purposeful software",
  bio: [...],
  availability: "Open to new opportunities",
  email: "helloakmalkeisin@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: [...],
  skills: ["PHP", "Laravel", "MySQL", ...],
} as const;
```

Education and experience data also live in `src/data/education.ts` and `src/data/experience.ts`.

### Dynamic Data (API)

Articles, projects, and categories are fetched from a Laravel REST API:

```ts
// src/lib/api.ts
const API_URL = import.meta.env.PUBLIC_API_URL || "http://localhost:8000/api";

export async function getArticles(page = 1) { ... }
export async function getProjects(page = 1) { ... }
export async function sendMessage(data) { ... }
```

All API calls happen server-side (SSR), never exposed to the client.

### Content Collections

Blog content uses Astro's content collections with a Zod schema:

```ts
// src/content.config.ts
// Schema: title, description, pubDate, updatedDate, heroImage
```

---

## 9. Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (< 640px) | Single column, hamburger nav, full-width cards |
| Tablet (640px – 768px) | 2-column grids, visible desktop nav |
| Desktop (768px+) | 3-column grids, full nav with CTA button |

Key responsive patterns:
- `max-w-6xl` centering on all sections
- `sm:px-8` for horizontal padding on larger screens
- `lg:grid-cols-*` for multi-column layouts
- `hidden md:flex` / `md:hidden` for nav visibility toggle

---

## 10. Accessibility

- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`)
- `aria-hidden="true"` on decorative elements (blobs, watermarks, SVG patterns)
- `aria-label` on icon-only buttons and links
- `aria-expanded` / `aria-controls` on mobile menu toggle
- `prefers-reduced-motion` media query disables all animations
- Visible focus ring (`outline: 2px solid var(--color-folio-deep)`) on all interactive elements
- `scroll-mt-20` on sections for offset anchoring

---

## 11. Performance

- **SSR via `@astrojs/node`** — pages rendered on each request, API data fetched server-side
- **No client-side JS framework** — vanilla `<script>` tags for interactivity (form handling, mobile menu)
- **Sharp** for server-side image optimization
- **Google Fonts** loaded via `<link>` with `preconnect`
- **Docker multi-stage build** — `node:lts-alpine` runtime, minimal image size
- **Static assets** served from `public/` directory

---

## 12. Extension Guidelines

### Adding a New Content Type

1. Add a new color family to `global.css` `@theme` block (e.g., `--color-talk-tint`, `--color-talk`, `--color-talk-deep`)
2. Add variant to `BadgeVariant` type in `Badge.astro`
3. Add variant to `SectionHeading`'s `accentDot` map
4. Create card component following `ArticleCard` / `PortfolioCard` pattern
5. Create section following existing section pattern

### Adding a New Page

1. Create `src/pages/new-page.astro`
2. Import `Layout` and compose sections
3. Add nav link to `Navbar.astro` `links` array
4. Add footer link to `Footer.astro` `links` array

### Modifying the Color System

All colors are defined as CSS custom properties in `global.css`. Changing a token value cascades through every component that references it. The semantic mapping (`edu` → education, `exp` → experience, etc.) is enforced by component convention, not by framework — maintain this pattern when adding new components.

---

## 13. Deployment

- **Docker:** Multi-stage build (`Dockerfile`), runtime on `node:lts-alpine`, exposes port 4321
- **Reverse Proxy:** Nginx with SSL (Let's Encrypt) or Traefek with automatic certificate management
- **Environment:** `PUBLIC_API_URL` env var points to the Laravel API backend
- **Compose:** `compose.yaml` defines the service with Traefek labels for production routing

export interface PortfolioEntry {
  slug: string;
  title: string;
  role: string;
  year: string;
  excerpt: string;
  tags: string[];
  cover: string;
}

// Each `slug` is meant to back a future /portfolio/[slug] detail page.
export const portfolio: PortfolioEntry[] = [
  {
    slug: "lumen-finance-dashboard",
    title: "Lumen — Finance Dashboard",
    role: "Product Design + Frontend",
    year: "2025",
    excerpt:
      "A reporting dashboard for a fintech startup, rebuilt around a token-based design system and real-time charts.",
    tags: ["Product Design", "React"],
    cover: "lumen",
  },
  {
    slug: "warung-pintar-pos",
    title: "Warung Pintar — POS App",
    role: "Product Design",
    year: "2024",
    excerpt:
      "A point-of-sale app designed for low-literacy, low-connectivity contexts, tested in five small warungs across Java.",
    tags: ["Mobile", "Research"],
    cover: "warung",
  },
  {
    slug: "studio-kirana-brand-site",
    title: "Studio Kirana — Brand Site",
    role: "Design + Development",
    year: "2023",
    excerpt:
      "The identity and website for my own studio: a warm, editorial system built to hold both case studies and writing.",
    tags: ["Branding", "Astro"],
    cover: "brand",
  },
];

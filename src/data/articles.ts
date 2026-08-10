export interface ArticleEntry {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  cover: string;
}

// Each `slug` is meant to back a future /article/[slug] detail page.
export const articles: ArticleEntry[] = [
  {
    slug: "designing-with-constraints",
    title: "Designing with constraints, not around them",
    excerpt:
      "Why the tightest client briefs I've worked with produced the best design decisions, and how to invite constraints in on purpose.",
    date: "2026-06-12",
    readingTime: "6 min read",
    tags: ["Design"],
    cover: "constraints",
  },
  {
    slug: "component-libraries-that-survive-contact",
    title: "Component libraries that survive contact with real product work",
    excerpt:
      "Most design systems fall apart at the edges. Notes on building components that flex instead of break.",
    date: "2026-04-03",
    readingTime: "8 min read",
    tags: ["Systems", "Frontend"],
    cover: "systems",
  },
  {
    slug: "a-year-of-freelance-design",
    title: "A year of running my own studio",
    excerpt:
      "What changed, what I got wrong, and the three habits that kept the pipeline full without burning out.",
    date: "2026-01-20",
    readingTime: "5 min read",
    tags: ["Career"],
    cover: "freelance",
  },
];
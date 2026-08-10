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
    slug: "from-html-tables-to-eloquent-relationships",
    title: "From HTML tables to Eloquent relationships",
    excerpt:
      "How my first database designs — tables for everything, keys for nothing — taught me to model data properly in Laravel.",
    date: "2026-06-12",
    readingTime: "6 min read",
    tags: ["Laravel", "Database"],
    cover: "eloquent",
  },
  {
    slug: "go-fiber-gateway-what-i-learned",
    title: "What building an API gateway with Go Fiber taught me",
    excerpt:
      "High-concurrency routing, middleware, and why a language that compiles fast forces you to think slower.",
    date: "2026-04-03",
    readingTime: "8 min read",
    tags: ["Go", "Backend"],
    cover: "gateway",
  },
  {
    slug: "self-taught-engineer-discipline",
    title: "The autodidact's stack: discipline over tutorials",
    excerpt:
      "Four years in, the habit that moves the needle isn't another course — it's reading source code and shipping daily.",
    date: "2026-01-20",
    readingTime: "5 min read",
    tags: ["Career", "Learning"],
    cover: "discipline",
  },
];
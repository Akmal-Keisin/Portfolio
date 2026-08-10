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
    slug: "reprime",
    title: "Reprime — Business Management Platform",
    role: "Full-stack Development",
    year: "2022 — Now",
    excerpt:
      "A full-featured ERP and HR platform serving thousands of active users across multiple companies. Covers attendance, payroll, project tracking, and asset management.",
    tags: ["Laravel", "Vue", "PostgreSQL", "Go", "Astro"],
    cover: "reprime",
  },
  {
    slug: "hr-factory",
    title: "HR Module — Factory Workforce System",
    role: "Full-stack Development",
    year: "2023",
    excerpt:
      "Complex HR project built for a large factory client with thousands of active daily users. Covers shift scheduling, overtime calculation, and multi-branch payroll.",
    tags: ["Laravel", "MySQL", "TypeScript"],
    cover: "hr",
  },
  {
    slug: "go-fiber-gateway",
    title: "REST API Gateway with Go Fiber",
    role: "Backend Engineering",
    year: "2024",
    excerpt:
      "High-performance API gateway built with Go Fiber. Includes JWT auth, rate limiting, request logging, and a Redis caching layer. Benchmarked at 40k req/s.",
    tags: ["Go", "Fiber", "Redis", "PostgreSQL"],
    cover: "gateway",
  },
];
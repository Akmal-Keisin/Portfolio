export interface PaginatedResource<T> {
  data: T[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string | null;
  stack: string[];
  category: string;
  live_url: string | null;
  repo_url: string | null;
  status: "completed" | "ongoing" | "archived";
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export const dummyProjects: PaginatedResource<Project> = {
  data: [
    {
      id: 1,
      title: "Reprime — Business Management Platform",
      slug: "reprime",
      featured: true,
      status: "ongoing",
      category: "SaaS",
      thumbnail: null,
      excerpt:
        "A full-featured ERP and HR platform serving thousands of active users across multiple companies. Covers attendance, payroll, project tracking, and asset management.",
      stack: ["Laravel", "Vue", "PostgreSQL", "Go", "Fiber", "Astro"],
      live_url: "https://reprime.id",
      repo_url: null,
      createdAt: "2022-09-01",
      updatedAt: "2025-05-01",
    },
    {
      id: 2,
      title: "HR Module — Factory Workforce System",
      slug: "hr-factory",
      featured: false,
      status: "completed",
      category: "Enterprise",
      thumbnail: null,
      excerpt:
        "Complex HR project built for a large factory client with thousands of active daily users. Covers shift scheduling, overtime calculation, and multi-branch payroll.",
      stack: ["Laravel", "MySQL", "TypeScript"],
      live_url: null,
      repo_url: null,
      createdAt: "2023-10-01",
      updatedAt: "2024-06-01",
    },
    {
      id: 3,
      title: "REST API Gateway with Go Fiber",
      slug: "go-fiber-gateway",
      featured: false,
      status: "completed",
      category: "Backend",
      thumbnail: null,
      excerpt:
        "High-performance API gateway built with Go Fiber. Includes JWT auth, rate limiting, request logging, and a Redis caching layer. Benchmarked at 40k req/s.",
      stack: ["Go", "Fiber", "Redis", "PostgreSQL"],
      live_url: null,
      repo_url: "https://github.com/akmal/go-fiber-gateway",
      createdAt: "2024-02-01",
      updatedAt: "2024-05-01",
    },
    {
      id: 4,
      title: "Portfolio — This Site",
      slug: "portfolio",
      featured: false,
      status: "ongoing",
      category: "Frontend",
      thumbnail: null,
      excerpt:
        "My personal portfolio built with Astro and Tailwind. Static-first with Astro Islands for interactive sections. Zero JS on most pages.",
      stack: ["Astro", "TypeScript", "Tailwind"],
      live_url: "#",
      repo_url: "https://github.com/akmal/portfolio",
      createdAt: "2025-01-01",
      updatedAt: "2025-05-01",
    },
    {
      id: 5,
      title: "Inventory & Asset Tracking Module",
      slug: "inventory-module",
      featured: false,
      status: "completed",
      category: "SaaS",
      thumbnail: null,
      excerpt:
        "Internal inventory system built as a module inside the Reprime platform. Tracks company assets, depreciation schedules, and purchase orders.",
      stack: ["Laravel", "Vue", "PostgreSQL"],
      live_url: null,
      repo_url: null,
      createdAt: "2023-03-01",
      updatedAt: "2023-09-01",
    },
    {
      id: 6,
      title: "Lumen Microservice — Notification Worker",
      slug: "lumen-notification",
      featured: false,
      status: "archived",
      category: "Backend",
      thumbnail: null,
      excerpt:
        "Lightweight Lumen microservice handling email, SMS, and push notification dispatch via queue workers. Processes 10k+ notifications per day.",
      stack: ["PHP", "Lumen", "MySQL", "Redis"],
      live_url: null,
      repo_url: "https://github.com/akmal/lumen-notify",
      createdAt: "2022-11-01",
      updatedAt: "2023-06-01",
    },
  ],
  links: { first: "#", last: "#", prev: null, next: "#" },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 2,
    path: "/project",
    per_page: 6,
    to: 6,
    total: 11,
  },
};

export const STATUS_COLORS: Record<string, string> = {
  completed: "bg-exp",
  ongoing: "bg-folio animate-pulse",
  archived: "bg-ink-soft/40",
};

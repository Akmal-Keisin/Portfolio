export interface PaginatedResource<T> {
    data: T[];
    links: {
        first: string;
        last:  string;
        prev:  string | null;
        next:  string | null;
    };
    meta: {
        current_page: number;
        from:         number;
        last_page:    number;
        path:         string;
        per_page:     number;
        to:           number;
        total:        number;
    };
}

export interface Article {
    id:        number;
    title:     string;
    slug:      string;
    excerpt:   string;
    author:    string;
    category:  string;
    tags:      string[];
    createdAt: string;
    updatedAt: string;
}

export const dummyArticles: PaginatedResource<Article> = {
    data: [
        {
            id: 1, title: "Building a High-Performance REST API with Laravel and Go Fiber",
            slug: "laravel-go-fiber-api", excerpt: "A hands-on comparison of building the same API in both frameworks — benchmarks, DX tradeoffs, and when to reach for each one.",
            author: "Akmal Keisin", category: "Backend", tags: ["Laravel", "Go", "API"],
            createdAt: "2025-05-12", updatedAt: "2025-05-12",
        },
        {
            id: 2, title: "Composables That Don't Leak: Vue 3 Patterns I Actually Use",
            slug: "vue3-composables", excerpt: "Practical patterns for writing reusable, testable Vue 3 composables without the memory leak pitfalls.",
            author: "Akmal Keisin", category: "Frontend", tags: ["Vue", "TypeScript"],
            createdAt: "2025-04-28", updatedAt: "2025-04-30",
        },
        {
            id: 3, title: "PostgreSQL Indexing Strategies for Growing Applications",
            slug: "postgres-indexing", excerpt: "When a single index isn't enough. Covering partial, composite, and covering indexes with real EXPLAIN ANALYZE output.",
            author: "Akmal Keisin", category: "Database", tags: ["PostgreSQL", "Performance"],
            createdAt: "2025-04-03", updatedAt: "2025-04-03",
        },
        {
            id: 4, title: "Astro Islands + SSR: The Architecture Behind This Site",
            slug: "astro-islands-ssr", excerpt: "How I combined Astro's island architecture with SSR to get fast static pages with dynamic personalisation.",
            author: "Akmal Keisin", category: "Architecture", tags: ["Astro", "SSR"],
            createdAt: "2025-03-17", updatedAt: "2025-03-20",
        },
        {
            id: 5, title: "Understanding Go Fiber Middleware from Scratch",
            slug: "go-fiber-middleware", excerpt: "Demystifying the middleware chain in Go Fiber — how to write, compose, and test your own middleware cleanly.",
            author: "Akmal Keisin", category: "Backend", tags: ["Go", "Fiber"],
            createdAt: "2025-03-01", updatedAt: "2025-03-01",
        },
        {
            id: 6, title: "MySQL vs PostgreSQL: Choosing the Right Database for Your Laravel App",
            slug: "mysql-vs-postgresql-laravel", excerpt: "A pragmatic guide to choosing between MySQL and PostgreSQL for your Laravel project, based on real-world tradeoffs.",
            author: "Akmal Keisin", category: "Database", tags: ["MySQL", "PostgreSQL", "Laravel"],
            createdAt: "2025-02-14", updatedAt: "2025-02-14",
        },
    ],
    links: { first: "#", last: "#", prev: null, next: "#" },
    meta:  { current_page: 1, from: 1, last_page: 3, path: "/articles", per_page: 6, to: 6, total: 18 },
};

export const CATEGORY_COLORS: Record<string, string> = {
  Backend:      "bg-moss-700 text-mint border-moss-600",
  Frontend:     "bg-mint-light text-moss-700 border-mint",
  Database:     "bg-sage-200 text-ink border-sage-300",
  Architecture: "bg-ink text-fog border-ink-light",
};

export function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

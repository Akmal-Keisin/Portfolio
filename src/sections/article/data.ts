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
        from:         number | null;
        last_page:    number;
        path:         string;
        per_page:     number;
        to:           number | null;
        total:        number;
    };
}

export interface Category {
    id: number;
    name: string;
    slug?: string;
    description?: string;
    articleCount?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface Tag {
    id: number;
    name: string;
    slug?: string;
    description?: string;
    articleCount?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface Article {
    id:        number;
    title:     string;
    slug:      string;
    excerpt:   string;
    content?:  any;
    author:    string;
    category:  Category;
    tags:      Tag[];
    createdAt: string;
    updatedAt: string;
}

export const dummyArticles: PaginatedResource<Article> = {
    data: [
        {
            id: 1, title: "Building a High-Performance REST API with Laravel and Go Fiber",
            slug: "laravel-go-fiber-api", excerpt: "A hands-on comparison of building the same API in both frameworks — benchmarks, DX tradeoffs, and when to reach for each one.",
            author: "Akmal Keisin", category: { id: 1, name: "Backend" }, tags: [{ id: 1, name: "Laravel" }, { id: 2, name: "Go" }, { id: 3, name: "API" }],
            createdAt: "2025-05-12", updatedAt: "2025-05-12",
        },
        {
            id: 2, title: "Composables That Don't Leak: Vue 3 Patterns I Actually Use",
            slug: "vue3-composables", excerpt: "Practical patterns for writing reusable, testable Vue 3 composables without the memory leak pitfalls.",
            author: "Akmal Keisin", category: { id: 2, name: "Frontend" }, tags: [{ id: 4, name: "Vue" }, { id: 5, name: "TypeScript" }],
            createdAt: "2025-04-28", updatedAt: "2025-04-30",
        },
        {
            id: 3, title: "PostgreSQL Indexing Strategies for Growing Applications",
            slug: "postgres-indexing", excerpt: "When a single index isn't enough. Covering partial, composite, and covering indexes with real EXPLAIN ANALYZE output.",
            author: "Akmal Keisin", category: { id: 3, name: "Database" }, tags: [{ id: 6, name: "PostgreSQL" }, { id: 7, name: "Performance" }],
            createdAt: "2025-04-03", updatedAt: "2025-04-03",
        },
        {
            id: 4, title: "Astro Islands + SSR: The Architecture Behind This Site",
            slug: "astro-islands-ssr", excerpt: "How I combined Astro's island architecture with SSR to get fast static pages with dynamic personalisation.",
            author: "Akmal Keisin", category: { id: 4, name: "Architecture" }, tags: [{ id: 8, name: "Astro" }, { id: 9, name: "SSR" }],
            createdAt: "2025-03-17", updatedAt: "2025-03-20",
        },
        {
            id: 5, title: "Understanding Go Fiber Middleware from Scratch",
            slug: "go-fiber-middleware", excerpt: "Demystifying the middleware chain in Go Fiber — how to write, compose, and test your own middleware cleanly.",
            author: "Akmal Keisin", category: { id: 1, name: "Backend" }, tags: [{ id: 2, name: "Go" }, { id: 10, name: "Fiber" }],
            createdAt: "2025-03-01", updatedAt: "2025-03-01",
        },
        {
            id: 6, title: "MySQL vs PostgreSQL: Choosing the Right Database for Your Laravel App",
            slug: "mysql-vs-postgresql-laravel", excerpt: "A pragmatic guide to choosing between MySQL and PostgreSQL for your Laravel project, based on real-world tradeoffs.",
            author: "Akmal Keisin", category: { id: 3, name: "Database" }, tags: [{ id: 11, name: "MySQL" }, { id: 6, name: "PostgreSQL" }, { id: 1, name: "Laravel" }],
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

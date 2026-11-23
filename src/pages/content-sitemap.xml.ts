import type { APIRoute } from "astro";
import { getArticles, getProjects, type PaginatedResource } from "@lib/api";

async function getSlugs(fetchPage: (page: number) => Promise<PaginatedResource<{ slug: string }>>) {
  const first = await fetchPage(1);
  const slugs = new Set(first.data.map(({ slug }) => slug));

  for (let page = 2; page <= first.meta.last_page; page++) {
    const { data } = await fetchPage(page);
    for (const { slug } of data) slugs.add(slug);
  }
  return slugs;
}

export const GET: APIRoute = async ({ site, url }) => {
  try {
    const [articleSlugs, projectSlugs] = await Promise.all([
      getSlugs(getArticles),
      getSlugs(getProjects),
    ]);
    // Slugs are encoded as path segments before insertion into XML.
    const paths = [
      ...Array.from(articleSlugs, (slug) => `/article/${encodeURIComponent(slug)}`),
      ...Array.from(projectSlugs, (slug) => `/project/${encodeURIComponent(slug)}`),
    ];
    const entries = paths.map((path) => `<url><loc>${new URL(path, site ?? url).href}</loc></url>`);

    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join("")}</urlset>`,
      { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=900" } },
    );
  } catch (error) {
    console.error("Failed to generate the content sitemap:", error);
    return new Response("Content sitemap temporarily unavailable", {
      status: 503,
      headers: { "Retry-After": "300" },
    });
  }
};

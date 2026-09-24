import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context) {
  let items = [];

  try {
    const { getArticles } = await import("../lib/api");
    const { data } = await getArticles(1);
    items = data.map((post) => ({
      title: post.title,
      description: post.excerpt,
      pubDate: new Date(post.createdAt),
      link: `/article/${post.slug}`,
    }));
  } catch {
    items = [];
  }

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
  });
}

import type { Article, PaginatedResource } from "../sections/article/data";

const API_URL = import.meta.env.PUBLIC_API_URL || "http://localhost:8000/api";

export async function getArticles(page: number = 1): Promise<PaginatedResource<Article>> {
  const response = await fetch(`${API_URL}/articles?page=${page}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${response.statusText}`);
  }
  return response.json();
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const response = await fetch(`${API_URL}/articles/${slug}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch article: ${response.statusText}`);
  }
  return response.json();
}

export async function getCategories(): Promise<PaginatedResource<any>> {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }
  return response.json();
}

import type { Article, PaginatedResource } from "../sections/article/data";
export type { PaginatedResource };

const API_URL = import.meta.env.PUBLIC_API_URL || "http://localhost:8000/api";
export interface TechStack {
  id: number;
  name: string;
  slug: string;
  description?: string;
  projectCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  thumbnail: string | null;
  live_url: string | null;
  repo_url: string | null;
  status: "completed" | "ongoing" | "archived";
  featured: boolean;
  tech_stacks: TechStack[];
  created_at: string;
  updated_at: string;
}

export async function getArticles(
  page: number = 1,
  filters: Record<string, string> = {},
): Promise<PaginatedResource<Article>> {
  const params = new URLSearchParams({ ...filters, page: String(page) });
  const response = await fetch(`${API_URL}/articles?${params}`, { signal: AbortSignal.timeout(5000) });
  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${response.statusText}`);
  }
  return response.json();
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const response = await fetch(`${API_URL}/articles/${encodeURIComponent(slug)}`, { signal: AbortSignal.timeout(5000) });
  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`Failed to fetch article: ${response.statusText}`);
  }
  return response.json();
}

export async function getProjects(
  page: number = 1,
  filters: Record<string, string> = {},
): Promise<PaginatedResource<Project>> {
  const params = new URLSearchParams({ ...filters, page: String(page) });
  const response = await fetch(`${API_URL}/projects?${params}`, { signal: AbortSignal.timeout(5000) });
  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.statusText}`);
  }
  return response.json();
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const response = await fetch(`${API_URL}/projects/${encodeURIComponent(slug)}`, { signal: AbortSignal.timeout(5000) });
  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`Failed to fetch project: ${response.statusText}`);
  }
  return response.json();
}

export async function getCategories(): Promise<PaginatedResource<any>> {
  const response = await fetch(`${API_URL}/categories`, { signal: AbortSignal.timeout(5000) });
  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }
  return response.json();
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendMessage(
  message: ContactMessage,
): Promise<{ message: string }> {
  const response = await fetch(`${API_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Failed to send message: ${response.statusText}`,
    );
  }

  return response.json();
}

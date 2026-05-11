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

export async function getProjects(page: number = 1): Promise<PaginatedResource<Project>> {
  const response = await fetch(`${API_URL}/projects?page=${page}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.statusText}`);
  }
  return response.json();
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const response = await fetch(`${API_URL}/projects/${slug}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch project: ${response.statusText}`);
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

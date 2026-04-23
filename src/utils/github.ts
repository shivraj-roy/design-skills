import { SITE_BASE_URL } from "../shared";

const SITEMAP_URL = `${SITE_BASE_URL}/sitemap.xml`;
const SLUG_RE = new RegExp(`${SITE_BASE_URL.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")}/([a-z0-9.-]+)/design-md`, "g");

export async function fetchDesignSlugs(): Promise<string[]> {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) {
    throw new Error(`Failed to load sitemap: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
  const slugs = new Set<string>();
  for (const match of xml.matchAll(SLUG_RE)) {
    slugs.add(match[1]);
  }
  return [...slugs];
}

export async function fetchDesignMd(slug: string): Promise<string> {
  const url = `${SITE_BASE_URL}/design-md/${slug}/DESIGN.md`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch DESIGN.md for ${slug}: ${res.status} ${res.statusText}`);
  }
  return res.text();
}

export async function fetchDownloadCount(slug: string): Promise<number | null> {
  const url = `${SITE_BASE_URL}/api/cli/downloads?brand=${encodeURIComponent(slug)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const body = (await res.json()) as { ok?: boolean; downloadCount?: number };
    if (!body.ok || typeof body.downloadCount !== "number") return null;
    return body.downloadCount;
  } catch {
    return null;
  }
}

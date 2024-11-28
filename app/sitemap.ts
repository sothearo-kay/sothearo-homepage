import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = [
    { url: "https://sothearo.dev", priority: 1 },
    { url: "https://sothearo.dev/project", priority: 0.8 },
    { url: "https://sothearo.dev/manga", priority: 0.8 },
  ];

  const lastModified = new Date().toISOString();

  return pages.map((page) => ({
    ...page,
    lastModified,
    changeFrequency: "daily",
  }));
}

import type { MetadataRoute } from "next";
import { work } from "@/content/work";

const BASE = "https://drepkovsky.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/cv`, changeFrequency: "yearly", priority: 0.6 },
  ];

  return pages.concat(
    work.map((project) => ({
      url: `${BASE}/work/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  );
}

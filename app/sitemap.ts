import type { MetadataRoute } from "next";
import { sermons } from "../data/sermons";
import { announcements } from "../data/announcements";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eklezia-church-website.vercel.app";

  const staticPages = [
    "",
    "/predications",
    "/annonces",
    "/fondation",
    "/dons",
    "/histoire",
    "/communaute",
    "/contact",
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const sermonRoutes = sermons.map((sermon) => ({
    url: `${baseUrl}/predications/${sermon.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const announcementRoutes = announcements.map((announcement) => ({
    url: `${baseUrl}/annonces/${announcement.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...sermonRoutes, ...announcementRoutes];
}
import { MetadataRoute } from "next";
import { locations } from "@/data/locations";
import siteConfig from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;
  const lastModified = "2026-03-20T00:00:00.000Z";

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/automation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/video-editing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/seo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Niche landing page URLs
  const nicheRoutes: MetadataRoute.Sitemap = siteConfig.niches.map((niche) => ({
    url: `${baseUrl}/${niche.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Case study routes
  const caseStudyRoutes: MetadataRoute.Sitemap = siteConfig.caseStudies.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Location routes
  const locationUrls: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...nicheRoutes, ...caseStudyRoutes, ...locationUrls];
}

import { MetadataRoute } from "next";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zeenox.agency";
  
  // Use a fixed date for the current iteration rather than new Date()
  // which causes the sitemap to change on every single build/request.
  const lastModified = "2026-07-06T00:00:00.000Z";

  const locationUrls: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.id}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/video-editing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/seo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/digital-marketing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/automation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/best-video-editing-agency-india`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/website-development-company-india`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/seo-specialist-agency-india`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/no-1-digital-agency-india`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/internship`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...locationUrls,
  ];
}

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://zeenox.agency";

  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/private/", "/admin/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/private/", "/admin/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

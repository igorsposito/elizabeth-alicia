
import type { MetadataRoute } from "next";

const siteUrl = "https://www.elizabethalicia.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const isProduction = process.env.VERCEL_ENV === "production";

  if (!isProduction) {
    return [];
  }

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const officialDomain = process.env.NEXT_PUBLIC_SITE_URL
    ?.trim()
    .replace(/\/+$/, "");

  const vercelDomain =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  const siteUrl =
    officialDomain ||
    (vercelDomain
      ? `https://${vercelDomain}`
      : "http://localhost:3000");

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
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

const isProduction =
  process.env.VERCEL_ENV === "production" &&
  Boolean(officialDomain);

  return {
    rules: {
      userAgent: "*",
      allow: isProduction ? "/" : undefined,
      disallow: isProduction ? undefined : "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
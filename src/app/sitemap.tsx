import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://elizabethalicia.com.br";
  const isProduction = process.env.NEXT_PUBLIC_SITE_URL === "https://elizabethalicia.com.br" && process.env.VERCEL_ENV === "production";
  return isProduction ? [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }] : [];
}

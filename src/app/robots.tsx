import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://elizabethalicia.com.br";
  const isProduction = process.env.NEXT_PUBLIC_SITE_URL === "https://elizabethalicia.com.br" && process.env.VERCEL_ENV === "production";

  return {
    rules: isProduction ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    ...(isProduction ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}

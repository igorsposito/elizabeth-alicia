
import type { MetadataRoute } from "next";

const siteUrl = "https://www.elizabethalicia.com.br";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production";

  return {
    rules: {
      userAgent: "*",
      ...(isProduction ? { allow: "/" } : { disallow: "/" }),
    },
    ...(isProduction
      ? { sitemap: `${siteUrl}/sitemap.xml` }
      : {}),
  };
}

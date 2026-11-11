import type { MetadataRoute } from "next";

const siteUrl = "https://www.elizabethalicia.com.br";

// Bloqueia apenas deploys de preview da Vercel; produção e builds locais liberam o rastreamento.
const isPreview = process.env.VERCEL_ENV === "preview";

export default function robots(): MetadataRoute.Robots {
  if (isPreview) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

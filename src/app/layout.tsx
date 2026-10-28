
import type { Metadata, Viewport } from "next";
import { Manrope, Outfit, Allura } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Fontes originais do projeto
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

// Domínio oficial, quando confirmado.
// Não configure NEXT_PUBLIC_SITE_URL com o domínio futuro
// enquanto estiver usando somente a URL da Vercel.
const officialDomain =
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");

// URL da implantação atual na Vercel
const vercelDomain =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL;

const siteUrl = officialDomain
  ? officialDomain
  : vercelDomain
    ? `https://${vercelDomain}`
    : "http://localhost:3000";

// Quando o domínio oficial estiver configurado,
// ele será o endereço canônico do site.
const canonicalUrl = officialDomain || siteUrl;

const isProduction =
  process.env.VERCEL_ENV === "production";

const siteName = "Elizabeth Alícia";

const siteTitle =
  "Elizabeth Alícia | Tricologia Clínica Avançada e Estética";

const siteDescription =
  "Conheça Elizabeth Alícia, farmacêutica tricologista com atuação em tricologia clínica avançada e estética. Avaliação capilar individualizada e cuidados com a saúde dos fios e do couro cabeludo.";

const ogImage = "/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Elizabeth Alícia",
  },

  description: siteDescription,

  applicationName: siteName,

  authors: [
    {
      name: siteName,
      url: canonicalUrl,
    },
  ],

  creator: siteName,
  publisher: siteName,

  keywords: [
    "Elizabeth Alícia",
    "Elizabeth Alicia",
    "tricologia clínica",
    "tricologia clínica avançada",
    "tricologista",
    "farmacêutica tricologista",
    "saúde capilar",
    "avaliação capilar",
    "queda capilar",
    "cuidados com o couro cabeludo",
    "estética",
  ],

  category: "health",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: canonicalUrl,
    siteName,
    title: siteTitle,
    description:
      "Um novo olhar para a sua saúde capilar, com cuidado individualizado. Conheça a atuação de Elizabeth Alícia em tricologia clínica avançada e estética.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Elizabeth Alícia — Saúde e Estética",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "Tricologia clínica avançada e estética. Um novo olhar para a sua saúde capilar.",
    images: [ogImage],
  },

  robots: {
    index: isProduction,
    follow: isProduction,
    googleBot: {
      index: isProduction,
      follow: isProduction,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  other: {
    "theme-color": "#211C19",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#211C19",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl}/#website`,
        url: canonicalUrl,
        name: siteName,
        inLanguage: "pt-BR",
        description: siteDescription,
      },
      {
        "@type": "Person",
        "@id": `${canonicalUrl}/#elizabeth-alicia`,
        name: siteName,
        description:
          "Farmacêutica tricologista com atuação em tricologia clínica avançada e estética.",
        url: canonicalUrl,
        sameAs: [
          "https://www.instagram.com/elizabethalicia/",
        ],
        knowsAbout: [
          "Tricologia clínica",
          "Saúde capilar",
          "Avaliação capilar",
          "Cuidados com o couro cabeludo",
          "Estética",
        ],
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <body
        className={`${manrope.variable} ${outfit.variable} ${allura.variable} antialiased`}
      >
        {children}

        <Analytics />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              structuredData
            ).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

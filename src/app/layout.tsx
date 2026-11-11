
import type { Metadata, Viewport } from "next";
import { Manrope, Outfit, Allura } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

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

// Domínio oficial e canônico
const siteUrl = "https://www.elizabethalicia.com.br";

const isProduction = process.env.VERCEL_ENV === "production";

const siteName = "Elizabeth Alícia";

const siteTitle =
  "Elizabeth Alícia | Tricologia Clínica e Saúde Capilar";

const siteDescription =
  "Conheça Elizabeth Alícia, farmacêutica com atuação em tricologia clínica. Avaliação individualizada da saúde capilar, dos cabelos e do couro cabeludo.";

const ogImage = "/og-image.png";

// Preencher após verificar o domínio no Search Console.
// Não utilizar um código de outra propriedade.
const googleVerification =
  process.env.GOOGLE_SITE_VERIFICATION;

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
      url: siteUrl,
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
    "saúde do couro cabeludo",
    "cuidados com os cabelos",
  ],

  category: "health",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description:
      "Um novo olhar para a sua saúde capilar, com cuidado individualizado. Conheça a atuação de Elizabeth Alícia em tricologia clínica.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Elizabeth Alícia — Tricologia Clínica e Saúde Capilar",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "Tricologia clínica e saúde capilar com uma abordagem individualizada.",
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

  verification: googleVerification
    ? {
        google: googleVerification,
      }
    : undefined,

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F4EF",
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
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "pt-BR",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#elizabeth-alicia`,
      name: siteName,
      url: siteUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": siteUrl,
      },
      jobTitle: "Farmacêutica",
      description:
        "Farmacêutica com atuação em tricologia clínica e saúde capilar, com atendimentos em Vitória da Conquista e Barra do Choça, Bahia.",
      knowsAbout: [
        "Tricologia clínica",
        "Saúde capilar",
        "Avaliação capilar",
        "Queda capilar",
        "Cuidados com o couro cabeludo",
      ],
      workLocation: [
        {
          "@type": "Place",
          name: "Vitória da Conquista, Bahia",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Vitória da Conquista",
            addressRegion: "BA",
            addressCountry: "BR",
          },
        },
        {
          "@type": "Place",
          name: "Barra do Choça, Bahia",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Barra do Choça",
            addressRegion: "BA",
            addressCountry: "BR",
          },
        },
      ],
      sameAs: [
        "https://www.instagram.com/elizabethalicia/",
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
        <SpeedInsights />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </body>
    </html>
  );
}

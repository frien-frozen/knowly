import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { Nunito, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Knowly | Bepul Cambridge & Pearson Ta'lim — O'zbekiston",
  description:
    "Knowly — O'zbekistondagi o'quvchilar uchun bepul Cambridge IGCSE, A-Levels va Pearson Edexcel ta'limi. Murakkab inglizcha bilimlarni ona tilida o'rganing. 100% bepul.",
  keywords: [
    "knowly", "knowly.uz",
    "cambridge igcse uzbekistan", "a-levels uzbekistan", "pearson edexcel",
    "bepul ta'lim", "online ta'lim o'zbekiston", "igcse o'zbek tilida",
    "cambridge o'zbekiston", "free education uzbekistan", "video darslar",
    "maktab o'quvchilari", "biologiya", "fizika", "kimyo", "matematika",
    "ingliz tili", "online school uzbekistan"
  ],
  metadataBase: new URL("https://www.knowly.uz"),
  alternates: {
    canonical: "https://www.knowly.uz",
  },
  openGraph: {
    title: "Knowly | Bepul Cambridge & Pearson Ta'lim",
    description:
      "O'zbekiston o'quvchilari uchun bepul Cambridge IGCSE, A-Levels va Pearson Edexcel video darslari. Murakkab bilimlar — ona tilida.",
    url: "https://www.knowly.uz",
    siteName: "Knowly",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/logos/knowly-full.png",
        width: 1200,
        height: 630,
        alt: "Knowly — Bepul Cambridge Ta'lim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowly | Bepul Cambridge & Pearson Ta'lim",
    description:
      "Cambridge IGCSE, A-Levels, Pearson Edexcel — bepul, o'zbek tilida.",
    images: ["/logos/knowly-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.knowly.uz/#organization",
      name: "Knowly",
      url: "https://www.knowly.uz",
      logo: {
        "@type": "ImageObject",
        url: "https://www.knowly.uz/logos/kn-icon.png",
      },
      sameAs: [],
      description:
        "Knowly — O'zbekistondagi o'quvchilar uchun bepul Cambridge IGCSE, A-Levels va Pearson Edexcel ta'lim platformasi.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.knowly.uz/#website",
      url: "https://www.knowly.uz",
      name: "Knowly",
      publisher: { "@id": "https://www.knowly.uz/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://learn.knowly.uz/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.knowly.uz/#webpage",
      url: "https://www.knowly.uz",
      name: "Knowly | Bepul Cambridge & Pearson Ta'lim — O'zbekiston",
      isPartOf: { "@id": "https://www.knowly.uz/#website" },
      about: { "@id": "https://www.knowly.uz/#organization" },
      description:
        "Bepul Cambridge IGCSE, A-Levels va Pearson Edexcel ta'limi. O'zbekiston o'quvchilari uchun ona tilida video darslar.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${nunito.variable} ${jakarta.variable} antialiased bg-[#F2F4F7] text-[#101828] font-nunito`}
      >
        <Suspense fallback={null}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  );
}

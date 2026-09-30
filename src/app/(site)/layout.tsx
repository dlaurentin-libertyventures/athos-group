import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { getPage } from "@/lib/cms";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});


export function generateMetadata(): Metadata {
  const site = getPage("site");

  return {
    title: site.seoTitle,
    description: site.seoDescription,
    icons: {
      icon: [
        {
          url: "/images/favicon-black.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/images/favicon-white.png",
          media: "(prefers-color-scheme: dark)",
        },
      ],
      apple: "/images/favicon-white.png",
    },
    openGraph: {
      title: site.siteName,
      description: site.seoDescription,
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

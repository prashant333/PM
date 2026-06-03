import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://Prashant-Mani-portfolio.example.com"),
  title: "Prashant Mani — Strategic Product Leadership in Mobility & AI",
  description:
    "Building products at the intersection of Sustainability, Mobility, AI, and SaaS. Strategizing EV infrastructure and driving data-led growth for fleet management systems.",
  openGraph: {
    title: "Prashant Mani — Strategic Product Leadership in Mobility & AI",
    description:
      "Building products at the intersection of Sustainability, Mobility, AI, and SaaS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

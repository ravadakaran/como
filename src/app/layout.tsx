import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Como — Discover your next drink",
  description:
    "Explore cocktails, mocktails, ingredients, and recipes all in one place. Build your bar and find what you can make right now.",
  authors: [{ name: "@raka_potato", url: "https://www.instagram.com/raka_potato/" }],
  creator: "@raka_potato",
  openGraph: {
    title: "Como — Discover your next drink",
    description: "Explore cocktails, mocktails, and recipes. Build your bar and find what you can make right now.",
    siteName: "Como",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@raka_potato",
    title: "Como — Discover your next drink",
    description: "Explore cocktails, mocktails, and recipes. Build your bar and find what you can make right now.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

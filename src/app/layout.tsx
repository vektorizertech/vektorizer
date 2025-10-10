import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingScrollButton from "@/components/FloatingScrollButton";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import AOSProvider from "./aos";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "vektorizer – Your product served with excellence",
    template: "%s | vektorizer",
  },
  description:
    "vektorizer crafts exceptional digital experiences through innovative web, mobile, AI, and blockchain solutions.",
  keywords: [
    "vektorizer",
    "Web Development",
    "Mobile App Development",
    "Blockchain",
    "AI Integration",
    "Software House Pakistan",
    "Next.js Agency",
    "React Development",
  ],
  metadataBase: new URL("https://www.vektorizer.com"),
  openGraph: {
    title: "Vektorizer – Digital Brilliance Delivered",
    description:
      "Building scalable, beautiful digital products for startups and enterprises using Next.js, React, AI, and more.",
    type: "website",
    url: "https://www.vektorizer.com",
    siteName: "Vektorizer",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Vektorizer Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vektorizer – Digital Brilliance Delivered",
    description:
      "We craft exceptional web, mobile, and AI experiences for businesses worldwide.",
    creator: "@vektorizer", // replace with actual handle
    images: ["/og-cover.png"],
  },
  authors: [{ name: "Vektorizer Team", url: "https://www.vektorizer.com" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        {children}
        <Footer />
        <FloatingScrollButton />
        <ScrollToTop />
        <Toaster />
        <Analytics />
        <SpeedInsights />
        <AOSProvider />
      </body>
    </html>
  );
}

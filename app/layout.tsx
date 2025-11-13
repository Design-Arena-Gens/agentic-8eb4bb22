import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sunny Day Walk",
  description: "A cinematic vignette of a peaceful afternoon walk under a warm sun.",
  openGraph: {
    title: "Sunny Day Walk",
    description: "Cinematic vignette of Harm and Ahad enjoying a serene day.",
    url: "https://agentic-8eb4bb22.vercel.app",
    siteName: "Sunny Day Walk",
    images: [
      {
        url: "https://agentic-8eb4bb22.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sunlit path through a meadow with two friends smiling."
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Day Walk",
    description: "Cinematic vignette of Harm and Ahad enjoying a serene day.",
    images: ["https://agentic-8eb4bb22.vercel.app/og-image.png"],
  }
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={`${inter.variable} font-body bg-sky-dawn/40`}>
    <body className="min-h-screen bg-gradient-to-b from-sky-dawn/40 via-sky-100 to-white text-slate-900 antialiased">
      {children}
    </body>
  </html>
);

export default RootLayout;

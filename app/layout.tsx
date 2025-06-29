import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Omar Al-Bakri | FinTech & AI Sales Leader",
  description: "FinTech & AI Sales Leader transforming complex technology into growth opportunities. Your trusted thought-partner in the digital revolution.",
  keywords: ["FinTech", "AI", "Sales Leader", "Digital Transformation", "Binary Baron", "Omar Al-Bakri"],
  authors: [{ name: "Omar Al-Bakri" }],
  openGraph: {
    title: "Omar Al-Bakri | FinTech & AI Sales Leader",
    description: "FinTech & AI Sales Leader transforming complex technology into growth opportunities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Al-Bakri | FinTech & AI Sales Leader",
    description: "FinTech & AI Sales Leader transforming complex technology into growth opportunities.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
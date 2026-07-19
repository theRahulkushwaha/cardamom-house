import type { Metadata } from "next";
import { DM_Serif_Display, Manrope, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cardamom House — Slow Brunch, Strong Coffee",
  description:
    "Cardamom House is a slow-brunch café in Lisbon. Local eggs, single-origin coffee, and a menu built to be lingered over.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSerif.variable} ${manrope.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-cream font-body text-brown antialiased">
        {children}
      </body>
    </html>
  );
}

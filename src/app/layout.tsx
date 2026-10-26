import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karl Malone Dela Cruz | Full-Stack Developer",
  description:
    "Portfolio of Karl Malone Dela Cruz, a 3rd-year IT student and full-stack developer building web, mobile, and AI projects.",
  authors: [{ name: "Karl Malone Dela Cruz", url: "https://github.com/SAMAEL1313" }],
  keywords: ["Karl Malone Dela Cruz", "SAMAEL1313", "portfolio", "full-stack developer", "IT student"],
  icons: { icon: "/images/logo.png" },
  openGraph: {
    type: "website",
    title: "Karl Malone Dela Cruz | Full-Stack Developer",
    description: "3rd-year IT student and full-stack developer. Check out my projects.",
    images: ["/images/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

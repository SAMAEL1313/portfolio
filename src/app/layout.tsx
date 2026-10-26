import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import Splash from "@/components/Splash";
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
  openGraph: {
    type: "website",
    title: "Karl Malone Dela Cruz | Full-Stack Developer",
    description: "3rd-year IT student and full-stack developer. Check out my projects.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

// Runs before paint so the saved theme applies and the splash only shows once per visit
const bootScript = `
try {
  if (localStorage.getItem("theme") === "light") document.documentElement.classList.add("light");
  if (sessionStorage.getItem("splash-seen")) document.documentElement.classList.add("splash-seen");
} catch {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Splash />
        {children}
      </body>
    </html>
  );
}

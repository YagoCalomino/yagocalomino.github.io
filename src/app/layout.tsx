import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yago Calomino | Data Engineer · BI & Analytics",
  description:
    "Portfolio of Yago Calomino, Data Engineer focused on BI & Analytics. Building data pipelines and dashboards with Python, PostgreSQL, Oracle and Power BI — from ETL to dashboard.",
  keywords: [
    "Data Engineer",
    "Data Analyst",
    "BI & Analytics",
    "ETL",
    "PostgreSQL",
    "Oracle",
    "Python",
    "Power BI",
    "React",
    "Next.js",
    "FastAPI",
    "Lean Six Sigma",
    "Process Automation",
  ],
  authors: [{ name: "Yago Calomino" }],
  openGraph: {
    title: "Yago Calomino | Data Engineer · BI & Analytics",
    description:
      "Data Engineering and BI & Analytics. Data pipelines, ETL and analytical dashboards, end to end.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yago Calomino | Data Engineer · BI & Analytics",
    description:
      "Data Engineering and BI & Analytics. Data pipelines, ETL and analytical dashboards, end to end.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

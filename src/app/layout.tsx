import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr Jamie Forrest PhD, MPH - Academic Profile",
  description:
    "Dr Jamie Forrest PhD, MPH is a academic and researcher in the field of global health, with a particular interest in digital innovation. With a passion for improving health outcomes, he has dedicated his career to advancing knowledge and promoting evidence-based practices. His academic profile showcases his research contributions, publications, and collaborations with leading institutions worldwide.",
  metadataBase: new URL('https://drjforrest.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} font-body antialiased`}
      >
        <ThemeProvider defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

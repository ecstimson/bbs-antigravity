import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Beach Bird Studios | Premium Web Design & Development",
    template: "%s | Beach Bird Studios",
  },
  description: "Beach Bird Studios is a full-service digital agency specializing in high-performance websites, SEO, and digital growth strategies.",
  keywords: ["web design", "web development", "SEO", "digital agency", "Next.js", "React", "Tailwind CSS"],
  authors: [{ name: "Beach Bird Studios" }],
  creator: "Beach Bird Studios",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beachbirdstudios.com",
    title: "Beach Bird Studios | Premium Web Design & Development",
    description: "Elevate your digital presence with Beach Bird Studios. We build high-performance websites that convert.",
    siteName: "Beach Bird Studios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beach Bird Studios | Premium Web Design & Development",
    description: "Elevate your digital presence with Beach Bird Studios. We build high-performance websites that convert.",
    creator: "@beachbirdstudios",
  },
};

import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

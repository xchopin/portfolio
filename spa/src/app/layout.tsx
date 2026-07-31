
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SITE_DISABLED } from "@/lib/site-status";

const poppins = Poppins({
    weight: ["600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const siteUrl = "https://xchopin.com";
const description =
    "Xavier Chopin is a Senior Backend Engineer specialized in Java and based in the Bay Area, CA";

// While disabled, expose nothing: no description, no OG/Twitter card — link
// previews would otherwise still leak the real site's copy and image.
export const metadata: Metadata = SITE_DISABLED
    ? {
          metadataBase: new URL(siteUrl),
          title: "Temporarily disabled",
          robots: { index: false, follow: false },
          // Empty arrays override the og:image/twitter:image tags that
          // opengraph-image.tsx injects by file convention — their `alt` would
          // otherwise leak the real site's copy.
          openGraph: { images: [] },
          twitter: { images: [] },
      }
    : {
          metadataBase: new URL(siteUrl),
          title: {
              default: "Xavier Chopin",
              template: "%s — Xavier Chopin",
          },
          description,
          openGraph: {
              title: "Xavier Chopin — Senior Software Engineer",
              description,
              url: siteUrl,
              siteName: "Xavier Chopin",
              locale: "en_US",
              type: "website",
          },
          twitter: {
              card: "summary_large_image",
              title: "Xavier Chopin — Senior Software Engineer",
              description,
          },
      };

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            // Font variables live on <html> so the `@theme` block in globals.css,
            // which is :root-scoped, can resolve them.
            className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
        >
            <body className="antialiased">
                <ThemeProvider attribute="class" enableSystem>
                    {SITE_DISABLED ? (
                        children
                    ) : (
                        <>
                            <Header />
                            {children}
                            <Footer />
                        </>
                    )}
                </ThemeProvider>
            </body>
        </html>
    );
}

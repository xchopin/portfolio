
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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

export const metadata: Metadata = {
    title: "Xavier Chopin",
    description:
        "Xavier Chopin is a Senior Backend Engineer specialized in Java and based in the Bay Area, CA",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
                <ThemeProvider attribute="class" enableSystem>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}

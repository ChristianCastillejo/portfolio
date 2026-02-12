import type { Metadata } from "next";
import "@/styles/global.css";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from 'geist/font/mono';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/structured-data";
export const metadata: Metadata = {
    title: {
        default: "Christian Castillejo | Design Engineer",
        template: "%s | Christian Castillejo",
    },
    description: "Design Engineer bridging the gap between design and engineering. I build scalable products combining architectural logic with creative curiosity. Remote (Europe/CET).",
    keywords: [
        "Design Engineer",
        "Product Design Engineer",
        "Next.js",
        "React Server Components",
        "Design Systems",
        "Figma Variables",
        "Shopify Headless",
        "TypeScript",
        "AI-Assisted Development",
        "Tailwind CSS",
        "Shadcn/ui"
    ],
    authors: [{ name: "Christian Castillejo" }],
    creator: "Christian Castillejo",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://christiancastillejo.com",
        title: "Christian Castillejo | Design Engineer",
        description: "Design Engineer bridging the gap between design and engineering.",
        siteName: "Christian Castillejo Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Christian Castillejo | Design Engineer",
        description: "Design Engineer bridging the gap between design and engineering.",
    },
    metadataBase: new URL("https://christiancastillejo.com"),
    other: {
        google: "notranslate",
    },
};
const acorn = localFont({
    src: "../fonts/Acorn-SemiBold.woff2",
    variable: "--font-acorn",
    display: "swap",
    weight: "600",
});
export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="en" translate="no" className="notranslate">
        <body className={`${GeistSans.variable} ${acorn.variable} ${GeistMono.variable} antialiased`}> <Header />
            <StructuredData />
            {children}
            <Footer />
        </body>
    </html>);
}

import type { Metadata } from "next";
import "@/styles/global.css";
import { Geist, Playfair_Display } from "next/font/google";


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${displayFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "@/styles/global.css";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";


const acorn = localFont({
  src: "../fonts/Acorn-SemiBold.woff2",
  variable: "--font-acorn",
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
        className={`${GeistSans.variable} ${acorn.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
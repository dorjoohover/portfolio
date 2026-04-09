import type { Metadata } from "next";
import { Manrope, Merriweather } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Веб болон систем хөгжүүлэлт",
  description:
    "Веб, admin, booking болон backend систем хөгжүүлэлтийн танилцуулга, төслүүд, ажлын нөхцөл, үнийн санал.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn" className={`${manrope.variable} ${merriweather.variable}`}>
      <body>{children}</body>
    </html>
  );
}

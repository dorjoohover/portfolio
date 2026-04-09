import type { Metadata } from "next";
import { Exo_2, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin", "cyrillic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Веб болон систем хөгжүүлэлт",
  description:
    "Веб, admin, booking болон backend систем хөгжүүлэлтийн танилцуулга, ажлын нөхцөл, технологи, үнийн жишиг.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={`${manrope.variable} ${exo2.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

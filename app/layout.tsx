import type { Metadata, Viewport } from "next";
import { Anton, Oswald, Inter } from "next/font/google";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const heading = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://minecraft-countries.local"),
  title: "Minecraft Countries — Servidor Vanilla de Guerra Total",
  description:
    "Um servidor. Vários países. Apenas um campeão. Guerra, traição, invasão e sobrevivência. Entre por sua conta e risco.",
  openGraph: {
    title: "Minecraft Countries — Guerra Total",
    description:
      "Esqueça a paz. Esqueça a segurança. Aqui só existe a lei da guerra.",
    images: ["/MINECRAFTCOUNTRIES-BANNER.png"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0807",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${heading.variable} ${body.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leonardogabriel.dev"),
  title: "Leonardo Gabriel | Desenvolvedor de Sistemas e Analista de TI",
  description:
    "Desenvolvimento web, integrações de sistemas, CRM e automação de processos.",
  openGraph: {
    title: "Leonardo Gabriel | Desenvolvedor de Sistemas e Analista de TI",
    description: "Desenvolvimento web, integrações de sistemas, CRM e automação.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1792, height: 1024, alt: "Leonardo Gabriel — Desenvolvedor Full Stack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Gabriel | Desenvolvedor de Sistemas e Analista de TI",
    description: "Desenvolvimento web, integrações de sistemas, CRM e automação.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", type: "image/x-icon" },
      { url: "/favicon-l.png?v=2", type: "image/png", sizes: "64x64" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/favicon-l.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon-l.png?v=2" type="image/png" sizes="64x64" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

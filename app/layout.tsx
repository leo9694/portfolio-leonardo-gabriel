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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

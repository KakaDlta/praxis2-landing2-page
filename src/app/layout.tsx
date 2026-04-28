import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRAXIS Consulting | Estratégia, Governança e Eficiência",
  description: "Consultoria executiva de alto padrão focada em execução de estratégia, governança e eficiência operacional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${sora.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#0B1C2C] text-white selection:bg-amber-500/30">
        {children}
      </body>
    </html>
  );
}

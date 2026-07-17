import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Experiencia Tai Chi | Mauricio Ochoa",
    template: "%s | Experiencia Tai Chi",
  },
  description:
    "Tai Chi Chuan estilo Yang en Valdivia, Chile. De la crisis cervical a la serenidad.",
  openGraph: {
    title: "Experiencia Tai Chi | Mauricio Ochoa",
    description: "Tai Chi Chuan estilo Yang. De la crisis cervical a la serenidad.",
    url: "https://experienciataichi.vercel.app",
    siteName: "Experiencia Tai Chi",
    locale: "es_CL",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
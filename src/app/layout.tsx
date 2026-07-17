import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Experiencia Tai Chi | Mauricio Ochoa",
    template: "%s | Experiencia Tai Chi",
  },
  description:
    "Tai Chi Chuan estilo Yang en Valdivia, Chile. Clases presenciales y online. De la crisis cervical a la serenidad.",
  keywords: [
    "Tai Chi",
    "Chi Kung",
    "Valdivia",
    "Chile",
    "Mauricio Ochoa",
    "salud",
    "meditación",
    "bienestar",
  ],
  authors: [{ name: "Mauricio Ochoa" }],
  openGraph: {
    title: "Experiencia Tai Chi | Mauricio Ochoa",
    description:
      "Tai Chi Chuan estilo Yang. De la crisis cervical a la serenidad.",
    url: "https://experienciataichi.vercel.app",
    siteName: "Experiencia Tai Chi",
    locale: "es_CL",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
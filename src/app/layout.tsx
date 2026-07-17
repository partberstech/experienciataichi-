import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/providers/Toaster";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  fallback: ["Fira Code", "monospace"],
});

export const metadata: Metadata = {
  title: {
    default: "Experiencia Tai Chi — El movimiento es el lenguaje del alma",
    template: "%s | Experiencia Tai Chi",
  },
  description: "Mauricio Ochoa: de crisis cervical a renacimiento a través del Tai Chi. Testimonio, práctica, filosofía y talleres en Valdivia, Chile.",
  keywords: ["Tai Chi", "Mauricio Ochoa", "Valdivia", "sanación", "meditación en movimiento", "Qi Gong", "bienestar", "transformación personal"],
  authors: [{ name: "Mauricio Ochoa" }],
  creator: "Experiencia Tai Chi",
  publisher: "Experiencia Tai Chi",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://experienciataichi.cl"),
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://experienciataichi.cl",
    siteName: "Experiencia Tai Chi",
    title: "Experiencia Tai Chi — El movimiento es el lenguaje del alma",
    description: "De una crisis que pudo costarme la vida a una transformación que me devolvió el alma. Testimonio, práctica y filosofía del Tai Chi.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Experiencia Tai Chi - Mauricio Ochoa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiencia Tai Chi — El movimiento es el lenguaje del alma",
    description: "Mauricio Ochoa: de crisis cervical a renacimiento a través del Tai Chi.",
    images: ["/og-image.jpg"],
    creator: "@experienciataichi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sourceSans.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Toaster />
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
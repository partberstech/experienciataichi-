import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiencia Tai Chi | Mauricio Ochoa",
  description: "Tai Chi Chuan estilo Yang en Valdivia, Chile.",
};

const navLinks = [
  { label: "La Historia", href: "/mundo-scroll" },
  { label: "Testimonio", href: "/testimonio" },
  { label: "Práctica", href: "/practica" },
  { label: "Contacto", href: "/contacto" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-[1280px] mx-auto px-6 h-14 flex items-center justify-between">
            <Link href="/" className="text-[14px] font-semibold text-gray-900 tracking-tight">
              Experiencia Tai Chi
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
                  {l.label}
                </Link>
              ))}
              <Link href="/contacto" className="text-[12px] font-medium bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                Agendar sesión
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-gray-100 py-8 mt-24">
          <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[12px] text-gray-400">© {new Date().getFullYear()} Experiencia Tai Chi</span>
            <div className="flex items-center gap-5">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-[12px] text-gray-400 hover:text-gray-600 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
            <span className="text-[11px] text-gray-400">Valdivia, Chile</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
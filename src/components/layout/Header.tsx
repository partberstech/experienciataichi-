"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "La Historia", href: "/mundo-scroll" },
  { name: "El Camino", href: "/camino" },
  { name: "Testimonio", href: "/testimonio" },
  { name: "Práctica", href: "/practica" },
  { name: "Contacto", href: "/contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#5e6ad2]/20 border border-[#5e6ad2]/30 flex items-center justify-center transition-colors group-hover:bg-[#5e6ad2]/30">
            <span className="text-[#5e6ad2] text-sm font-medium">TC</span>
          </div>
          <span className="text-sm font-medium text-[#f7f8f8] hidden sm:block">
            Experiencia Tai Chi
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[13px] font-medium text-[#a6a6a6] hover:text-[#f7f8f8] transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <Button size="sm" className="hidden md:flex" asChild>
            <Link href="/contacto">Agendar</Link>
          </Button>

          <button
            className="md:hidden p-2 text-[#a6a6a6] hover:text-[#f7f8f8] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-[#a6a6a6] hover:text-[#f7f8f8] transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/5">
              <Button className="w-full" asChild>
                <Link href="/contacto" onClick={() => setMobileOpen(false)}>
                  Agendar sesión
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
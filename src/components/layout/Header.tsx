"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "La Historia", href: "/mundo-scroll" },
  { name: "El Camino", href: "/camino" },
  { name: "Testimonio", href: "/testimonio" },
  { name: "Práctica", href: "/practica" },
  { name: "Bitácora", href: "/bitacora" },
  { name: "Contacto", href: "/contacto" },
];

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-neutral-50/80 backdrop-blur-sm border-b border-neutral-200/50" />
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ease-spring",
        scrolled
          ? "bg-neutral-50/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-card"
          : "bg-transparent border-transparent"
      )}
    >
      <nav className="container h-full flex items-center justify-between" aria-label="Navegación principal">
        <Link href="/" className="flex items-center gap-2" aria-label="Experiencia Tai Chi - Inicio">
          <span className="font-heading font-bold text-xl text-neutral-900 dark:text-neutral-50">
            Experiencia Tai Chi
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label={`Cambiar a modo ${resolvedTheme === "dark" ? "claro" : "oscuro"}`}>
            {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button size="sm" asChild>
            <Link href="/contacto">Agenda tu sesión</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200/50 dark:border-neutral-800/50 animate-slide-down">
          <div className="container py-4 flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-neutral-200/50 dark:border-neutral-800/50">
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="flex-1 justify-start" aria-label={`Cambiar a modo ${resolvedTheme === "dark" ? "claro" : "oscuro"}`}>
                {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span>{resolvedTheme === "dark" ? "Modo claro" : "Modo oscuro"}</span>
              </Button>
              <Button size="sm" asChild className="flex-1">
                <Link href="/contacto">Agenda tu sesión</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
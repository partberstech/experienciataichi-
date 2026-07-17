import Link from "next/link";
import { Mail, MapPin, Calendar, Users, Heart, Code, Send, Play, Video, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = {
  navegacion: [
    { name: "Inicio", href: "/" },
    { name: "El Camino", href: "/camino" },
    { name: "Testimonio", href: "/testimonio" },
    { name: "Práctica", href: "/practica" },
    { name: "Bitácora", href: "/bitacora" },
    { name: "Documentos", href: "/documentos" },
    { name: "Contacto", href: "/contacto" },
  ],
  practica: [
    { name: "Zhan Zhuang", href: "/practica#zhan-zhuang" },
    { name: "Forma 24", href: "/practica#forma-24" },
    { name: "Tui Shou", href: "/practica#tui-shou" },
    { name: "Meditación", href: "/practica#meditacion" },
  ],
  recursos: [
    { name: "Guías PDF", href: "/documentos#guias" },
    { name: "Videos", href: "/documentos#videos" },
    { name: "Artículos", href: "/bitacora" },
    { name: "Preguntas frecuentes", href: "/contacto#faq" },
  ],
};

const socialLinks = [
  { name: "YouTube", href: "https://youtube.com/@experienciataichi", icon: Video, external: true },
  { name: "Instagram", href: "https://instagram.com/experienciataichi", icon: Send, external: true },
  { name: "Facebook", href: "https://facebook.com/experienciataichi", icon: Globe, external: true },
  { name: "Contacto", href: "/contacto", icon: Mail, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-brand-600/20 border border-brand-600/30 flex items-center justify-center">
                <Heart className="w-5 h-5 text-brand-600" />
              </div>
              <span className="font-heading text-xl font-semibold text-neutral-100">Experiencia Tai Chi</span>
            </Link>
            <p className="text-neutral-400 text-base leading-relaxed max-w-xs mb-6">
              Tai Chi Chuan estilo Yang. Práctica profunda para el cuerpo, la mente y el espíritu.
              Clases presenciales y online. Barcelona.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-sm text-neutral-400 hover:text-brand-400 transition-colors",
                    "border border-neutral-800 hover:border-brand-600/50 rounded-lg",
                    social.external && "group"
                  )}
                >
                  <social.icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <span>{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-neutral-100 uppercase tracking-wider mb-4">Navegación</h3>
            <nav>
              <ul className="space-y-3">
                {footerLinks.navegacion.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-brand-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-neutral-100 uppercase tracking-wider mb-4">Práctica</h3>
            <nav>
              <ul className="space-y-3">
                {footerLinks.practica.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-brand-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-neutral-100 uppercase tracking-wider mb-4">Recursos</h3>
            <nav>
              <ul className="space-y-3">
                {footerLinks.recursos.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-brand-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-neutral-100 uppercase tracking-wider mb-4">Contacto</h3>
            <address className="not-italic space-y-3 text-neutral-400 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Barcelona, España</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:hola@experienciataichi.com" className="hover:text-brand-400 transition-colors">
                  hola@experienciataichi.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Lun–Vie: 9:00–21:00<br />Sáb: 10:00–14:00</span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Experiencia Tai Chi. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <Link href="/privacidad" className="hover:text-brand-400 transition-colors">Privacidad</Link>
              <Link href="/terminos" className="hover:text-brand-400 transition-colors">Términos</Link>
              <Link href="/cookies" className="hover:text-brand-400 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";

const footerLinks = [
  { name: "Inicio", href: "/" },
  { name: "La Historia", href: "/mundo-scroll" },
  { name: "El Camino", href: "/camino" },
  { name: "Testimonio", href: "/testimonio" },
  { name: "Práctica", href: "/practica" },
  { name: "Bitácora", href: "/bitacora" },
  { name: "Contacto", href: "/contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#5e6ad2]/20 border border-[#5e6ad2]/30 flex items-center justify-center">
                <span className="text-[#5e6ad2] text-sm font-medium">TC</span>
              </div>
              <span className="text-sm font-medium text-[#f7f8f8]">
                Experiencia Tai Chi
              </span>
            </Link>
            <p className="text-[13px] text-[#62666d] leading-relaxed">
              Tai Chi Chuan estilo Yang. Práctica profunda para el cuerpo, la mente y el espíritu.
              Valdivia, Chile.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] text-[#62666d] hover:text-[#a6a6a6] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[#62666d]">
            © {new Date().getFullYear()} Experiencia Tai Chi
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hola@experienciataichi.com"
              className="text-[12px] text-[#62666d] hover:text-[#a6a6a6] transition-colors"
            >
              hola@experienciataichi.com
            </a>
            <span className="text-[12px] text-[#62666d]">Valdivia, Chile</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
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
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-xs">
            <span className="text-[15px] font-semibold text-gray-900 block mb-3">
              Experiencia Tai Chi
            </span>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Tai Chi Chuan estilo Yang. Valdivia, Chile.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-gray-400">
            © {new Date().getFullYear()} Experiencia Tai Chi
          </p>
          <span className="text-[12px] text-gray-400">Valdivia, Chile</span>
        </div>
      </div>
    </footer>
  );
}
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentos",
  description: "Guías y recursos para tu práctica de Tai Chi.",
};

export default function DocumentosPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-semibold text-zinc-900">Experiencia Tai Chi</Link>
          <Link href="/contacto" className="text-[13px] font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors">Agendar</Link>
        </div>
      </nav>

      <section className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="text-[13px] text-zinc-400 hover:text-zinc-600 transition-colors mb-8 block">← Volver</Link>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">Documentos</h1>
          <p className="text-zinc-500 mb-10">Guías y recursos para tu práctica.</p>

          <div className="space-y-5">
            {[
              { t: "Guía de Zhan Zhuang", d: "Postura fundamental del Tai Chi.", pages: 12 },
              { t: "El Árbol: Guía de práctica", d: "Raíces firmes, ramas flexibles.", pages: 8 },
              { t: "Principios del Tao", d: "Wu Wei, el Emperador-General-Soldados.", pages: 15 },
              { t: "Chi Kung matutino", d: "Rutina de 15 minutos.", pages: 6 },
            ].map((g, i) => (
              <div key={i} className="bg-white rounded-2xl border border-zinc-200 p-6 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-zinc-900 mb-1">{g.t}</h2>
                  <p className="text-[14px] text-zinc-500">{g.d}</p>
                  <span className="text-[12px] text-zinc-400 mt-2 block">{g.pages} páginas</span>
                </div>
                <button className="text-[13px] font-medium text-zinc-900 bg-zinc-100 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">Descargar</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-100 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-[12px] text-zinc-400">© {new Date().getFullYear()} Experiencia Tai Chi</span>
        </div>
      </footer>
    </>
  );
}
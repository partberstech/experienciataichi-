import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Práctica",
  description: "Guías de práctica de Tai Chi y Chi Kung.",
};

export default function PracticaPage() {
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
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">La práctica que transforma</h1>
          <p className="text-zinc-500 leading-relaxed mb-12 max-w-2xl">Tai Chi y Chi Kung no son solo ejercicios. Son herramientas de transformación interna.</p>

          {/* Practices */}
          <div className="space-y-6 mb-16">
            {[
              { t: "Zhan Zhuang", sub: "El arte de estar de pie", d: "Postura fundamental. No es meditación, no es ejercicio. Es recordar cómo el cuerpo se sostiene a sí mismo.", dur: "10-30 min", benefits: ["Fortalece la estructura ósea", "Mejora la postura", "Calma el sistema nervioso", "Desarrolla consciencia corporal"] },
              { t: "El Árbol", sub: "Raíces firmes, ramas flexibles", d: "El ejercicio que transformó las decisiones de Mauricio. Firmes como el tronco, flexibles como las ramas.", dur: "5-15 min", benefits: ["Enraizamiento", "Flexibilidad mental", "Fortalecimiento", "Claridad para decisiones"] },
              { t: "Chi Kung", sub: "Trabajo con la energía vital", d: "Ejercicios de respiración y movimiento que activan la circulación y oxigenan el cuerpo.", dur: "10-20 min", benefits: ["Activa la circulación", "Oxigena el cuerpo", "Reduce el estrés", "Mejora el sueño"] },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-2xl border border-zinc-200 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-xl font-semibold text-zinc-900">{p.t}</h2>
                  <span className="text-[12px] text-zinc-400">— {p.sub}</span>
                </div>
                <p className="text-zinc-500 mb-4 max-w-2xl">{p.d}</p>
                <div className="flex items-center gap-4 text-[12px] text-zinc-400 mb-4">
                  <span>⏱ {p.dur}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {p.benefits.map((b, j) => (
                    <div key={j} className="flex items-center gap-2 text-[13px] text-zinc-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Principles */}
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Principios del camino</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {[
              { t: "Wu Wei", sub: "El no-esfuerzo", d: "Actuar sin resistencia, en armonía con la corriente natural." },
              { t: "Presencia", sub: "Estar aquí y ahora", d: "Cuando estaba presente, no había espacio para pensamientos negativos." },
              { t: "Transformación", sub: "Todo se transforma", d: "La naturaleza muestra un constante proceso de transformación inevitable." },
              { t: "Serenidad", sub: "El poder ilimitado", d: "Ya no busco la tranquilidad ni la felicidad. Apareció la serenidad." },
            ].map((p, i) => (
              <div key={i} className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6">
                <div className="text-[11px] font-medium text-zinc-400 tracking-wider uppercase mb-1">{p.sub}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{p.t}</h3>
                <p className="text-[14px] text-zinc-500">{p.d}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-zinc-100">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-3">Comienza tu práctica hoy</h2>
            <p className="text-zinc-500 mb-6">El primer paso es una conversación.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-[14px] font-medium hover:bg-zinc-800 transition-colors">Agenda una sesión</Link>
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
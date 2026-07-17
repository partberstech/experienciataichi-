import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "El Camino",
  description: "La historia de Mauricio Ochoa.",
};

export default function CaminoPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-semibold text-zinc-900">Experiencia Tai Chi</Link>
          <Link href="/contacto" className="text-[13px] font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors">Agendar</Link>
        </div>
      </nav>

      <section className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/" className="text-[13px] text-zinc-400 hover:text-zinc-600 transition-colors mb-8 block">← Volver</Link>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">El camino de Mauricio</h1>
          <p className="text-zinc-500 leading-relaxed mb-12">De deportista de alto rendimiento a instructor de Tai Chi.</p>

          <div className="space-y-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4 text-zinc-600 leading-relaxed">
                <p>Mauricio Ochoa es originario de Valdivia, Chile. En su juventud fue deportista de alto rendimiento, practicante de remo y seleccionado nacional.</p>
                <p>En 2008, todo cambió. Las vértebras C3, C4 y C5 se aplastaron. Los médicos dijeron: cirugía urgente o parálisis permanente.</p>
                <p>La operación duró 8 horas. Le salvaron la vida, pero las células y neuronas murieron. Fue declarado inválido al 100%.</p>
                <p>Pero Mauricio no se rindió. Comenzó a preguntarse <em>&ldquo;¿cómo lo soluciono?&rdquo;</em> en vez de <em>&ldquo;¿por qué me pasa?&rdquo;</em></p>
              </div>
              <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                <h3 className="font-semibold text-zinc-900 mb-4 text-sm">Datos clave</h3>
                <dl className="space-y-3 text-[13px]">
                  {[["Nombre", "Mauricio Ochoa"], ["Ubicación", "Valdivia, Chile"], ["Formación", "Magister en Gobierno y Gerencia Pública"], ["Diagnóstico", "Mielopatía Cervical (C3-C4-C5)"], ["Instructor", "Daniel Berniel"], ["Estilo", "Tai Chi Chuan Yang + Chi Kung"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <dt className="text-zinc-400">{k}</dt>
                      <dd className="text-zinc-700 font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <blockquote className="border-l-2 border-zinc-200 pl-6 py-2">
              <p className="text-zinc-600 italic text-lg leading-relaxed">&ldquo;Ya no busco la tranquilidad ni la felicidad. Apareció algo desconocido: el poder ilimitado que entrega la serenidad.&rdquo;</p>
              <footer className="mt-3 text-[12px] text-zinc-400">— Mauricio Ochoa</footer>
            </blockquote>

            <div>
              <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Línea de tiempo</h2>
              <div className="space-y-8">
                {[
                  { year: "Juventud", t: "Deportista de alto rendimiento", d: "Practicante de remo, seleccionado nacional." },
                  { year: "2008", t: "La crisis cervical", d: "Las vértebras C3, C4 y C5 se aplastaron." },
                  { year: "2009", t: "La operación", d: "8 horas de cirugía. Le salvaron la vida." },
                  { year: "2009-2010", t: "Sacar las armaduras", d: "Daniel le dijo: 'No te sirven las armaduras.'" },
                  { year: "2010-2014", t: "La práctica diaria", d: "Tai Chi y Chi Kung. El árbol." },
                  { year: "2015", t: "La espasticidad desaparece", d: "Eliminación completa de la espasticidad." },
                  { year: "Hoy", t: "Volar en vez de correr", d: "50% menos medicamentos. Instructor certificado." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-20 text-[12px] font-mono text-zinc-400 pt-1">{item.year}</div>
                    <div className="flex-1 pb-8 border-l border-zinc-200 pl-6 relative">
                      <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-zinc-300 -translate-x-[5px]" />
                      <h3 className="font-semibold text-zinc-900 text-sm mb-1">{item.t}</h3>
                      <p className="text-[14px] text-zinc-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonio",
  description: "Testimonio de Mauricio Ochoa sobre su transformación a través del Tai Chi.",
};

const speakers: Record<string, { name: string; role: string; color: string }> = {
  Mauricio: { name: "Mauricio Ochoa", role: "Instructor de Tai Chi", color: "#2563eb" },
  Daniel: { name: "Daniel Berniel", role: "Instructor / Terapeuta", color: "#10b981" },
  Luis: { name: "Maestro Luis", role: "Entrevistador", color: "#f59e0b" },
};

const transcript = [
  { speaker: "Mauricio", text: "El año 2022 tuve una operación donde me extrajeron tres vértebras cervicales. Fui deportista muchos años, practiqué remo, fui seleccionado. Tenía muchos proyectos, mucho estrés y confusión emocional." },
  { speaker: "Mauricio", text: "Un día desperté y se me durmió un dedo. Los síntomas se aceleraron de manera agresiva. Las vértebras se aplastaron y quedé en una posición de casi 90 grados en dos semanas." },
  { speaker: "Mauricio", text: "Me llegué a una operación de urgencia. Los médicos dijeron que había muchas posibilidades de quedar parapléjico. Duró 8 horas y me salvaron la vida, pero las células y neuronas murieron." },
  { speaker: "Mauricio", text: "Los síntomas fueron muy agresivos. Espasticidad con pulso de 180, cabeza roja, duraba 40 segundos. No había vida. Muchos días no me podía levantar." },
  { speaker: "Mauricio", text: "Comencé a entender que el estar presente me ayudaba. Un amigo me dijo: 'Deberías practicar Tai Chi.' No tenía idea de lo que era." },
  { speaker: "Daniel", text: "Mauricio llegó con dos muletas, órtesis, cintas. Le dije: 'No te sirven las armaduras, tienes que sacarte todas.'" },
  { speaker: "Mauricio", text: "Sacarme las armaduras me trajo eliminar una zona de confort. 'Más vale el salto que mata, que el ruego de hombres buenos.'" },
  { speaker: "Mauricio", text: "Asocié un ejemplo: el Emperador (corazón), el General (mente), los Soldados (cuerpo). Mi mente general nunca le dio espacio al corazón." },
  { speaker: "Mauricio", text: "Con este espacio vacío conseguí placeres, gozos, éxtasis. Y fue tanto lo que disfrutaba que el dolor seguía existiendo, pero mis horarios de medicamentos se me fueron corriendo." },
  { speaker: "Daniel", text: "Cuando logramos conectar con este espacio donde se suspende el diálogo mental, hay procesos subconscientes y corporales que generan regulación." },
  { speaker: "Mauricio", text: "Eliminamos la espasticidad, casi un 90%. Mejoró mi estado de ánimo. Antes podía correr, hoy día puedo volar." },
  { speaker: "Mauricio", text: "El proceso ha sido tan hermoso, el presente es tan lindo que cualquier futuro no es lo más importante. Lo más importante ha sido el proceso." },
];

export default function TestimonioPage() {
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
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">&ldquo;Le dijeron que podía quedar parapléjico&rdquo;</h1>
          <p className="text-zinc-500 leading-relaxed mb-8">Testimonio de Mauricio Ochoa y Daniel Berniel en &ldquo;Teicharlas con Luis&rdquo;.</p>

          {/* Video */}
          <div className="aspect-video rounded-2xl overflow-hidden border border-zinc-200 mb-10">
            <iframe src="https://www.youtube.com/embed/zBndyeonf_s" title="Testimonio" allowFullScreen className="w-full h-full" />
          </div>

          {/* Speakers */}
          <div className="flex flex-wrap gap-2 mb-10">
            {Object.values(speakers).map((s) => (
              <span key={s.name} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] border border-zinc-200">
                <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                <span className="font-medium text-zinc-700">{s.name}</span>
                <span className="text-zinc-400">— {s.role}</span>
              </span>
            ))}
          </div>

          {/* Transcript */}
          <h2 className="text-xl font-semibold text-zinc-900 mb-6">Transcripción</h2>
          <div className="space-y-6">
            {transcript.map((entry, i) => {
              const s = speakers[entry.speaker];
              return (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white" style={{ background: s?.color || "#6b7280" }}>
                    {entry.speaker[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[13px] font-medium text-zinc-700">{s?.name}</span>
                      <span className="text-[11px] text-zinc-400">— {s?.role}</span>
                    </div>
                    <p className="text-[14px] text-zinc-600 leading-relaxed">{entry.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quotes */}
          <div className="mt-12 space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900">Frases destacadas</h3>
            {[
              "Me saco mis armaduras... y me entrego completamente a este camino.",
              "Existen más cosas que el dolor en mi mente.",
              "Antes podía correr, hoy día puedo volar.",
              "El proceso ha sido tan hermoso, el presente es tan lindo.",
            ].map((q, i) => (
              <blockquote key={i} className="border-l-2 border-zinc-200 pl-5 py-2">
                <p className="text-zinc-600 italic text-sm">&ldquo;{q}&rdquo;</p>
                <footer className="mt-1 text-[11px] text-zinc-400">— Mauricio</footer>
              </blockquote>
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
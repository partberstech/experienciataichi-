import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "El Camino",
  description: "La historia de Mauricio Ochoa: de crisis cervical a renacimiento a través del Tai Chi. Biografía, línea de tiempo y filosofía.",
};

const timeline = [
  {
    year: "2008",
    title: "La Crisis",
    category: "Crisis",
    description:
      "Hernia cervical C5-C6 severa con compresión medular. Pérdida de sensibilidad en manos y brazos. Los médicos advierten: cirugía urgente o parálisis permanente.",
    icon: "⚡",
  },
  {
    year: "2009",
    title: "La Decisión",
    category: "Punto de inflexión",
    description:
      "Rechazo la cirugía. Busco alternativas. Encuentro el Tai Chi Chuan estilo Yang. Primera clase: el cuerpo recuerda algo que la mente olvidó.",
    icon: "🧭",
  },
  {
    year: "2010-2014",
    title: "La Práctica Diaria",
    category: "Disciplina",
    description:
      "Práctica diaria de 2-4 horas. Zhan Zhuang, forma larga, empuje de manos. Recuperación gradual de sensibilidad. El dolor se transforma en maestro.",
    icon: "🥋",
  },
  {
    year: "2015",
    title: "Certificación y Enseñanza",
    category: "Transmisión",
    description:
      "Certificación como instructor. Primeros alumnos. Comienzo a transmitir lo que me salvó. La enseñanza se convierte en práctica superior.",
    icon: "🎓",
  },
  {
    year: "2018",
    title: "Primer TAIK Tai Chi",
    category: "Expansión",
    description:
      "Co-fundador de AIK Tai Chi. Talleres internacionales. Formación de instructores. El círculo se amplía: Chile, Argentina, España.",
    icon: "🌎",
  },
  {
    year: "2024",
    title: "Experiencia Tai Chi",
    category: "Renacimiento",
    description:
      "Lanzamiento de esta plataforma. Testimonio en video. Bitácora de transformación. Prácticas guiadas. El legado continúa.",
    icon: "✨",
  },
];

export default function CaminoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-16 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/20 dark:to-transparent">
        <div className="container mx-auto px-4 py-20 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-400 mb-4">
            MAURICIO OCHOA · EL CAMINO
          </span>
          <h1 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
            El camino del <span className="text-gradient">maestro</span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            No elegí el Tai Chi. El Tai Chi me eligió a mí. Esta es la historia de cómo una crisis
            que pudo costarme la vida se convirtió en el portal a mi verdadera naturaleza.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white dark:bg-neutral-950" aria-labelledby="timeline-heading">
        <div className="container mx-auto px-4">
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-200 via-brand-400 to-brand-200 dark:from-brand-800 dark:via-brand-600 dark:to-brand-800 -translate-x-1/2" aria-hidden="true" />

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative mb-16 ${index % 2 === 0 ? "pl-[55%]" : "pr-[55%] text-right"}`}
              >
                {/* Dot on timeline */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-brand-500 border-4 border-white dark:border-neutral-950 shadow-lg" />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-xs font-mono text-brand-600 dark:text-brand-400 whitespace-nowrap">
                    {item.year}
                  </div>
                </div>

                {/* Card */}
                <Card interactive className="relative">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300">
                        {item.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="mt-3 text-base">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}

            {/* Present dot */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10">
              <div className="w-6 h-6 rounded-full bg-brand-500 border-4 border-white dark:border-neutral-950 shadow-lg animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="section bg-neutral-50 dark:bg-neutral-900" aria-labelledby="philosophy-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="philosophy-heading" className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl sm:text-4xl lg:text-5xl mb-4">
              Los principios que <span className="text-gradient">guían mi vida</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Más allá de la técnica, el Tai Chi es una filosofía de vida. Estos son los pilares
              que sostienen mi práctica y mi enseñanza.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Wu Wei — No Esfuerzo",
                description:
                  "La acción sin fuerza. Fluir con la naturaleza de las cosas. El bambú se dobla pero no se rompe.",
                quote: '"El agua no lucha, fluye."',
              },
              {
                title: "Yin Yang — Equilibrio Dinámico",
                description:
                  "Lo opuesto se complementa. Fuerza y suavidad. Movimiento y quietud. Uno no existe sin el otro.",
                quote: '"En la quietud hay movimiento. En el movimiento, quietud."',
              },
              {
                title: "Shen — Espíritu/Conciencia",
                description:
                  "La mente guía al Qi, el Qi guía al cuerpo. La intención (Yi) precede al movimiento.",
                quote: '"Donde va la intención, fluye la energía."',
              },
            ].map((principle, i) => (
              <Card key={i} variant="elevated" className="h-full p-6">
                <CardTitle className="text-xl mb-3">{principle.title}</CardTitle>
                <CardDescription className="text-base mb-4">{principle.description}</CardDescription>
                <blockquote className="text-neutral-600 dark:text-neutral-400 italic border-l-4 border-brand-500 pl-4">
                  {principle.quote}
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metaphor Section */}
      <section className="section bg-white dark:bg-neutral-950" aria-labelledby="metaphor-heading">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🌱",
                title: "La Semilla",
                metaphor: "La crisis fue la semilla. En la oscuridad de la tierra, la semilla no muere: germina.",
                lesson: "El dolor no es castigo. Es preparación.",
              },
              {
                icon: "🌊",
                title: "El Agua",
                metaphor: "El Tai Chi me enseñó a ser agua. Se adapta a cualquier forma. Fluye alrededor de los obstáculos. Con el tiempo, desgasta la piedra.",
                lesson: "La suavidad vence a la rigidez.",
              },
              {
                icon: "☀️",
                title: "El Sol",
                metaphor: "Hoy mi práctica ilumina a otros. No porque sea especial, sino porque el sol simplemente brilla. La transmisión es natural.",
                lesson: "Sanado, sano. Despierto, despierto.",
              },
            ].map((meta, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl mb-6">{meta.icon}</div>
                <h3 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-2xl mb-4">{meta.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">{meta.metaphor}</p>
                <div className="p-4 bg-brand-50 dark:bg-brand-950/30 rounded-xl border border-brand-200 dark:border-brand-800">
                  <p className="font-medium text-brand-700 dark:text-brand-300">{meta.lesson}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-900 dark:bg-neutral-50" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="font-heading font-bold text-neutral-50 dark:text-neutral-900 text-3xl sm:text-4xl lg:text-5xl mb-6">
            Tu camino <span className="text-brand-400 dark:text-brand-600">comienza con un paso</span>
          </h2>
          <p className="text-lg text-neutral-300 dark:text-neutral-600 max-w-2xl mx-auto mb-10">
            No necesitas estar lesionado para empezar. Solo necesitas la intención de moverte
            con más conciencia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contacto" className="flex items-center gap-2">
                Agendar sesión
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-neutral-300 text-neutral-100 hover:bg-neutral-800 dark:border-neutral-600 dark:text-neutral-900 dark:hover:bg-neutral-200" asChild>
              <Link href="/practica">Explorar prácticas</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
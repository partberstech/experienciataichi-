import { Metadata } from "next";
import { ArrowLeft, TreePine, Heart, Shield, Sparkles, Quote } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "El Camino",
  description: "La historia de Mauricio Ochoa: de crisis cervical a renacimiento a través del Tai Chi. Biografía, línea de tiempo y filosofía.",
};

const timeline = [
  {
    year: "Juventud",
    title: "Deportista de alto rendimiento",
    category: "Orígenes",
    description: "Practicante de remo, seleccionado nacional. Vida activa, proyectos, ilusión de control. El cuerpo era una máquina, no un templo.",
    icon: "🚣",
  },
  {
    year: "2008",
    title: "La crisis cervical",
    category: "Crisis",
    description: "Un día despertó con un dedo dormido. En semanas, las vértebras C3, C4 y C5 se aplastaron. Los médicos advirtieron: cirugía urgente o parálisis permanente.",
    icon: "⚡",
  },
  {
    year: "2009",
    title: "La operación y la muerte simbólica",
    category: "Renacimiento",
    description: "8 horas de cirugía. Le salvaron la vida, pero las células y neuronas murieron. Los especialistas dictaminaron: no se puede operar, no se puede descomprimir, no se puede eliminar la espasticidad.",
    icon: "🌅",
  },
  {
    year: "2009-2010",
    title: "El primer paso: sacar las armaduras",
    category: "Transformación",
    description: "Daniel Berniel, instructor de Tai Chi, le dijo: 'Mauricio, no te sirven las armaduras. Tienes que sacarte todas las armaduras.' Muletas, órtesis, cintas... todo afuera.",
    icon: "🔓",
  },
  {
    year: "2010-2014",
    title: "La práctica diaria y el árbol",
    category: "Disciplina",
    description: "Práctica diaria de Tai Chi y Chi Kung. El ejercicio del árbol le enseñó: raíces firmes para decisiones firmes, ramas flexibles para no quebrarse en la tormenta.",
    icon: "🌳",
  },
  {
    year: "2015",
    title: "La espasticidad desaparece",
    category: "Milagro",
    description: "Después de años de práctica rigurosa y observación interna, la espasticidad que los médicos dijeron era incurable se eliminó por completo.",
    icon: "✨",
  },
  {
    year: "2022",
    title: "Certificación y enseñanza",
    category: "Transmisión",
    description: "Se certifica como instructor de Tai Chi. Comienza a enseñar lo que le salvó. La enseñanza se convierte en práctica superior.",
    icon: "🎓",
  },
  {
    year: "Hoy",
    title: "Volar en vez de correr",
    category: "Serenidad",
    description: "50% menos medicamentos. Sistema nervioso alineado. 'Antes podía correr, hoy día puedo volar. Si me piden elegir, prefiero volar.'",
    icon: "🕊️",
  },
];

export default function CaminoPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
        <div className="container mx-auto px-4 py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-brand-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/20 border border-brand-600/30 text-brand-300 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Biografía</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              El camino de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                Mauricio Ochoa
              </span>
            </h1>

            <p className="text-lg text-neutral-300 leading-relaxed">
              De deportista de alto rendimiento a paciente con diagnóstico de enfermedad catastrófica.
              De parálisis casi total a instructor de Tai Chi. Una historia de muerte simbólica y renacimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Bio text */}
              <div>
                <h2 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-2xl mb-6">
                  La historia
                </h2>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <p>
                    Mauricio Ochoa es originario de Valdivia, Chile. En su juventud fue deportista de alto rendimiento,
                    practicante de remo y seleccionado nacional. Vivió años con una vida activa, llena de proyectos,
                    mucha ilusión de control, mucho estrés y confusión emocional.
                  </p>
                  <p>
                    En 2008, todo cambió. Un día despertó con un dedo dormido. Las vértebras C3, C4 y C5
                    se aplastaron de manera agresiva. Los médicos le dijeron que la operación era para salvar
                    la vida, con altas posibilidades de quedar parapléjico.
                  </p>
                  <p>
                    La operación duró 8 horas. Le salvaron la vida, pero las células y neuronas murieron.
                    Los especialistas dictaminaron: no se puede operar, no se puede descomprimir la médula,
                    no se puede eliminar la espasticidad. Fue declarado inválido al 100% por enfermedad catastrófica.
                  </p>
                  <p>
                    Pero Mauricio no se rindió. Comenzó a preguntarse <em className="text-neutral-900 dark:text-neutral-100">&ldquo;¿cómo lo soluciono?&rdquo;</em> en vez de
                    <em className="text-neutral-900 dark:text-neutral-100">&ldquo;¿por qué me pasa?&rdquo;</em>. El &ldquo;cómo&rdquo; lo inspiró. El &ldquo;por qué&rdquo; lo victimizaba.
                  </p>
                  <p>
                    Un amigo le sugirió practicar Tai Chi. Apareció Daniel Berniel, instructor y terapeuta,
                    quien le dijo: <em className="text-neutral-900 dark:text-neutral-100">&ldquo;Mauricio, no te sirven las armaduras. Tienes que sacarte todas las armaduras.&rdquo;</em>
                  </p>
                  <p>
                    Juntos desarrollaron un programa específico para trabajar la espasticidad. Mauricio encontró
                    en los principios del Tao una lógica empírica que conectó con su proceso de sanación.
                    Hoy, 15 años después, eliminó la espasticidad por completo y redujo sus medicamentos a la mitad.
                  </p>
                </div>
              </div>

              {/* Right: Key facts */}
              <div className="space-y-6">
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                      Datos clave
                    </h3>
                    <div className="space-y-3">
                      {[
                        { label: "Nombre", value: "Mauricio Ochoa" },
                        { label: "Ubicación", value: "Valdivia, Chile" },
                        { label: "Formación", value: "Magister en Gobierno y Gerencia Pública, U. de Chile" },
                        { label: "Diagnóstico", value: "Mielopatía Cervical (C3-C4-C5)" },
                        { label: "Instructor", value: "Daniel Berniel" },
                        { label: "Estilo", value: "Tai Chi Chuan Yang + Chi Kung" },
                      ].map((fact, i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-b border-neutral-100 dark:border-neutral-800 last:border-0">
                          <span className="text-sm text-neutral-500 dark:text-neutral-400">{fact.label}</span>
                          <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100 text-right">{fact.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                      Condiciones médicas
                    </h3>
                    <div className="space-y-2">
                      {[
                        "Mielopatía Cervical con prótesis C3-C4-C5",
                        "Dos hernias cervicales (arriba y abajo de prótesis)",
                        "Espasticidad severa (convulsiones involuntarias)",
                        "Pérdida de musculatura extremidades derechas",
                        "Dolor crónico (antes: Pregabalina 900mg/día + Tramadol)",
                        "Declarado inválido 100% por enfermedad catastrófica",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                          <span className="text-red-500 mt-1">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <blockquote className="p-6 bg-brand-50 dark:bg-brand-950/30 border-l-4 border-brand-600 rounded-r-xl">
                  <p className="text-neutral-700 dark:text-neutral-300 italic">
                    &ldquo;Ya no busco la tranquilidad, tampoco la felicidad. Apareció algo totalmente desconocido,
                    fascinante y es el poder ilimitado que me entrega la serenidad.&rdquo;
                  </p>
                  <footer className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
                    — Mauricio Ochoa
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl text-center mb-16">
              Línea de tiempo
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div key={i} className={`relative flex flex-col md:flex-row gap-8 items-start ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                    {/* Dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-600 border-4 border-white dark:border-neutral-950 z-10" />

                    {/* Content */}
                    <div className={`flex-1 ml-16 md:ml-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-medium mb-3">
                        <span>{item.icon}</span>
                        <span>{item.year}</span>
                      </div>
                      <div className="text-xs font-medium text-brand-600 dark:text-brand-400 mb-1">
                        {item.category}
                      </div>
                      <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">
            ¿Quieres conocer el camino?
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
            La historia de Mauricio es solo el comienzo. Descubre cómo el Tai Chi puede
            transformar tu vida, como lo hizo con la suya.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/practica">
                Descubre la práctica
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contacto">
                Agenda una sesión
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
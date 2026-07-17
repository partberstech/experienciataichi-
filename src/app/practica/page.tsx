import { Metadata } from "next";
import { ArrowLeft, Play, BookOpen, Clock, CheckCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Práctica",
  description: "Rutinas guiadas de Tai Chi, principios fundamentales y progresiones para todos los niveles. Zhan Zhuang, forma, empuje de manos y más.",
};

const practices = [
  {
    id: "zhan-zhuang",
    title: "Zhan Zhuang — La Postura del Árbol",
    description: "Fundamento absoluto del Tai Chi. Raíz, estructura, quietud activa. La práctica que lo cambia todo.",
    level: "Todos los niveles",
    duration: "10-40 min",
    type: "video",
    featured: true,
    progress: 0,
    lessons: [
      { title: "Introducción y principios", duration: "5 min", completed: false },
      { title: "Estructura pies-caderas-columna", duration: "12 min", completed: false },
      { title: "Brazos: abrazar el árbol", duration: "8 min", completed: false },
      { title: "Respiración e intención (Yi)", duration: "10 min", completed: false },
      { title: "Errores comunes y correcciones", duration: "15 min", completed: false },
      { title: "Práctica guiada completa 20 min", duration: "20 min", completed: false },
    ],
  },
  {
    id: "10-simbolos",
    title: "Los 10 Símbolos del Tai Chi",
    description: "Secuencia esencial de movimientos. Fluidez, intención, conexión cielo-tierra. La forma condensada.",
    level: "Principiante/Intermedio",
    duration: "25 min",
    type: "guia",
    featured: true,
    progress: 0,
    lessons: [
      { title: "Preparación y Wu Chi", duration: "3 min", completed: false },
      { title: "Símbolo 1: Abrazar la luna", duration: "4 min", completed: false },
      { title: "Símbolo 2: Separar las nubes", duration: "4 min", completed: false },
      { title: "Símbolo 3: Empujar la montaña", duration: "4 min", completed: false },
      { title: "Símbolo 4: El dragón emerge", duration: "4 min", completed: false },
      { title: "Símbolo 5: La grúa extiende alas", duration: "4 min", completed: false },
      { title: "Secuencia completa fluida", duration: "10 min", completed: false },
    ],
  },
  {
    id: "silk-reeling",
    title: "Chan Si Gong — Enrollado de Seda",
    description: "Ejercicios de espiral continua. Desarrolla Qi interno, conexiones fasciales y potencia elástica.",
    level: "Intermedio",
    duration: "30 min",
    type: "video",
    featured: false,
    progress: 0,
    lessons: [
      { title: "Principio del espiral", duration: "8 min", completed: false },
      { title: "Ejercicio 1: Espiral simple brazo", duration: "10 min", completed: false },
      { title: "Ejercicio 2: Espiral doble coordinada", duration: "12 min", completed: false },
      { title: "Ejercicio 3: Espiral cuerpo entero", duration: "15 min", completed: false },
    ],
  },
  {
    id: "push-hands",
    title: "Tui Shou — Empuje de Manos",
    description: "Práctica en pareja. Escuchar (Ting Jin), adherir, seguir, no oponer. El laboratorio de la aplicación.",
    level: "Intermedio/Avanzado",
    duration: "45 min",
    type: "guia",
    featured: false,
    progress: 0,
    lessons: [
      { title: "Principios: Peng, Lu, Ji, An", duration: "15 min", completed: false },
      { title: "Tui Shou fijo: un brazo", duration: "20 min", completed: false },
      { title: "Tui Shou movible: dos brazos", duration: "25 min", completed: false },
      { title: "Aplicaciones marciales suaves", duration: "30 min", completed: false },
    ],
  },
  {
    id: "daily-routine",
    title: "Rutina Diaria 20 Minutos",
    description: "Secuencia completa para práctica diaria: calentamiento, Zhan Zhuang, forma corta, cierre. Ideal para mañanas.",
    level: "Todos los niveles",
    duration: "20 min",
    type: "video",
    featured: true,
    progress: 0,
    lessons: [
      { title: "Calentamiento articular (5 min)", duration: "5 min", completed: false },
      { title: "Zhan Zhuang (5 min)", duration: "5 min", completed: false },
      { title: "Forma 8 movimientos (8 min)", duration: "8 min", completed: false },
      { title: "Cierre y recolección Qi (2 min)", duration: "2 min", completed: false },
    ],
  },
];

function PracticeCard({ practice }: { practice: any }) {
  const completedLessons = practice.lessons.filter((l: any) => l.completed).length;
  const totalLessons = practice.lessons.length;
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  return (
    <Card interactive className="h-full flex flex-col group">
      <div className="relative aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-t-2xl overflow-hidden">
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={cn(
            "px-2 py-1 text-xs font-medium rounded-full",
            practice.type === "video"
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
              : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
          )}>
            {practice.type === "video" ? "Video" : "Guía"}
          </span>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
            {practice.level}
          </span>
        </div>
        {practice.featured && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
              Recomendado
            </span>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/30 opacity-0 group-hover:opacity-100 transition-opacity">
          {practice.type === "video" && (
            <Button size="xl" variant="primary" className="shadow-lg">
              <Play className="w-6 h-6 mr-2" />
              Ver video
            </Button>
          )}
          {practice.type === "guia" && (
            <Button size="xl" variant="primary" className="shadow-lg">
              <BookOpen className="w-6 h-6 mr-2" />
              Leer guía
            </Button>
          )}
        </div>
      </div>
      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-lg">{practice.title}</CardTitle>
          <span className="text-sm font-mono text-brand-600 dark:text-brand-400">{practice.duration}</span>
        </div>
        <CardDescription className="mb-4 flex-1">{practice.description}</CardDescription>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-1">
            <span>Progreso</span>
            <span>{progressPercent}% ({completedLessons}/{totalLessons})</span>
          </div>
          <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-600 dark:bg-brand-400 rounded-full transition-all duration-500 ease-spring"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <Button variant="outline" className="w-full justify-between" asChild>
          <Link href={`/practica/${practice.id}`}>
            {progressPercent > 0 ? "Continuar" : "Empezar"}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function PracticaPage() {
  return (
    <>
      <section className="section bg-white dark:bg-neutral-950" aria-labelledby="practica-heading">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 id="practica-heading" className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-4xl sm:text-5xl lg:text-6xl mb-6">
              Tu práctica <span className="text-gradient">comienza aquí</span>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              Rutinas guiadas, principios fundamentales y progresiones para todos los niveles.
              Diseñadas desde la experiencia directa y la transmisión auténtica.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-brand-500" />
                <span>Videos guiados</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-500" />
                <span>Guías escritas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-500" />
                <span>Seguimiento de progreso</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-500" />
                <span>10-45 min/sesión</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {practices.map((practice) => (
              <PracticeCard key={practice.id} practice={practice} />
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section bg-neutral-50 dark:bg-neutral-900" aria-labelledby="principles-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="principles-heading" className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl sm:text-4xl lg:text-5xl mb-4">
              Principios que <span className="text-gradient">guían cada práctica</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              No son reglas. Son brújulas. Si te pierdes, vuelve a ellos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌳", title: "Raíz (Gen)", detail: "Todo movimiento nace de la conexión con la tierra. Sin raíz, no hay poder." },
              { icon: "💧", title: "Fluir (Liu)", detail: "Ni rigidez ni colapso. Tensión elástica como bambú. Continuidad sin interrupción." },
              { icon: "☯️", title: "Yin-Yang", detail: "Apertura/cierre. Expansión/contracción. Subida/bajada. Siempre ambos presentes." },
              { icon: "🎯", title: "Intención (Yi)", detail: "La mente guía al Qi. Donde va la atención, fluye la energía. Sin Yi, movimiento vacío." },
            ].map((principle, i) => (
              <Card key={i} variant="elevated" className="p-6 text-center">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <CardTitle className="text-lg mb-2">{principle.title}</CardTitle>
                <CardDescription className="text-sm">{principle.detail}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section bg-white dark:bg-neutral-950" aria-labelledby="start-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="start-heading" className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl sm:text-4xl mb-6">
              ¿Primera vez? <span className="text-gradient">Empieza aquí</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10">
              No necesitas experiencia, flexibilidad ni ropa especial. Solo curiosidad y 10 minutos.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { step: "1", title: "Zhan Zhuang 5 min", desc: "Solo párate. Siente tus pies. Respira." },
                { step: "2", title: "Rutina diaria 20 min", desc: "Calentamiento + forma corta + cierre." },
                { step: "3", title: "Profundiza a tu ritmo", desc: "Explora símbolos, espiral, pareja." },
              ].map((step) => (
                <div key={step.step} className="text-left p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50">
                  <div className="font-heading font-bold text-3xl text-brand-600 dark:text-brand-400 mb-2">{step.step}</div>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">{step.title}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{step.desc}</p>
                </div>
              ))}
            </div>
            <Button size="lg" asChild>
              <Link href="/practica/zhan-zhuang" className="flex items-center gap-2 mx-auto">
                <Play className="w-5 h-5" />
                Empezar ahora: Zhan Zhuang 10 min
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-900 dark:bg-neutral-50" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="font-heading font-bold text-neutral-50 dark:text-neutral-900 text-3xl sm:text-4xl lg:text-5xl mb-6">
            ¿Quieres guía <span className="text-brand-400 dark:text-brand-600">personalizada</span>?
          </h2>
          <p className="text-lg text-neutral-300 dark:text-neutral-600 max-w-2xl mx-auto mb-10">
            Las sesiones 1:1 corrigen tu estructura, adaptan la práctica a tu cuerpo y aceleran años de prueba-error.
          </p>
          <Button size="lg" variant="outline" className="border-neutral-300 text-neutral-100 hover:bg-neutral-800 dark:border-neutral-600 dark:text-neutral-900 dark:hover:bg-neutral-200" asChild>
            <Link href="/contacto">Agendar sesión personalizada</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
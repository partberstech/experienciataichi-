import { Metadata } from "next";
import { ArrowLeft, Play, BookOpen, Clock, CheckCircle, ChevronRight, TreePine, Wind, Mountain } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Práctica",
  description: "Guías de práctica de Tai Chi y Chi Kung. Fundamentos, técnicas y principios para principiantes y practicantes avanzados.",
};

const practices = [
  {
    id: "zhan-zhuang",
    title: "Zhan Zhuang",
    subtitle: "El arte de estar de pie",
    description: "Postura fundamental del Tai Chi. No es meditación, no es ejercicio. Es recordar cómo el cuerpo se sostiene a sí mismo cuando la mente se calla.",
    duration: "10-30 min",
    level: "Todos los niveles",
    icon: Mountain,
    benefits: [
      "Fortalece la estructura ósea",
      "Mejora la postura y el equilibrio",
      "Calma el sistema nervioso",
      "Desarrolla la consciencia corporal",
    ],
  },
  {
    id: "arbol",
    title: "El Árbol",
    subtitle: "Raíces firmes, ramas flexibles",
    description: "Postura que Mauricio relacionó con la toma de decisiones: estar enraizado como el tronco para decisiones firmes, pero con ramas flexibles que no se quiebran en la tormenta.",
    duration: "5-15 min",
    level: "Todos los niveles",
    icon: TreePine,
    benefits: [
      "Enraizamiento y estabilidad",
      "Flexibilidad mental y emocional",
      "Fortalecimiento de piernas",
      "Claridad para decisiones",
    ],
  },
  {
    id: "chi-kung",
    title: "Chi Kung",
    subtitle: "Trabajo con la energía vital",
    description: "Ejercicios de respiración y movimiento que activan la circulación, oxigenan el cuerpo y limpian el sistema. La base de toda práctica de Tai Chi.",
    duration: "10-20 min",
    level: "Todos los niveles",
    icon: Wind,
    benefits: [
      "Activa la circulación sanguínea",
      "Oxigena el cuerpo y la mente",
      "Reduce el estrés y la ansiedad",
      "Mejora la calidad del sueño",
    ],
  },
];

const principles = [
  {
    title: "Wu Wei",
    subtitle: "El no-esfuerzo",
    description: "No es no hacer nada. Es actuar sin resistencia, en armonía con la corriente natural de la vida. Como el océano: las olas quieren golpear las rocas, pero la masa del océano manda.",
    quote: "Mis ideas deben ir en armonía con la vida. La masa de la vida manda. No puedo hacer resistencia, solo me agoto y frustra.",
  },
  {
    title: "Presencia",
    subtitle: "Estar aquí y ahora",
    description: "Cuando Mauricio estaba presente en su cuerpo, no había espacio para pensamientos negativos. El presente le ayudó a salir del hoyo.",
    quote: "Si no me caía, me paré y sentía la gracia de sentir mi planta en los pies. Cuánto tiempo estuve sin sentir la planta en mis pies.",
  },
  {
    title: "Transformación",
    subtitle: "Todo se transforma",
    description: "La naturaleza muestra un constante proceso de transformación inevitable. Yo soy naturaleza. Negarme a la transformación era negarme a la vida.",
    quote: "Si mejoraba internamente iba a poder mantener mejor equilibrio. A mayor quietud interior, mayor fuerza exterior.",
  },
  {
    title: "Serenidad",
    subtitle: "El poder ilimitado",
    description: "Ya no busco la tranquilidad ni la felicidad. Apareció algo desconocido: el poder ilimitado que entrega la serenidad.",
    quote: "La claridad por la quietud, entrega paz interior y con ello una fuerza muy poderosa.",
  },
];

export default function PracticaPage() {
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
              <BookOpen className="w-4 h-4" />
              <span>Guías de práctica</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              La práctica que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                transforma
              </span>
            </h1>

            <p className="text-lg text-neutral-300 leading-relaxed">
              Tai Chi y Chi Kung no son solo ejercicios. Son herramientas de transformación
              interna. Descubre los fundamentos que le devolvieron la vida a Mauricio.
            </p>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl text-center mb-16">
              Prácticas fundamentales
            </h2>

            <div className="space-y-8">
              {practices.map((practice) => (
                <Card key={practice.id} variant="elevated" interactive>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                            <practice.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 text-xl">
                              {practice.title}
                            </h3>
                            <p className="text-sm text-brand-600 dark:text-brand-400">
                              {practice.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                          {practice.description}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{practice.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{practice.level}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-3">
                          Beneficios
                        </h4>
                        <ul className="space-y-2">
                          {practice.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl text-center mb-4">
              Principios del camino
            </h2>
            <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-16">
              Fundamentos que Mauricio descubrió a través de la práctica y la observación de la naturaleza.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="text-xs font-mono text-brand-600 dark:text-brand-400 mb-2">
                      {principle.subtitle}
                    </div>
                    <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 text-xl mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                      {principle.description}
                    </p>
                    <blockquote className="pl-4 border-l-2 border-brand-200 dark:border-brand-800 text-sm text-neutral-500 dark:text-neutral-400 italic">
                      &ldquo;{principle.quote}&rdquo;
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Lessons */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl text-center mb-4">
              Video-lecciones
            </h2>
            <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-16">
              Clases grabadas para practicar en cualquier momento y lugar.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Zhan Zhuang para principiantes", duration: "15 min", level: "Inicial" },
                { title: "Chi Kung matutino", duration: "20 min", level: "Todos" },
                { title: "El Árbol: enraizamiento", duration: "10 min", level: "Todos" },
                { title: "Respiración para calmar", duration: "8 min", level: "Inicial" },
                { title: "Forma 24: Pasos 1-8", duration: "25 min", level: "Intermedio" },
                { title: "Tui Shou: Sensibilidad", duration: "30 min", level: "Avanzado" },
              ].map((video, i) => (
                <Card key={i} interactive>
                  <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-t-2xl flex items-center justify-center relative">
                    <Play className="w-12 h-12 text-neutral-400" />
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-xs text-white">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-neutral-900 dark:text-neutral-100 text-sm">
                      {video.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      {video.level}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Ver todas las lecciones
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">
            Comienza tu práctica hoy
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
            No necesitas experiencia previa. El Tai Chi se adapta a cada persona.
            El primer paso es una conversación.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contacto">
                Agenda una sesión
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/camino">
                Conoce la historia
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
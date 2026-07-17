import { ArrowRight, Play, Calendar, Users, Award, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/Card";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Content - Right side (40%) */}
            <div className="lg:col-start-7 lg:col-span-6 space-y-8 animate-fade-in-up delay-100">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-400">
                <span className="relative h-1 w-8 bg-gradient-to-r from-brand-500 to-brand-300 rounded-full" />
                MAURICIO OCHOA · EXPERIENCIA TAI CHI
              </span>

              <h1 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
                El movimiento es el
                <br />
                <span className="text-gradient">lenguaje del alma</span>
              </h1>

              <blockquote className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 font-medium italic border-l-4 border-brand-500 pl-6 max-w-xl">
                "Entre volar y correr, prefiero volar."
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/camino" className="flex items-center gap-2">
                    Conoce mi historia
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contacto" className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" aria-hidden="true" />
                    Agenda una sesión
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 dark:text-neutral-500 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-brand-500" />
                  <span>15+ años de práctica</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-brand-500" />
                  <span>Cientos de alumnos</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-500" />
                  <span>Transformación real</span>
                </div>
              </div>
            </div>

            {/* Video Background - Left side (60%) */}
            <div className="lg:col-span-6 relative order-first lg:order-last animate-fade-in delay-200">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated bg-neutral-100 dark:bg-neutral-900">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/hero-poster.jpg"
                  className="w-full h-full object-cover"
                  aria-label="Mauricio Ochoa practicando Tai Chi al aire libre"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                  <source src="/hero-video.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="group p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    aria-label="Ver video completo en YouTube"
                  >
                    <Play className="w-10 h-10 text-white group-hover:text-brand-300 transition-colors" />
                  </button>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 lg:-bottom-12 grid grid-cols-3 gap-4">
                {[
                  { value: "15+", label: "Años de práctica" },
                  { value: "500+", label: "Alumnos guiados" },
                  { value: "∞", label: "Transformaciones" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="card-elevated p-5 text-center animate-slide-up delay-300"
                    style={{ animationDelay: `${300 + i * 100}ms` }}
                  >
                    <div className="font-heading font-bold text-3xl sm:text-4xl text-brand-600 dark:text-brand-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Section Preview: El Camino */}
      <section id="camino" className="section bg-white dark:bg-neutral-950" aria-labelledby="camino-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="camino-heading" className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl sm:text-4xl lg:text-5xl mb-4">
              El camino del maestro
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              De una crisis cervical que pudo costarme la vida a una transformación que me devolvió el alma.
              Una historia de resiliencia, descubrimiento y propósito.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "🌀",
                title: "La Crisis",
                description: "Una hernia cervical severa, pérdida de sensibilidad, el diagnóstico que cambió todo.",
                href: "/camino#crisis",
              },
              {
                icon: "🥋",
                title: "La Práctica",
                description: "El encuentro con el Tai Chi, la constancia diaria, el cuerpo recordando su sabiduría.",
                href: "/camino#practica",
              },
              {
                icon: "✨",
                title: "El Renacimiento",
                description: "Recuperar el movimiento, la sensibilidad, la vida. Compartir lo que me salvó.",
                href: "/camino#renacimiento",
              },
            ].map((step, i) => (
              <Card key={i} interactive className="h-full">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="mt-2">{step.description}</CardDescription>
                  <Link
                    href={step.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400 hover:gap-2 transition-all"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/camino">Ver historia completa <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Preview: Testimonio */}
      <section id="testimonio" className="section bg-neutral-50 dark:bg-neutral-900" aria-labelledby="testimonio-heading">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-400">
                <Play className="w-4 h-4" />
                TESTIMONIO EN VIDEO
              </span>
              <h2 id="testimonio-heading" className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl sm:text-4xl lg:text-5xl">
                Mi testimonio: <span className="text-gradient">de la oscuridad a la luz</span>
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                En esta entrevista profunda, comparto cómo el Tai Chi no solo sanó mi cuerpo,
                sino que transformó mi manera de habitar el mundo. Una conversación honesta
                sobre el miedo, la rendición y el poder del movimiento consciente.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link href="/testimonio" className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Ver video completo
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <Link href="/testimonio#transcripcion">Leer transcripción</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-elevated">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="Testimonio completo de Mauricio Ochoa - Experiencia Tai Chi"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Preview: Bitácora */}
      <section id="bitacora" className="section bg-white dark:bg-neutral-950" aria-labelledby="bitacora-heading">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 id="bitacora-heading" className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl sm:text-4xl lg:text-5xl">
                Bitácora de <span className="text-gradient">transformación</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2 max-w-xl">
                Reflexiones, aprendizajes y momentos de claridad en el camino del Tai Chi.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/bitacora">Ver todos los artículos <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Filosofía",
                title: "El principio del no-esfuerzo (Wu Wei)",
                excerpt: "Cómo dejar de forzar y empezar a fluir. La paradoja de que menos esfuerzo genera más poder.",
                date: "15 enero 2025",
                readTime: "5 min",
              },
              {
                category: "Práctica",
                title: "Zhan Zhuang: el arte de estar quieto",
                excerpt: "La postura del árbol. Por qué permanecer inmóvil es el movimiento más desafiante y transformador.",
                date: "28 diciembre 2024",
                readTime: "7 min",
              },
              {
                category: "Reflexiones",
                title: "Cuando el cuerpo recuerda lo que la mente olvida",
                excerpt: "La memoria celular, el trauma almacenado y cómo el Tai Chi libera lo que las palabras no alcanzan.",
                date: "10 diciembre 2024",
                readTime: "6 min",
              },
            ].map((post, i) => (
              <Card key={i} interactive className="h-full flex flex-col">
                <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-t-2xl relative overflow-hidden">
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="flex-1 p-6 flex flex-col">
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription className="mt-2 flex-1">{post.excerpt}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mt-4 pt-4 border-t border-neutral-200/50 dark:border-neutral-800/50">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Preview: Práctica */}
      <section id="practica" className="section bg-neutral-50 dark:bg-neutral-900" aria-labelledby="practica-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="practica-heading" className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl sm:text-4xl lg:text-5xl mb-4">
              Tu práctica <span className="text-gradient">comienza aquí</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Rutinas guiadas, principios fundamentales y progresiones para todos los niveles.
              Diseñadas desde la experiencia directa y la transmisión auténtica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Zhan Zhuang — La Postura del Árbol",
                description: "Fundamento de todo Tai Chi. Raíz, estructura, quietud activa. 10-40 min.",
                level: "Todos los niveles",
                duration: "15 min",
                type: "video",
              },
              {
                title: "Los 10 Símbolos del Tai Chi",
                description: "Secuencia esencial de movimientos. Fluidez, intención, conexión cielo-tierra.",
                level: "Principiante/Intermedio",
                duration: "25 min",
                type: "guia",
              },
            ].map((practice, i) => (
              <Card key={i} interactive className="p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300">
                    {practice.type === "video" ? "Video" : "Guía"}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    {practice.level}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2">{practice.title}</CardTitle>
                <CardDescription className="mb-4 flex-1">{practice.description}</CardDescription>
                <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                  <span className="flex items-center gap-1">
                    <span className="w-4 h-4" />
                    {practice.duration}
                  </span>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/practica">Iniciar práctica <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/practica">Ver todas las rutinas <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-neutral-900 dark:bg-neutral-50" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="font-heading font-bold text-neutral-50 dark:text-neutral-900 text-3xl sm:text-4xl lg:text-5xl mb-6">
            ¿Listo para <span className="text-brand-400 dark:text-brand-600">comenzar tu transformación</span>?
          </h2>
          <p className="text-lg text-neutral-300 dark:text-neutral-600 max-w-2xl mx-auto mb-10">
            Agenda una sesión personalizada, únete a un taller grupal o simplemente escríbeme.
            El primer paso es el más importante.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contacto" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Agendar sesión
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-neutral-300 text-neutral-100 hover:bg-neutral-800 dark:border-neutral-600 dark:text-neutral-900 dark:hover:bg-neutral-200" asChild>
              <Link href="/contacto#talleres">Próximos talleres</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
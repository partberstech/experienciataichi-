import { Metadata } from "next";
import { ArrowLeft, Play, Volume2, VolumeX, Clock, Calendar, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Testimonio",
  description: "Testimonio completo en video de Mauricio Ochoa: de la crisis cervical al renacimiento a través del Tai Chi. Incluye transcripción con marcas de tiempo.",
};

const transcript = [
  {
    time: "0:00",
    title: "Introducción",
    text: "Hola, soy Mauricio Ochoa. Bienvenidos a mi testimonio. Lo que voy a compartir no es solo mi historia personal — es la historia de cómo el cuerpo puede sanarse a sí mismo cuando le damos las condiciones adecuadas.",
  },
  {
    time: "2:15",
    title: "El diagnóstico",
    text: "En 2008 me diagnosticaron una hernia cervical C5-C6 severa con compresión medular. Perdí sensibilidad en las manos y brazos. Los neurocirujanos fueron claros: cirugía urgente o parálisis permanente. Tenía 34 años.",
  },
  {
    time: "5:30",
    title: "La decisión",
    text: "Decidí no operarme. Fue la decisión más aterradora y más liberadora de mi vida. Busqué alternativas. Probé de todo: osteopatía, acupuntura, quiropráctica, fisioterapia. Algo ayudaba, pero nada sostenía.",
  },
  {
    time: "9:45",
    title: "El encuentro con el Tai Chi",
    text: "Llegué a una clase de Tai Chi estilo Yang casi por accidente. El maestro me dijo: 'No vengas a curarte. Ven a moverte'. Esa frase cambió todo. Dejé de ser paciente y empecé a ser practicante.",
  },
  {
    time: "14:20",
    title: "Zhan Zhuang — La postura del árbol",
    text: "La práctica fundamental. Estar quieto. Raíz. Estructura. Al principio era agonizante: temblores, dolor, ganas de rendirme. Pero cada día que me paraba, algo cambiaba. Mi cuerpo recordaba cómo sanarse.",
  },
  {
    time: "21:10",
    title: "Los primeros cambios",
    text: "A los 6 meses: recuperé sensibilidad en la punta de los dedos. A los 12 meses: ya no me despertaba con el brazo dormido. A los 2 años: podía cargar a mi hijo sin dolor. El diagnóstico médico no cambió — la resonancia mostraba la misma hernia. Pero YO había cambiado.",
  },
  {
    time: "28:00",
    title: "De practicante a maestro",
    text: "El Tai Chi me pidió que lo compartiera. No como terapia, sino como arte. Me certifiqué. Empecé a enseñar. Cada alumno me enseñaba algo nuevo. La transmisión se volvió mi práctica superior.",
  },
  {
    time: "34:30",
    title: "La filosofía en la vida diaria",
    text: "Wu Wei en la cocina. Yin-Yang en las relaciones. Shen en las decisiones. El Tai Chi no es lo que hago una hora al día — es cómo vivo las otras 23 horas.",
  },
  {
    time: "41:00",
    title: "Mensaje para ti",
    text: "Si estás sufriendo, si te dijeron que no hay solución, si sientes que tu cuerpo te traicionó: tu cuerpo no te traicionó. Te está pidiendo que lo escuches de otra manera. El Tai Chi es una forma de escuchar. Empieza hoy. Aunque sea 5 minutos. Aunque sea solo pararte y respirar. El camino se hace caminando.",
  },
];

export default function TestimonioPage() {
  return (
    <>
      {/* Hero Video */}
      <section className="relative min-h-[70vh] flex items-center pt-16 bg-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-transparent to-neutral-950/90" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-brand-400 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] bg-neutral-900">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&controls=1"
                title="Testimonio completo de Mauricio Ochoa - Experiencia Tai Chi"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="section bg-neutral-900 border-y border-neutral-800" aria-labelledby="info-heading">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Play className="w-8 h-8 text-brand-400" />
              <span className="font-heading font-semibold text-neutral-100">45 min</span>
              <span className="text-sm text-neutral-500">Duración</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Calendar className="w-8 h-8 text-brand-400" />
              <span className="font-heading font-semibold text-neutral-100">2024</span>
              <span className="text-sm text-neutral-500">Año de grabación</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <User className="w-8 h-8 text-brand-400" />
              <span className="font-heading font-semibold text-neutral-100">Mauricio Ochoa</span>
              <span className="text-sm text-neutral-500">Fundador & Maestro</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-8 h-8 text-brand-400" />
              <span className="font-heading font-semibold text-neutral-100">9 capítulos</span>
              <span className="text-sm text-neutral-500">Marcas de tiempo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Transcript */}
      <section id="transcripcion" className="section bg-white dark:bg-neutral-950" aria-labelledby="transcript-heading">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 id="transcript-heading" className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl sm:text-4xl lg:text-5xl mb-2">
                Transcripción <span className="text-gradient">completa</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-xl">
                Navega por capítulos usando las marcas de tiempo. Cada sección incluye el momento exacto del video.
              </p>
            </div>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contacto" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Agendar sesión personalizada
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {transcript.map((segment, index) => (
              <Card key={index} interactive className="group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="font-mono font-medium text-brand-600 dark:text-brand-400 text-lg">
                        {segment.time}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300">
                          Capítulo {index + 1}
                        </span>
                        <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-50 text-lg">
                          {segment.title}
                        </h3>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {segment.text}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400"
                      aria-label={`Reproducir desde ${segment.time}`}
                    >
                      <Play className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pull Quote */}
          <blockquote className="max-w-3xl mx-auto mt-16 text-center">
            <div className="relative">
              <span className="text-6xl font-heading font-light text-brand-200 dark:text-brand-800">"</span>
              <p className="font-heading font-light text-neutral-900 dark:text-neutral-50 text-2xl sm:text-3xl lg:text-4xl leading-relaxed mt-4 mb-6 relative z-10">
                "El agua no lucha, fluye. El bambú se dobla, no se rompe.
                Tu cuerpo sabe sanarse. Solo tienes que dejar de estorbarle."
              </p>
              <span className="text-6xl font-heading font-light text-brand-200 dark:text-brand-800">"</span>
            </div>
            <footer className="mt-6 text-neutral-600 dark:text-neutral-400">
              — Mauricio Ochoa, Testimonio completo
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="section bg-neutral-50 dark:bg-neutral-900" aria-labelledby="takeaways-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="takeaways-heading" className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl sm:text-4xl lg:text-5xl mb-4">
              Lo esencial <span className="text-gradient">en 3 puntos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                title: "El diagnóstico no es destino",
                description: "La resonancia mostraba la misma hernia antes y después. Lo que cambió fue mi relación con mi cuerpo. La medicina ve estructura; el Tai Chi ve función y posibilidad.",
              },
              {
                number: "02",
                title: "La constancia vence a la intensidad",
                description: "20 minutos diarios durante años transformaron más que 3 horas una vez por semana. El cuerpo aprende por repetición suave, no por fuerza ocasional.",
              },
              {
                number: "03",
                title: "Enseñar es sanar dos veces",
                description: "Cada alumno que guío me recuerda mi propio camino. La transmisión no es dar lo que sé — es crear el espacio para que el otro lo descubra.",
              },
            ].map((takeaway, i) => (
              <Card key={i} variant="elevated" className="p-6 relative overflow-hidden">
                <span className="absolute top-4 right-4 font-heading font-bold text-brand-100 dark:text-brand-900 text-4xl opacity-50">
                  {takeaway.number}
                </span>
                <CardTitle className="text-xl mb-3 relative z-10">{takeaway.title}</CardTitle>
                <CardDescription className="text-base relative z-10">{takeaway.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-900 dark:bg-neutral-50" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="font-heading font-bold text-neutral-50 dark:text-neutral-900 text-3xl sm:text-4xl lg:text-5xl mb-6">
            ¿Resuena contigo esta <span className="text-brand-400 dark:text-brand-600">historia</span>?
          </h2>
          <p className="text-lg text-neutral-300 dark:text-neutral-600 max-w-2xl mx-auto mb-10">
            Tu cuerpo también tiene esa sabiduría. No necesitas una crisis para empezar.
            Solo necesitas dar el primer paso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/practica" className="flex items-center gap-2">
                Empezar a practicar hoy
                <Play className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-neutral-300 text-neutral-100 hover:bg-neutral-800 dark:border-neutral-600 dark:text-neutral-900 dark:hover:bg-neutral-200" asChild>
              <Link href="/contacto">Contactar directamente</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
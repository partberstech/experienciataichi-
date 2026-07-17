import { Metadata } from "next";
import { ArrowLeft, FileText, Download, Eye, BookOpen, Clock, FileType } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Documentos",
  description: "Guías PDF, videos y recursos descargables para tu práctica de Tai Chi y Chi Kung.",
};

const guides = [
  {
    title: "Guía de Zhan Zhuang",
    description: "Postura fundamental del Tai Chi. Instrucciones paso a paso para principiantes y avanzados.",
    pages: 12,
    level: "Todos los niveles",
    icon: "📄",
    download: "#",
  },
  {
    title: "El Árbol: Guía de práctica",
    description: "El ejercicio que transformó las decisiones de Mauricio. Raíces firmes, ramas flexibles.",
    pages: 8,
    level: "Todos los niveles",
    icon: "🌳",
    download: "#",
  },
  {
    title: "Principios del Tao para la vida diaria",
    description: "Wu Wei, el Emperador-General-Soldados, y otros principios aplicados al día a día.",
    pages: 15,
    level: "Intermedio",
    icon: "☯️",
    download: "#",
  },
  {
    title: "Chi Kung matutino",
    description: "Rutina de 15 minutos para comenzar el día con energía y claridad.",
    pages: 6,
    level: "Todos los niveles",
    icon: "☀️",
    download: "#",
  },
];

const videos = [
  {
    title: "Zhan Zhuang: La postura que todo lo cambia",
    duration: "15:30",
    description: "Instrucciones detalladas de la postura fundamental.",
    level: "Inicial",
  },
  {
    title: "El Árbol: Enraizamiento y flexibilidad",
    duration: "12:00",
    description: "El ejercicio que Mauricio relacionó con la toma de decisiones.",
    level: "Todos",
  },
  {
    title: "Chi Kung: Respiración y energía",
    duration: "20:00",
    description: "Secuencia completa de Chi Kung para activar el cuerpo.",
    level: "Todos",
  },
  {
    title: "Forma 24: Los primeros pasos",
    duration: "25:00",
    description: "Los primeros movimientos de la forma corta de Tai Chi.",
    level: "Intermedio",
  },
];

const articles = [
  {
    title: "La espasticidad y el Tai Chi: Un caso clínico",
    author: "Daniel Berniel",
    description: "Análisis del proceso de Mauricio desde la perspectiva de su instructor y terapeuta.",
    type: "Artículo",
  },
  {
    title: "Wu Wei y la recuperación neurológica",
    author: "Mauricio Ochoa",
    description: "Cómo el principio del no-esfuerzo ayudó en la recuperación de la espasticidad.",
    type: "Artículo",
  },
  {
    title: "El Tao Te Ching: Guía de lectura",
    description: "Selección de capítulos relevantes para la práctica de Tai Chi.",
    type: "Guía",
  },
];

export default function DocumentosPage() {
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
              <FileText className="w-4 h-4" />
              <span>Recursos</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Documentos y{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                recursos
              </span>
            </h1>

            <p className="text-lg text-neutral-300 leading-relaxed">
              Guías, videos y artículos para acompañar tu práctica de Tai Chi y Chi Kung.
              Todo lo que necesitas para comenzar o profundizar.
            </p>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="section bg-white dark:bg-neutral-950" id="guias">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl mb-4">
              Guías PDF
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Documentos descargables con instrucciones detalladas para tu práctica.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {guides.map((guide, i) => (
                <Card key={i} interactive>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{guide.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                          {guide.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                          <span>{guide.pages} páginas</span>
                          <span>{guide.level}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <a href={guide.download} download>
                          <Download className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/50" id="videos">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl mb-4">
              Videos
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Clases grabadas para practicar en cualquier momento y lugar.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((video, i) => (
                <Card key={i} interactive>
                  <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-t-2xl flex items-center justify-center relative">
                    <Eye className="w-12 h-12 text-neutral-400" />
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-xs text-white">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-neutral-900 dark:text-neutral-100 text-sm mb-1">
                      {video.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                      {video.description}
                    </p>
                    <span className="text-xs text-brand-600 dark:text-brand-400">{video.level}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-3xl mb-4">
              Artículos y lecturas
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Textos para profundizar en la comprensión del Tai Chi y sus principios.
            </p>

            <div className="space-y-4">
              {articles.map((article, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
                        {article.type}
                      </span>
                      {article.author && (
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">
                          por {article.author}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {article.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">
            ¿Necesitas guía personalizada?
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
            Estos recursos son el comienzo. Para un acompañamiento personalizado,
            agenda una sesión con Mauricio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contacto">
                Agenda una sesión
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/practica">
                Explora la práctica
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
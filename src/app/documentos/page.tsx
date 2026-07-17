import { Metadata } from "next";
import { ArrowLeft, FileText, Download, Eye, BookOpen, Clock, FileType } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription, CardHeader } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Documentos",
  description: "Guías PDF, protocolos de práctica, documentos de referencia y materiales de estudio para profundizar en el Tai Chi. Descarga gratuita.",
};

const documents = [
  {
    id: "zhan-zhuang-100-dias",
    title: "Zhan Zhuang: Protocolo 100 Días",
    description: "Plan progresivo día a día para establecer la práctica de Zhan Zhuang. Incluye registro diario, hitos, correcciones comunes y criterios de avance.",
    category: "Protocolo de Práctica",
    format: "PDF",
    pages: 24,
    size: "2.3 MB",
    readTime: "Referencia continua",
    featured: true,
    downloadUrl: "/docs/zhan-zhuang-100-dias.pdf",
    previewUrl: "/docs/preview/zhan-zhuang-100-dias.pdf",
    tags: ["Zhan Zhuang", "Principiantes", "Progresión", "Registro"],
  },
  {
    id: "taichi-fundamentos",
    title: "Fundamentos del Tai Chi Chuan",
    description: "Documento de referencia con los 13 principios esenciales, los 8 trigramas, los 5 elementos y su aplicación en la forma. Base teórica para practicantes serios.",
    category: "Teoría & Referencia",
    format: "PDF",
    pages: 38,
    size: "4.1 MB",
    readTime: "2-3 horas",
    featured: true,
    downloadUrl: "/docs/taichi-fundamentos.pdf",
    previewUrl: "/docs/preview/taichi-fundamentos.pdf",
    tags: ["Teoría", "13 Principios", "8 Trigramas", "5 Elementos", "Referencia"],
  },
  {
    id: "forma-10-simbolos",
    title: "Guía Visual: Los 10 Símbolos",
    description: "Desglose fotográfico paso a paso de cada símbolo. Incluye nombres en chino, pinyin, significado, alineación estructural, intención (Yi) y errores comunes.",
    category: "Guía de Forma",
    format: "PDF",
    pages: 42,
    size: "8.7 MB",
    readTime: "Estudio continuo",
    featured: false,
    downloadUrl: "/docs/forma-10-simbolos.pdf",
    previewUrl: "/docs/preview/forma-10-simbolos.pdf",
    tags: ["Forma", "Visual", "Paso a paso", "Correcciones"],
  },
  {
    id: "chan-si-gong",
    title: "Chan Si Gong: Enrollado de Seda Completo",
    description: "Protocolo completo de ejercicios de espiral: simples, dobles, coordinados, cuerpo entero. Incluye variaciones terapéuticas y marciales.",
    category: "Protocolo de Práctica",
    format: "PDF",
    pages: 31,
    size: "3.8 MB",
    readTime: "Práctica continua",
    featured: false,
    downloadUrl: "/docs/chan-si-gong.pdf",
    previewUrl: "/docs/preview/chan-si-gong.pdf",
    tags: ["Chan Si Gong", "Espiral", "Qi Gong", "Intermedio"],
  },
  {
    id: "tui-shou-protocolo",
    title: "Tui Shou: Protocolo de Empuje de Manos",
    description: "Metodología progresiva desde Tui Shou fijo de un brazo hasta movible de dos brazos. Criterios de avance, principios de Ting Jin y aplicaciones.",
    category: "Práctica en Pareja",
    format: "PDF",
    pages: 28,
    size: "3.2 MB",
    readTime: "Práctica supervisada",
    featured: false,
    downloadUrl: "/docs/tui-shou-protocolo.pdf",
    previewUrl: "/docs/preview/tui-shou-protocolo.pdf",
    tags: ["Tui Shou", "Pareja", "Ting Jin", "Avanzado"],
  },
  {
    id: "rutina-diaria-20min",
    title: "Rutina Diaria 20 Minutos - Hoja de Práctica",
    description: "Hoja imprimible de una página: calentamiento, Zhan Zhuang, forma 8 movimientos, cierre. Con casillas de verificación para 30 días.",
    category: "Herramienta Diaria",
    format: "PDF",
    pages: 2,
    size: "450 KB",
    readTime: "Uso diario",
    featured: true,
    downloadUrl: "/docs/rutina-diaria-20min.pdf",
    previewUrl: "/docs/preview/rutina-diaria-20min.pdf",
    tags: ["Diario", "Imprimible", "Seguimiento", "Todos los niveles"],
  },
  {
    id: "taichi-salud-cervical",
    title: "Tai Chi para Salud Cervical: Protocolo Terapéutico",
    description: "Adaptación específica para hernia cervical, pérdida de sensibilidad, dolor crónico. Ejercicios seguros, progresión médica, contraindicaciones.",
    category: "Aplicación Terapéutica",
    format: "PDF",
    pages: 19,
    size: "2.1 MB",
    readTime: "Estudio + práctica",
    featured: false,
    downloadUrl: "/docs/taichi-salud-cervical.pdf",
    previewUrl: "/docs/preview/taichi-salud-cervical.pdf",
    tags: ["Terapéutico", "Cervical", "Hernia", "Rehabilitación"],
  },
  {
    id: "diario-practica",
    title: "Diario de Práctica: 365 Días",
    description: "Plantilla anual para registrar práctica diaria: tiempo, calidad, sensaciones, insights, obstáculos. Incluye revisiones mensuales y anuales.",
    category: "Herramienta de Seguimiento",
    format: "PDF",
    pages: 40,
    size: "1.8 MB",
    readTime: "Uso anual",
    featured: false,
    downloadUrl: "/docs/diario-practica-365.pdf",
    previewUrl: "/docs/preview/diario-practica-365.pdf",
    tags: ["Diario", "Seguimiento", "Reflexión", "Año completo"],
  },
];

function DocumentCard({ doc }: { doc: any }) {
  return (
    <Card interactive className="h-full flex flex-col">
      <CardHeader className="p-5 pb-0">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300">
            {doc.category}
          </span>
          {doc.featured && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
              Destacado
            </span>
          )}
        </div>
        <CardTitle className="text-lg mb-2">{doc.title}</CardTitle>
        <CardDescription className="text-base mb-4">{doc.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-5 pt-0 flex-1 flex flex-col">
        <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
          <span className="flex items-center gap-1">
            <FileType className="w-3.5 h-3.5" />
            {doc.format}
          </span>
          <span className="flex items-center gap-1">
            <FileText className="w-3.5 h-3.5" />
            {doc.pages} págs
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {doc.size}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {doc.tags.slice(0, 4).map((tag: string, i: number) => (
            <span
              key={i}
              className="px-2 py-0.5 text-xs rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
          {doc.tags.length > 4 && (
            <span className="px-2 py-0.5 text-xs rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-500">
              +{doc.tags.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 mt-auto pt-4 border-t border-neutral-200/50 dark:border-neutral-800/50">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link href={doc.previewUrl} target="_blank" rel="noopener noreferrer">
              <Eye className="w-4 h-4 mr-1.5" />
              Vista previa
            </Link>
          </Button>
          <Button size="sm" className="flex-1" asChild>
            <a href={doc.downloadUrl} download>
              <Download className="w-4 h-4 mr-1.5" />
              Descargar
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function DocumentosPage() {
  return (
    <>
      <section className="section bg-white dark:bg-neutral-950" aria-labelledby="documentos-heading">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 id="documentos-heading" className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-4xl sm:text-5xl lg:text-6xl mb-6">
              Biblioteca de <span className="text-gradient">documentos</span>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              Guías PDF, protocolos de práctica, documentos de referencia y materiales de estudio.
              Descarga gratuita. Para estudio personal y práctica responsable.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-500" />
                <span>8 documentos</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-brand-500" />
                <span>Descarga directa</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-brand-500" />
                <span>Vista previa online</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-500" />
                <span>Actualizado 2024</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {documents.map((doc) => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
          </div>

          {/* Usage Notice */}
          <section className="mt-16 p-6 lg:p-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50">
            <h2 className="font-heading font-semibold text-neutral-900 dark:text-neutral-50 text-xl mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-brand-500" />
              Uso responsable
            </h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none text-sm">
              <ul className="space-y-2">
                <li>Estos documentos son <strong>material de apoyo</strong>, no sustituyen la enseñanza presencial de un instructor calificado.</li>
                <li>La práctica de Tai Chi conlleva <strong>responsabilidad personal</strong>. Escucha a tu cuerpo. No fuerces. Consulta a tu médico si tienes condiciones preexistentes.</li>
                <li>Permitido: <strong>uso personal, estudio, impresión para práctica propia</strong>.</li>
                <li>No permitido: <strong>redistribución comercial, venta, modificación, uso en formaciones pagadas sin autorización</strong>.</li>
                <li>¿Quieres usar esto en tu escuela/taller? <a href="/contacto" className="text-brand-600 dark:text-brand-400 hover:underline">Escríbeme</a>.</li>
              </ul>
            </div>
          </section>

          {/* Request Section */}
          <section className="mt-12 text-center">
            <h2 className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-2xl sm:text-3xl mb-4">
              ¿Buscas algo que no está aquí?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-xl mx-auto">
              Estoy creando nuevos materiales constantemente. Si necesitas un tema específico, dímelo.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contacto#sugerencias">Sugerir documento</Link>
            </Button>
          </section>
        </div>
      </section>
    </>
  );
}
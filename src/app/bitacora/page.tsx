import { Metadata } from "next";
import { Clock, Calendar, ArrowRight, BookOpen, Tag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { cn, formatDate, readingTime } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Bitácora",
  description: "Artículos, reflexiones y aprendizajes en el camino del Tai Chi. Filosofía, práctica y transformación personal.",
};

const categories = ["Todas", "Filosofía", "Práctica", "Reflexiones", "Enseñanza"];

function BlogCard({ post }: { post: any }) {
  return (
    <Card interactive className="h-full flex flex-col">
      <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-t-2xl relative overflow-hidden">
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300">
            {post.category}
          </span>
        </div>
        {post.featured && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
              Destacado
            </span>
          </div>
        )}
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 mb-3">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <Clock className="w-4 h-4" />
          <span>{post.readTime} min</span>
        </div>
        <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="mt-2 flex-1">{post.excerpt}</CardDescription>
        <div className="mt-4 pt-4 border-t border-neutral-200/50 dark:border-neutral-800/50 flex items-center justify-between">
          <Link
            href={`/bitacora/${post.slug}`}
            className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
          >
            Leer artículo
            <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="text-xs text-neutral-400">{post.tags.slice(0, 2).join(", ")}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function BitacoraPage() {
  // Mock data - will be replaced with MDX content loading
  const posts = [
    {
      slug: "zhan-zhuang-el-arte-de-estar-quieto",
      title: "Zhan Zhuang: El arte de estar quieto para moverse mejor",
      excerpt: "La práctica fundamental del Tai Chi. No es meditación, no es ejercicio. Es recordar cómo el cuerpo se sostiene a sí mismo cuando la mente se calla.",
      date: "2024-01-15",
      category: "Práctica",
      tags: ["Zhan Zhuang", "Postura", "Fundamentos", "Principiantes"],
      readTime: 8,
      coverImage: "/blog/zhan-zhuang.jpg",
      featured: true,
    },
    {
      slug: "el-principio-del-no-esfuerzo-wu-wei",
      title: "El principio del no-esfuerzo (Wu Wei): Cómo menos genera más",
      excerpt: "Wu Wei no es no hacer nada. Es actuar sin fuerza, sin resistencia, en armonía con el Dao. La paradoja de que rendirse genera poder.",
      date: "2024-12-28",
      category: "Filosofía",
      tags: ["Wu Wei", "Daoísmo", "Filosofía", "Principios"],
      readTime: 5,
      coverImage: "/blog/wu-wei.jpg",
      featured: true,
    },
    {
      slug: "cuando-el-cuerpo-recuerda-lo-que-la-mente-olvida",
      title: "Cuando el cuerpo recuerda lo que la mente olvida: Memoria celular y Tai Chi",
      excerpt: "El trauma no vive solo en la cabeza. Vive en los tejidos, en la fascia, en los patrones de tensión que el cuerpo mantiene como protección.",
      date: "2024-12-10",
      category: "Reflexiones",
      tags: ["Trauma", "Memoria celular", "Sanación", "Cuerpo", "Psicología somática"],
      readTime: 6,
      coverImage: "/blog/memoria-celular.jpg",
      featured: true,
    },
    {
      slug: "los-10-simbolos-del-tai-chi",
      title: "Los 10 Símbolos del Tai Chi: Mapa completo de la forma esencial",
      excerpt: "Cada símbolo es una llave. Juntos, abren la puerta a la energía interna. Desglose paso a paso de la secuencia fundamental.",
      date: "2024-11-20",
      category: "Práctica",
      tags: ["Forma", "Secuencia", "Simbolismo", "Intermedio"],
      readTime: 12,
      coverImage: "/blog/10-simbolos.jpg",
      featured: false,
    },
    {
      slug: "ensenar-es-sanar-dos-veces",
      title: "Enseñar es sanar dos veces: La transmisión como práctica superior",
      excerpt: "Cada alumno que guío me recuerda mi propio camino. La transmisión no es dar lo que sé — es crear el espacio para que el otro lo descubra.",
      date: "2024-11-05",
      category: "Enseñanza",
      tags: ["Pedagogía", "Transmisión", "Maestría", "Reflexión"],
      readTime: 7,
      coverImage: "/blog/ensenar-sanar.jpg",
      featured: false,
    },
    {
      slug: "taichi-y-salud-mental",
      title: "Tai Chi y salud mental: La ciencia detrás de la práctica milenaria",
      excerpt: "Estudios modernos confirman lo que los maestros saben hace siglos: el Tai Chi regula sistema nervioso, reduce ansiedad y mejora función cognitiva.",
      date: "2024-10-15",
      category: "Filosofía",
      tags: ["Ciencia", "Salud mental", "Neurociencia", "Evidencia"],
      readTime: 9,
      coverImage: "/blog/taichi-salud-mental.jpg",
      featured: false,
    },
  ];

  return (
    <>
      <section className="section bg-white dark:bg-neutral-950" aria-labelledby="bitacora-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 id="bitacora-heading" className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-4xl sm:text-5xl lg:text-6xl mb-6">
              Bitácora de <span className="text-gradient">transformación</span>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              Reflexiones, aprendizajes y momentos de claridad en el camino del Tai Chi.
              Escritos desde la práctica viva, no desde la teoría académica.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                    cat === "Todas"
                      ? "bg-brand-600 text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)]"
                      : "bg-neutral-100 text-neutral-700 hover:bg-brand-100 hover:text-brand-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-brand-900 dark:hover:text-brand-300"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Load More / Pagination */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Cargar más artículos
            </Button>
          </div>

          {/* Newsletter CTA */}
          <section className="mt-20 p-8 lg:p-12 bg-neutral-900 dark:bg-neutral-100 rounded-3xl text-center">
            <h2 className="font-heading font-bold text-neutral-50 dark:text-neutral-900 text-2xl sm:text-3xl mb-4">
              ¿No quieres perderte nada?
            </h2>
            <p className="text-neutral-300 dark:text-neutral-600 max-w-xl mx-auto mb-6">
              Recibe cada nuevo artículo directo en tu bandeja. Sin spam. Solo Tai Chi.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="/contacto#newsletter">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 dark:bg-neutral-900/50 border border-neutral-700/50 dark:border-neutral-300/50 text-neutral-50 dark:text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
                required
              />
              <Button type="submit" size="lg">
                Suscribirme
              </Button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}
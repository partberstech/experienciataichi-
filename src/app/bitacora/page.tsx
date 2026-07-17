import { Metadata } from "next";
import { Clock, Calendar, ArrowRight, BookOpen, Tag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { cn, formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Bitácora",
  description: "Artículos, reflexiones y aprendizajes en el camino del Tai Chi. Filosofía, práctica y transformación personal.",
};

const categories = ["Todas", "Filosofía", "Práctica", "Reflexiones", "Enseñanza"];

const posts = [
  {
    slug: "el-emperador-el-general-y-los-soldados",
    title: "El Emperador, el General y los Soldados: Cómo restaurar el orden interno",
    excerpt: "Un principio del Tao que transformó la vida de Mauricio: el Corazón gobierna, la Mente ejecuta, el Cuerpo obedece.",
    date: "2024-01-15",
    category: "Filosofía",
    tags: ["Tao", "Corazón", "Mente"],
    readTime: 8,
    featured: true,
  },
  {
    slug: "las-armaduras-que-nos-protegen",
    title: "Las armaduras que nos protegen nos impiden sentir",
    excerpt: "Mauricio llegó al Tai Chi con muletas, órtesis y cintas. Daniel le dijo: 'No te sirven las armaduras.'",
    date: "2024-12-28",
    category: "Reflexiones",
    tags: ["Armadura", "Sensibilidad"],
    readTime: 6,
    featured: true,
  },
  {
    slug: "el-principio-del-no-esfuerzo-wu-wei",
    title: "El principio del no-esfuerzo (Wu Wei): Cómo menos genera más",
    excerpt: "Wu Wei no es no hacer nada. Es actuar sin fuerza, sin resistencia, en armonía con el Dao.",
    date: "2024-12-20",
    category: "Filosofía",
    tags: ["Wu Wei", "Daoísmo"],
    readTime: 5,
    featured: false,
  },
  {
    slug: "el-arbol-raices-firmes-ramas-flexibles",
    title: "El árbol: raíces firmes para decisiones firmes, ramas flexibles para no quebrarse",
    excerpt: "El ejercicio del árbol le enseñó a Mauricio que las decisiones deben ser firmes como el tronco, pero flexibles como las ramas.",
    date: "2024-12-15",
    category: "Práctica",
    tags: ["Árbol", "Decisiones", "Flexibilidad"],
    readTime: 7,
    featured: false,
  },
  {
    slug: "el-océano-de-posibilidades",
    title: "El océano de posibilidades: Cuando la vida manda, no resistas",
    excerpt: "Mis ideas son las olas del mar. Si las olas quieren golpear las rocas con fuerza, pero la masa del océano manda.",
    date: "2024-12-10",
    category: "Reflexiones",
    tags: ["Océano", "Naturaleza", "Resistencia"],
    readTime: 6,
    featured: true,
  },
  {
    slug: "la-serenidad-como-poder",
    title: "La serenidad como poder ilimitado",
    excerpt: "Ya no busco la tranquilidad ni la felicidad. Apareció algo desconocido: el poder ilimitado que entrega la serenidad.",
    date: "2024-11-20",
    category: "Filosofía",
    tags: ["Serenidad", "Poder", "Quietud"],
    readTime: 5,
    featured: false,
  },
];

function formatDateShort(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-CL", { year: "numeric", month: "short", day: "numeric" });
}

export default function BitacoraPage() {
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
              <Card key={post.slug} interactive className="h-full flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                    <time dateTime={post.date}>{formatDateShort(post.date)}</time>
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
            ))}
          </div>

          {/* Newsletter CTA */}
          <section className="mt-20 p-8 lg:p-12 bg-neutral-900 dark:bg-neutral-100 rounded-3xl text-center">
            <h2 className="font-heading font-bold text-neutral-50 dark:text-neutral-900 text-2xl sm:text-3xl mb-4">
              ¿No quieres perderte nada?
            </h2>
            <p className="text-neutral-300 dark:text-neutral-600 max-w-xl mx-auto mb-6">
              Recibe cada nuevo artículo directo en tu bandeja. Sin spam. Solo Tai Chi.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="/api/newsletter" method="POST">
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
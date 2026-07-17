import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bitácora",
  description: "Artículos y reflexiones sobre Tai Chi.",
};

const posts = [
  { slug: "el-emperador-el-general-y-los-soldados", title: "El Emperador, el General y los Soldados", excerpt: "Un principio del Tao que transformó la vida de Mauricio.", date: "2024-01-15", category: "Filosofía", readTime: 8 },
  { slug: "las-armaduras-que-nos-protegen", title: "Las armaduras que nos protegen nos impiden sentir", excerpt: "Mauricio llegó con muletas y órtesis. Daniel le dijo: 'No te sirven.'", date: "2024-12-28", category: "Reflexiones", readTime: 6 },
  { slug: "el-principio-del-no-esfuerzo-wu-wei", title: "Wu Wei: Cómo menos genera más", excerpt: "Actuar sin resistencia, en armonía con el Dao.", date: "2024-12-20", category: "Filosofía", readTime: 5 },
  { slug: "el-arbol-raices-firmes-ramas-flexibles", title: "El árbol: raíces firmes, ramas flexibles", excerpt: "Decisiones firmes como el tronco, flexibles como las ramas.", date: "2024-12-15", category: "Práctica", readTime: 7 },
];

export default function BitacoraPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-semibold text-zinc-900">Experiencia Tai Chi</Link>
          <Link href="/contacto" className="text-[13px] font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors">Agendar</Link>
        </div>
      </nav>

      <section className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="text-[13px] text-zinc-400 hover:text-zinc-600 transition-colors mb-8 block">← Volver</Link>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">Bitácora</h1>
          <p className="text-zinc-500 mb-10">Reflexiones y aprendizajes en el camino del Tai Chi.</p>

          <div className="space-y-5">
            {posts.map((post) => (
              <Link key={post.slug} href={`/bitacora/${post.slug}`} className="block bg-white rounded-2xl border border-zinc-200 p-6 hover:border-zinc-300 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3 text-[12px] text-zinc-400 mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} min</span>
                  <span>·</span>
                  <span className="bg-zinc-100 px-2 py-0.5 rounded-full">{post.category}</span>
                </div>
                <h2 className="font-semibold text-zinc-900 mb-1">{post.title}</h2>
                <p className="text-[14px] text-zinc-500">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-100 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-[12px] text-zinc-400">© {new Date().getFullYear()} Experiencia Tai Chi</span>
        </div>
      </footer>
    </>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Heart, Award, Sparkles, TreePine, Wind, Mountain } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-semibold text-zinc-900">
            Experiencia Tai Chi
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {["La Historia", "El Camino", "Testimonio", "Práctica", "Contacto"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace("la ", "").replace("el ", "")}`}
                className="text-[13px] text-zinc-500 hover:text-zinc-900 transition-colors">
                {item}
              </Link>
            ))}
            <Link href="/contacto"
              className="text-[13px] font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors">
              Agendar
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-[12px] text-zinc-600 mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Tai Chi Chuan — Valdivia, Chile
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.05]">
            De la crisis<br />a la <span className="text-zinc-400">serenidad</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed">
            Le dijeron que podía quedar parapléjico. Hoy, gracias al Tai Chi, encontró un poder que no sabía que existía.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <Link href="/mundo-scroll"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-[14px] font-medium hover:bg-zinc-800 transition-colors">
              Explora la historia <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/testimonio"
              className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 px-6 py-3 rounded-full text-[14px] font-medium hover:bg-zinc-200 transition-colors">
              <Play className="w-4 h-4" /> Ver testimonio
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-xs mx-auto">
            {[{ v: "15+", l: "Años" }, { v: "100%", l: "Sin espasticidad" }, { v: "50%", l: "Menos medicamentos" }].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-xl font-semibold text-zinc-900">{s.v}</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Crisis */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease }}
            className="text-center mb-16">
            <span className="text-[11px] font-medium text-zinc-400 tracking-widest uppercase mb-3 block">El momento en que todo cambió</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">2008</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Las vértebras C3, C4 y C5 se aplastaron. <span className="text-zinc-900">Cirugía urgente o parálisis permanente.</span></p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Shield className="w-5 h-5" />, t: "Espasticidad", d: "Convulsiones con pulso de 180. Cada 20-30 minutos." },
              { icon: <Heart className="w-5 h-5" />, t: "Dolor crónico", d: "Pregabalina 900mg/día. Dosis máximas." },
              { icon: <Award className="w-5 h-5" />, t: "Sin esperanza", d: "No se puede operar. No se puede descomprimir." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4, ease }}>
                <div className="bg-white rounded-2xl border border-zinc-200 p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-600 mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-zinc-900 mb-1.5">{item.t}</h3>
                  <p className="text-[14px] text-zinc-500 leading-relaxed">{item.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metaphor */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease }}
            className="text-center mb-16">
            <span className="text-[11px] font-medium text-zinc-400 tracking-widest uppercase mb-3 block">La metáfora</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">El Emperador, el General<br />y los Soldados</h2>
            <p className="text-zinc-500 max-w-lg mx-auto">El Corazón gobierna, la Mente ejecuta, el Cuerpo obedece.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "👑", sub: "Corazón", t: "El Emperador", d: "Tiene la sabiduría. Cuando gobierna, todo fluye." },
              { icon: "⚔️", sub: "Mente", t: "El General", d: "Ejecuta órdenes, pero sin sabiduría solo hay resistencia." },
              { icon: "🛡️", sub: "Cuerpo", t: "Los Soldados", d: "Siguen las órdenes. Sin estrategia, el cuerpo colapsa." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4, ease }}>
                <div className="bg-white rounded-2xl border border-zinc-200 p-8 text-center h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-[10px] font-medium text-zinc-400 tracking-widest uppercase mb-2">{item.sub}</div>
                  <h3 className="font-semibold text-zinc-900 mb-2">{item.t}</h3>
                  <p className="text-[14px] text-zinc-500 leading-relaxed">{item.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease }}
            className="text-center mb-16">
            <span className="text-[11px] font-medium text-zinc-400 tracking-widest uppercase mb-3 block">La práctica</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">Lo que transforma</h2>
            <p className="text-zinc-500 max-w-lg mx-auto">Tai Chi y Chi Kung no son solo ejercicios. Son herramientas de transformación interna.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Mountain className="w-5 h-5" />, t: "Zhan Zhuang", d: "Postura fundamental. El arte de estar de pie.", tag: "Todos los niveles" },
              { icon: <TreePine className="w-5 h-5" />, t: "El Árbol", d: "Raíces firmes para decisiones firmes, ramas flexibles.", tag: "Todos los niveles" },
              { icon: <Wind className="w-5 h-5" />, t: "Chi Kung", d: "Trabajo con la energía vital. Respiración y movimiento.", tag: "Todos los niveles" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4, ease }}>
                <div className="bg-white rounded-2xl border border-zinc-200 p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-600 mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-zinc-900 mb-1.5">{item.t}</h3>
                  <p className="text-[14px] text-zinc-500 leading-relaxed mb-3">{item.d}</p>
                  <span className="text-[11px] text-zinc-400 bg-zinc-50 px-2 py-1 rounded-full">{item.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/practica" className="text-[13px] font-medium text-zinc-900 hover:text-zinc-600 transition-colors inline-flex items-center gap-1.5">
              Ver todas las prácticas <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease }}
            className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">Hoy puede volar</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { v: "100%", l: "Sin espasticidad" },
              { v: "50%", l: "Menos medicamentos" },
              { v: "15+", l: "Años de práctica" },
              { v: "∞", l: "Posibilidades" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4, ease }}>
                <div className="bg-white rounded-2xl border border-zinc-200 p-5 text-center">
                  <div className="text-2xl font-semibold text-zinc-900 mb-1">{s.v}</div>
                  <div className="text-[12px] text-zinc-500">{s.l}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.blockquote initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }}
            className="border-l-2 border-zinc-200 pl-6 py-2 mb-10">
            <p className="text-zinc-600 italic text-lg leading-relaxed">
              &ldquo;Ya no busco la tranquilidad ni la felicidad. Apareció algo desconocido: el poder ilimitado que entrega la serenidad.&rdquo;
            </p>
            <footer className="mt-3 text-[12px] text-zinc-400">— Mauricio Ochoa</footer>
          </motion.blockquote>

          <div className="text-center">
            <Link href="/contacto"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-[14px] font-medium hover:bg-zinc-800 transition-colors">
              Agenda tu sesión <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[13px] font-semibold text-zinc-900">Experiencia Tai Chi</span>
          <div className="flex items-center gap-6">
            {["Inicio", "La Historia", "El Camino", "Testimonio", "Práctica", "Contacto"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace("la ", "").replace("el ", "")}`}
                className="text-[12px] text-zinc-400 hover:text-zinc-600 transition-colors">
                {item}
              </Link>
            ))}
          </div>
          <span className="text-[11px] text-zinc-400">Valdivia, Chile</span>
        </div>
      </footer>
    </>
  );
}
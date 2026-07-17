"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Play, Shield, Heart, Sparkle, Tree, Wind } from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center justify-center pt-14">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05, ease }}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gray-50 text-[11px] font-medium text-gray-500 tracking-wide mb-10">
              <Sparkle size={14} weight="fill" className="text-gray-400" />
              Tai Chi Chuan — Valdivia, Chile
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-tight leading-[1.05] text-gray-900 mb-5">
            De la crisis<br />
            a la <span className="text-gray-300">serenidad</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2, ease }}
            className="text-[15px] text-gray-500 max-w-[520px] mx-auto leading-relaxed mb-8">
            Le dijeron que podía quedar parapléjico. Hoy, gracias al Tai Chi,
            encontró un poder que no sabía que existía.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <Link href="/mundo-scroll"
              className="inline-flex items-center gap-1.5 bg-gray-900 text-white px-5 py-2.5 rounded-md text-[13px] font-medium hover:bg-gray-800 transition-colors">
              Explorar historia <ArrowRight size={16} />
            </Link>
            <Link href="/testimonio"
              className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-900 px-5 py-2.5 rounded-md text-[13px] font-medium hover:bg-gray-100 transition-colors">
              <Play size={16} /> Ver testimonio
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 max-w-[280px] mx-auto">
            {[
              { v: "15+", l: "Años de práctica" },
              { v: "100%", l: "Sin espasticidad" },
              { v: "50%", l: "Menos medicación" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-lg font-semibold text-gray-900">{s.v}</div>
                <div className="text-[10px] text-gray-400 mt-0.5 leading-tight">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2008 - Crisis */}
      <section className="py-20 md:py-28 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-[640px] mb-12">
            <span className="text-[10px] font-mono text-gray-400 tracking-widest">2008</span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mt-2 mb-3">
              El momento en que todo cambió
            </h2>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              Las vértebras C3, C4 y C5 se aplastaron. Cirugía urgente o parálisis permanente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Shield, t: "Espasticidad", d: "Convulsiones con pulso de 180. Cada 20-30 minutos, 40 segundos de agonía." },
              { icon: Heart, t: "Dolor crónico", d: "Pregabalina 900mg/día. Dosis máximas que ningún médico podía superar." },
              { icon: Sparkle, t: "Sin esperanza", d: "No se puede operar, no se puede descomprimir, no se puede eliminar la espasticidad." },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors">
                <div className="w-9 h-9 rounded-md bg-gray-50 flex items-center justify-center text-gray-600 mb-4">
                  <item.icon size={18} />
                </div>
                <h3 className="text-[14px] font-semibold text-gray-900 mb-1.5">{item.t}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metaphor */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-[640px] mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3">
              El Emperador, el General y los Soldados
            </h2>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              El Corazón gobierna, la Mente ejecuta, el Cuerpo obedece.
              Cuando el General se apodera del trono, todo colapsa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "👑", sub: "Corazón", t: "El Emperador", d: "Tiene la sabiduría. Cuando gobierna, todo fluye en armonía." },
              { icon: "⚔️", sub: "Mente", t: "El General", d: "Ejecuta órdenes, pero sin sabiduría solo hay resistencia y agotamiento." },
              { icon: "🛡️", sub: "Cuerpo", t: "Los Soldados", d: "Siguen las órdenes. Sin estrategia del General, el cuerpo colapsa." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-gray-300 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="text-[9px] font-mono text-gray-400 tracking-widest uppercase mb-2">{item.sub}</div>
                <h3 className="text-[14px] font-semibold text-gray-900 mb-2">{item.t}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-[640px] mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3">
              La práctica
            </h2>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              Tai Chi y Chi Kung no son solo ejercicios. Son herramientas de transformación interna.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Tree, t: "Zhan Zhuang", sub: "El arte de estar de pie", d: "Postura fundamental. No es meditación, no es ejercicio. Es recordar cómo el cuerpo se sostiene.", tag: "Todos los niveles" },
              { icon: Wind, t: "El Árbol", sub: "Raíces firmes, ramas flexibles", d: "El ejercicio que transformó las decisiones de Mauricio. Firmes como el tronco, flexibles como las ramas.", tag: "Todos los niveles" },
              { icon: Sparkle, t: "Chi Kung", sub: "Trabajo con energía vital", d: "Ejercicios de respiración y movimiento que activan la circulación y oxigenan el cuerpo.", tag: "Todos los niveles" },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors">
                <div className="w-9 h-9 rounded-md bg-gray-50 flex items-center justify-center text-gray-600 mb-4">
                  <item.icon size={18} />
                </div>
                <div className="text-[10px] font-mono text-gray-400 mb-1">{item.sub}</div>
                <h3 className="text-[14px] font-semibold text-gray-900 mb-2">{item.t}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-3">{item.d}</p>
                <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded">{item.tag}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/practica" className="inline-flex items-center gap-1 text-[13px] font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Ver todas las prácticas <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-[640px] mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3">
              Hoy puede volar
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { v: "100%", l: "Sin espasticidad" },
              { v: "50%", l: "Menos medicamentos" },
              { v: "15+", l: "Años de práctica" },
              { v: "∞", l: "Posibilidades" },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 text-center hover:border-gray-300 transition-colors">
                <div className="text-xl font-semibold text-gray-900 mb-1">{s.v}</div>
                <div className="text-[12px] text-gray-500">{s.l}</div>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-gray-200 pl-5 max-w-[640px]">
            <p className="text-[15px] text-gray-600 italic leading-relaxed">
              &ldquo;Ya no busco la tranquilidad ni la felicidad. Apareció algo desconocido: el poder ilimitado que entrega la serenidad.&rdquo;
            </p>
            <footer className="mt-2 text-[11px] text-gray-400">— Mauricio Ochoa</footer>
          </blockquote>

          <div className="mt-10">
            <Link href="/contacto"
              className="inline-flex items-center gap-1.5 bg-gray-900 text-white px-5 py-2.5 rounded-md text-[13px] font-medium hover:bg-gray-800 transition-colors">
              Agenda tu sesión <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3">
            Tu transformación comienza hoy
          </h2>
          <p className="text-[14px] text-gray-500 mb-8">
            La historia de Mauricio es testimonio de lo que es posible. El primer paso es una conversación.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contacto" className="bg-gray-900 text-white px-5 py-2.5 rounded-md text-[13px] font-medium hover:bg-gray-800 transition-colors">
              Agendar sesión
            </Link>
            <Link href="/camino" className="bg-gray-50 text-gray-900 px-5 py-2.5 rounded-md text-[13px] font-medium hover:bg-gray-100 transition-colors">
              Conoce la historia
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
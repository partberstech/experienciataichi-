"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Shield, Heart, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center bg-white">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-[12px] font-medium text-gray-600 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Tai Chi Chuan — Valdivia, Chile
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.05] text-gray-900 mb-6"
          >
            De la crisis
            <br />
            a la <span className="text-blue-600">serenidad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Le dijeron que podía quedar parapléjico. Hoy, gracias al Tai Chi,
            encontró un poder que no sabía que existía.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button size="lg" asChild>
              <Link href="/mundo-scroll">
                Explora la historia
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/testimonio">
                <Play className="w-4 h-4" />
                Ver testimonio
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-sm mx-auto mt-16"
          >
            {[
              { value: "15+", label: "Años" },
              { value: "100%", label: "Sin espasticidad" },
              { value: "50%", label: "Menos medicamentos" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                <div className="text-[11px] text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[11px] font-semibold text-gray-400 tracking-widest uppercase mb-3 block">
              El momento en que todo cambió
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-gray-900 mb-4">
              2008
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Las vértebras C3, C4 y C5 se aplastaron.{" "}
              <span className="text-gray-900">Cirugía urgente o parálisis permanente.</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Shield className="w-5 h-5" />, title: "Espasticidad", desc: "Convulsiones con pulso de 180. Cada 20-30 minutos." },
              { icon: <Heart className="w-5 h-5" />, title: "Dolor crónico", desc: "Pregabalina 900mg/día. Dosis máximas." },
              { icon: <Award className="w-5 h-5" />, title: "Sin esperanza", desc: "No se puede operar. No se puede descomprimir." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{item.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metaphor */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[11px] font-semibold text-gray-400 tracking-widest uppercase mb-3 block">
              La metáfora
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-gray-900 mb-4">
              El Emperador, el General
              <br />y los Soldados
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              El Corazón gobierna, la Mente ejecuta, el Cuerpo obedece.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "👑", sub: "Corazón", title: "El Emperador", desc: "Tiene la sabiduría. Cuando gobierna, todo fluye." },
              { icon: "⚔️", sub: "Mente", title: "El General", desc: "Ejecuta órdenes, pero sin sabiduría solo hay resistencia." },
              { icon: "🛡️", sub: "Cuerpo", title: "Los Soldados", desc: "Siguen las órdenes. Sin estrategia, el cuerpo colapsa." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}>
                <Card variant="elevated" className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <div className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase mb-2">{item.sub}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-gray-900">
              Hoy puede volar
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "100%", label: "Sin espasticidad" },
              { value: "50%", label: "Menos medicamentos" },
              { value: "15+", label: "Años de práctica" },
              { value: "∞", label: "Posibilidades" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}>
                <Card className="text-center">
                  <CardContent className="p-5">
                    <div className="text-2xl font-semibold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-[12px] text-gray-500">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.blockquote {...fadeUp} className="mt-12 p-6 border-l-2 border-gray-200 bg-white rounded-r-xl">
            <p className="text-gray-600 italic leading-relaxed">
              &ldquo;Ya no busco la tranquilidad ni la felicidad. Apareció algo desconocido: el poder ilimitado que entrega la serenidad.&rdquo;
            </p>
            <footer className="mt-3 text-[12px] text-gray-400">— Mauricio Ochoa</footer>
          </motion.blockquote>

          <motion.div {...fadeUp} className="text-center mt-10">
            <Button size="lg" asChild>
              <Link href="/contacto">Agenda tu sesión</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-gray-900 mb-4">
            Tu transformación comienza hoy
          </h2>
          <p className="text-gray-500 mb-8">
            La historia de Mauricio es testimonio de lo que es posible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" asChild><Link href="/contacto">Agendar sesión</Link></Button>
            <Button variant="secondary" size="lg" asChild><Link href="/camino">Conoce la historia</Link></Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
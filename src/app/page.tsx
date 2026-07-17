"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Shield, Heart, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#5e6ad2]/5 rounded-full blur-[120px]" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-[13px] text-[#a6a6a6] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#5e6ad2]" />
            <span>Tai Chi Chuan Estilo Yang — Valdivia, Chile</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.04em] leading-[0.95] mb-8"
          >
            <span className="text-[#f7f8f8]">De la crisis</span>
            <br />
            <span className="text-[#f7f8f8]">a la </span>
            <span className="text-[#5e6ad2]">serenidad</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-[#a6a6a6] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Le dijeron que podía quedar parapléjico. Hoy, gracias al Tai Chi,
            encontró un poder que no sabía que existía.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-16"
          >
            {[
              { value: "15+", label: "Años" },
              { value: "100%", label: "Sin espasticidad" },
              { value: "50%", label: "Menos medicamentos" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-medium text-[#f7f8f8] tracking-[-0.02em]">
                  {stat.value}
                </div>
                <div className="text-[12px] text-[#62666d] mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* The Problem */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <span className="text-[12px] font-medium text-[#5e6ad2] tracking-wider uppercase mb-4 block">
              El momento en que todo cambió
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.03em] text-[#f7f8f8] mb-6">
              2008
            </h2>
            <p className="text-lg text-[#a6a6a6] max-w-2xl mx-auto leading-relaxed">
              Las vértebras C3, C4 y C5 se aplastaron. Los médicos dijeron:
              <span className="text-[#f7f8f8]"> cirugía urgente o parálisis permanente.</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Espasticidad severa",
                desc: "Convulsiones con pulso de 180 latidos. 40 segundos de agonía, cada 20-30 minutos.",
              },
              {
                icon: <Heart className="w-5 h-5" />,
                title: "Dolor crónico",
                desc: "Pregabalina 900mg/día. Dosis máximas que ningún médico podía superar.",
              },
              {
                icon: <Award className="w-5 h-5" />,
                title: "Sin esperanza",
                desc: "Los especialistas dictaminaron: no se puede operar, no se puede descomprimir.",
              },
            ].map((item, i) => (
              <motion.div key={i} {...stagger} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-[#5e6ad2]/10 flex items-center justify-center text-[#5e6ad2] mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-[15px] font-medium text-[#f7f8f8] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-[#a6a6a6] leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metaphor */}
      <section className="py-32 px-6 bg-[#090909]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <span className="text-[12px] font-medium text-[#5e6ad2] tracking-wider uppercase mb-4 block">
              La metáfora
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.03em] text-[#f7f8f8] mb-6">
              El Emperador, el General
              <br />
              y los Soldados
            </h2>
            <p className="text-lg text-[#a6a6a6] max-w-xl mx-auto leading-relaxed">
              El Corazón gobierna, la Mente ejecuta, el Cuerpo obedece.
              Cuando el General se apodera del trono, todo colapsa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "👑",
                title: "El Emperador",
                subtitle: "Corazón",
                desc: "Tiene la sabiduría. Cuando gobierna, todo fluye en armonía.",
                color: "#5e6ad2",
              },
              {
                icon: "⚔️",
                title: "El General",
                subtitle: "Mente",
                desc: "Ejecuta órdenes, pero sin sabiduría solo hay resistencia.",
                color: "#a6a6a6",
              },
              {
                icon: "🛡️",
                title: "Los Soldados",
                subtitle: "Cuerpo",
                desc: "Siguen las órdenes. Si el General los manda sin estrategia, el cuerpo colapsa.",
                color: "#62666d",
              },
            ].map((item, i) => (
              <motion.div key={i} {...stagger} transition={{ delay: i * 0.15, duration: 0.5 }}>
                <Card variant="elevated" className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <div
                      className="text-[11px] font-medium tracking-wider uppercase mb-2"
                      style={{ color: item.color }}
                    >
                      {item.subtitle}
                    </div>
                    <h3 className="text-lg font-medium text-[#f7f8f8] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-[#a6a6a6] leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[12px] font-medium text-[#5e6ad2] tracking-wider uppercase mb-4 block">
              Los resultados
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.03em] text-[#f7f8f8]">
              Hoy puede volar
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100%", label: "Sin espasticidad" },
              { value: "50%", label: "Menos medicamentos" },
              { value: "15+", label: "Años de práctica" },
              { value: "∞", label: "Posibilidades" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card variant="glow" className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-medium text-[#5e6ad2] tracking-[-0.02em] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[13px] text-[#a6a6a6]">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            {...fadeUp}
            className="mt-20 p-8 border-l-2 border-[#5e6ad2]/30 bg-white/[0.02] rounded-r-xl"
          >
            <p className="text-xl text-[#a6a6a6] italic leading-relaxed">
              &ldquo;Ya no busco la tranquilidad ni la felicidad. Apareció algo
              desconocido: el poder ilimitado que entrega la serenidad.&rdquo;
            </p>
            <footer className="mt-4 text-[13px] text-[#62666d]">
              — Mauricio Ochoa
            </footer>
          </motion.blockquote>

          {/* CTA */}
          <motion.div {...fadeUp} className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/contacto">
                Agenda tu sesión
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-[#090909]">
        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.03em] text-[#f7f8f8] mb-6">
            Tu transformación comienza hoy
          </h2>
          <p className="text-lg text-[#a6a6a6] mb-8 leading-relaxed">
            La historia de Mauricio es testimonio de lo que es posible.
            El primer paso es una conversación.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contacto">Agendar sesión</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/camino">Conoce la historia</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
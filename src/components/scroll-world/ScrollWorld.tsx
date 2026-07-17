"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface Scene {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  quote?: string;
  quoteAuthor?: string;
  accent: string;
  icon: string;
  tags?: string[];
}

const scenes: Scene[] = [
  {
    id: "crisis",
    eyebrow: "2008",
    title: "La Crisis",
    body: "Desperté con un dedo dormido. En semanas, las vértebras C3, C4 y C5 se aplastaron. Los médicos dijeron: cirugía urgente o parálisis permanente.",
    quote: "De un día para otro quedé inválido con la mitad del cuerpo.",
    quoteAuthor: "Mauricio Ochoa",
    accent: "#ef4444",
    icon: "⚡",
    tags: ["Mielopatía Cervical", "Vértebras C3-C4-C5", "8h de cirugía"],
  },
  {
    id: "awakening",
    eyebrow: "2009",
    title: "El Despertar",
    body: "Desperté de la operación y agradecí. No sabía a quién agradecer. Los médicos dijeron: las células murieron. Pero yo estaba vivo.",
    quote: "Tenía certeza que me iba a recuperar. Era lo que salía de adentro.",
    quoteAuthor: "Mauricio Ochoa",
    accent: "#3b82f6",
    icon: "🌅",
    tags: ["Muerte simbólica", "Supervivencia", "Segunda oportunidad"],
  },
  {
    id: "armor",
    eyebrow: "El primer paso",
    title: "Sacar las Armaduras",
    body: "Daniel me dijo: 'No te sirven las armaduras, tienes que sacarte todas.' Muletas, órtesis, cintas... todo afuera.",
    quote: "Más vale el salto que mata, que el ruego de hombres buenos.",
    quoteAuthor: "Don Quijote",
    accent: "#8b5cf6",
    icon: "🔓",
    tags: ["Armaduras", "Zona de confort", "Vulnerabilidad"],
  },
  {
    id: "practice",
    eyebrow: "2010-2022",
    title: "La Práctica Diaria",
    body: "Práctica diaria de Tai Chi y Chi Kung. El árbol me enseñó: raíces firmes, ramas flexibles.",
    quote: "Estoy tomando mejores decisiones, pero muy suave y muy flexible.",
    quoteAuthor: "Mauricio Ochoa",
    accent: "#10b981",
    icon: "🌳",
    tags: ["Zhan Zhuang", "El Árbol", "Chi Kung"],
  },
  {
    id: "serenity",
    eyebrow: "Hoy",
    title: "La Serenidad",
    body: "La espasticidad se eliminó. Los medicamentos se redujeron a la mitad. Ya no busco la tranquilidad ni la felicidad.",
    quote: "Antes podía correr, hoy día puedo volar.",
    quoteAuthor: "Mauricio Ochoa",
    accent: "#f59e0b",
    icon: "✨",
    tags: ["100% eliminada", "50% menos medicamentos", "Instructor"],
  },
];

function SceneSection({ scene, index }: { scene: Scene; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.97, 1, 1, 0.97]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 0.08, 0.08, 0]) }}
        className="absolute inset-0"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: scene.accent }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, y: springY, scale: springScale }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        {/* Scene number */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-8 bg-white/10" />
          <span className="text-[11px] font-mono text-[#62666d] tracking-widest uppercase">
            {String(index + 1).padStart(2, "0")} / {String(scenes.length).padStart(2, "0")}
          </span>
          <div className="h-px w-8 bg-white/10" />
        </div>

        {/* Icon */}
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0.15, 0.3, 0.7, 0.85], [0.8, 1, 1, 0.8]),
            opacity: useTransform(scrollYProgress, [0.15, 0.25, 0.75, 0.85], [0, 1, 1, 0]),
          }}
          className="text-6xl md:text-7xl mb-8"
        >
          {scene.icon}
        </motion.div>

        {/* Eyebrow */}
        <motion.span
          style={{ opacity, backgroundColor: `${scene.accent}15`, color: scene.accent, border: `1px solid ${scene.accent}25` }}
          className="inline-block px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase mb-6"
        >
          {scene.eyebrow}
        </motion.span>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] text-[#f7f8f8] mb-6 leading-[0.95]">
          {scene.title}
        </h2>

        {/* Body */}
        <p className="text-lg text-[#a6a6a6] max-w-xl mx-auto mb-8 leading-relaxed">
          {scene.body}
        </p>

        {/* Tags */}
        {scene.tags && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {scene.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-[12px] rounded-full bg-white/[0.03] text-[#62666d] border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Quote */}
        {scene.quote && (
          <motion.blockquote
            style={{
              opacity: useTransform(scrollYProgress, [0.35, 0.45, 0.6, 0.7], [0, 1, 1, 0]),
            }}
            className="max-w-lg mx-auto p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]"
          >
            <p className="text-[#a6a6a6] italic leading-relaxed">
              &ldquo;{scene.quote}&rdquo;
            </p>
            {scene.quoteAuthor && (
              <footer className="mt-3 text-[12px] text-[#62666d]">
                — {scene.quoteAuthor}
              </footer>
            )}
          </motion.blockquote>
        )}
      </motion.div>

      {/* Scroll indicator */}
      {index < scenes.length - 1 && (
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.7, 0.9], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export function ScrollWorld() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const progressWidth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div ref={containerRef} className="relative bg-black">
      {/* Progress bar */}
      <motion.div
        style={{ scaleX: progressWidth }}
        className="fixed top-0 left-0 right-0 h-px bg-[#5e6ad2] origin-left z-50"
      />

      {/* Route rail */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {scenes.map((scene, i) => (
          <motion.div
            key={scene.id}
            className="w-1.5 h-1.5 rounded-full transition-colors"
            style={{
              backgroundColor: useTransform(
                scrollYProgress,
                [i / scenes.length, (i + 0.5) / scenes.length, (i + 1) / scenes.length],
                ["rgba(255,255,255,0.15)", scene.accent, "rgba(255,255,255,0.15)"]
              ),
            }}
          />
        ))}
      </div>

      {/* Scenes */}
      {scenes.map((scene, i) => (
        <SceneSection key={scene.id} scene={scene} index={i} />
      ))}

      {/* Final CTA */}
      <div className="relative min-h-screen flex items-center justify-center bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.03em] text-[#f7f8f8] mb-6">
            Tu transformación comienza hoy
          </h2>
          <p className="text-lg text-[#a6a6a6] max-w-xl mx-auto mb-8 leading-relaxed">
            La historia de Mauricio es testimonio de lo que es posible.
            El primer paso es una conversación.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contacto">Agenda tu sesión</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/camino">Conoce la historia</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
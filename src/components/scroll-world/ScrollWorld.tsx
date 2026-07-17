"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface Scene {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  quote?: string;
  quoteAuthor?: string;
  accent: string;
  gradient: string;
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
    accent: "#dc2626",
    gradient: "from-red-950 via-neutral-950 to-neutral-900",
    icon: "⚡",
    tags: ["Mielopatía Cervical", "Vértebras C3-C4-C5", "8h de cirugía"],
  },
  {
    id: "awakening",
    eyebrow: "2009",
    title: "El Despertar",
    body: "Desperté de la operación y agradecí. No sabía a quién agradecer. Los médicos dijeron: las células murieron, no se pueden recuperar. Pero yo estaba vivo.",
    quote: "Tenía certeza que me iba a recuperar. Era lo que salía de adentro.",
    quoteAuthor: "Mauricio Ochoa",
    accent: "#2563eb",
    gradient: "from-blue-950 via-neutral-950 to-neutral-900",
    icon: "🌅",
    tags: ["Muerte simbólica", "Supervivencia", "Segunda oportunidad"],
  },
  {
    id: "armor",
    eyebrow: "El primer paso",
    title: "Sacar las Armaduras",
    body: "Daniel me dijo: 'Mauricio, no te sirven las armaduras, tienes que sacarte todas las armaduras.' Muletas, órtesis, cintas... todo afuera.",
    quote: "Más vale el salto que mata, que el ruego de hombres buenos.",
    quoteAuthor: "Don Quijote de la Mancha",
    accent: "#7c3aed",
    gradient: "from-violet-950 via-neutral-950 to-neutral-900",
    icon: "🔓",
    tags: ["Armaduras", "Zona de confort", "Vulnerabilidad"],
  },
  {
    id: "practice",
    eyebrow: "2010-2022",
    title: "La Práctica Diaria",
    body: "Práctica diaria de Tai Chi y Chi Kung. El árbol me enseñó: raíces firmes para decisiones firmes, ramas flexibles para no quebrarme.",
    quote: "Estoy tomando mejores decisiones, pero muy suave y muy flexible.",
    quoteAuthor: "Mauricio Ochoa",
    accent: "#059669",
    gradient: "from-emerald-950 via-neutral-950 to-neutral-900",
    icon: "🌳",
    tags: ["Zhan Zhuang", "El Árbol", "Chi Kung"],
  },
  {
    id: "serenity",
    eyebrow: "Hoy",
    title: "La Serenidad",
    body: "La espasticidad se eliminó. Los medicamentos se redujeron a la mitad. Mi sistema nervioso se alineó. Ya no busco la tranquilidad ni la felicidad.",
    quote: "Antes podía correr, hoy día puedo volar. Entre volar y correr, prefiero volar.",
    quoteAuthor: "Mauricio Ochoa",
    accent: "#d97706",
    gradient: "from-amber-950 via-neutral-950 to-neutral-900",
    icon: "✨",
    tags: ["100% espasticidad eliminada", "50% menos medicamentos", "Instructor certificado"],
  },
];

function SceneSection({ scene, index }: { scene: Scene; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const iconScale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1.2, 1.2, 0]);
  const iconRotate = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [-180, 0, 0, 180]);
  const quoteOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <div
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-b ${scene.gradient} overflow-hidden`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.1]) }}
          className="absolute inset-0"
        >
          <div
            className="absolute w-[800px] h-[800px] rounded-full blur-[200px] opacity-20"
            style={{
              background: scene.accent,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y: springY, scale: springScale }}
        className="relative z-10 container mx-auto px-4 max-w-4xl text-center"
      >
        {/* Scene number */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-white/20" />
          <span className="text-xs font-mono text-white/40 tracking-widest uppercase">
            Escena {String(index + 1).padStart(2, "0")} / {String(scenes.length).padStart(2, "0")}
          </span>
          <div className="h-px w-12 bg-white/20" />
        </div>

        {/* Icon */}
        <motion.div
          style={{ scale: iconScale, rotate: iconRotate }}
          className="text-7xl md:text-8xl mb-8"
        >
          {scene.icon}
        </motion.div>

        {/* Eyebrow */}
        <motion.span
          style={{ opacity, backgroundColor: `${scene.accent}20`, color: scene.accent, border: `1px solid ${scene.accent}40` }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-6"
        >
          {scene.eyebrow}
        </motion.span>

        {/* Title */}
        <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          {scene.title}
        </h2>

        {/* Body */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          {scene.body}
        </p>

        {/* Tags */}
        {scene.tags && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {scene.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/60 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Quote */}
        {scene.quote && (
          <motion.blockquote
            style={{ opacity: quoteOpacity }}
            className="max-w-xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <p className="text-white/90 italic text-lg leading-relaxed">
              &ldquo;{scene.quote}&rdquo;
            </p>
            {scene.quoteAuthor && (
              <footer className="mt-3 text-sm text-white/50">
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
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-white/50" />
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
    <div ref={containerRef} className="relative">
      {/* Progress bar */}
      <motion.div
        style={{ scaleX: progressWidth }}
        className="fixed top-0 left-0 right-0 h-1 bg-brand-600 origin-left z-50"
      />

      {/* Route rail */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {scenes.map((scene, i) => (
          <motion.div
            key={scene.id}
            className="w-2 h-2 rounded-full bg-white/30 transition-colors"
            style={{
              backgroundColor: useTransform(
                scrollYProgress,
                [i / scenes.length, (i + 0.5) / scenes.length, (i + 1) / scenes.length],
                ["rgba(255,255,255,0.3)", scene.accent, "rgba(255,255,255,0.3)"]
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
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-950 to-neutral-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center container mx-auto px-4"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
            Tu transformación comienza hoy
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-8">
            La historia de Mauricio es testimonio de lo que es posible.
            El primer paso es una conversación.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contacto"
              className="px-8 py-4 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-700 transition-colors"
            >
              Agenda tu sesión
            </a>
            <a
              href="/camino"
              className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
            >
              Conoce la historia
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
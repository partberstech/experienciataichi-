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
    id: "crisis", eyebrow: "2008", title: "La Crisis",
    body: "Desperté con un dedo dormido. Las vértebras C3, C4 y C5 se aplastaron.",
    quote: "De un día para otro quedé inválido con la mitad del cuerpo.",
    quoteAuthor: "Mauricio", accent: "#ef4444", icon: "⚡",
    tags: ["Mielopatía Cervical", "Vértebras C3-C4-C5", "8h de cirugía"],
  },
  {
    id: "awakening", eyebrow: "2009", title: "El Despertar",
    body: "Desperté de la operación y agradecí. Los médicos dijeron: las células murieron.",
    quote: "Tenía certeza que me iba a recuperar.",
    quoteAuthor: "Mauricio", accent: "#3b82f6", icon: "🌅",
    tags: ["Muerte simbólica", "Supervivencia"],
  },
  {
    id: "armor", eyebrow: "El primer paso", title: "Sacar las Armaduras",
    body: "Daniel me dijo: 'No te sirven las armaduras.' Muletas, órtesis, cintas... todo afuera.",
    quote: "Más vale el salto que mata, que el ruego de hombres buenos.",
    quoteAuthor: "Don Quijote", accent: "#8b5cf6", icon: "🔓",
    tags: ["Armaduras", "Zona de confort"],
  },
  {
    id: "practice", eyebrow: "2010-2022", title: "La Práctica Diaria",
    body: "Tai Chi y Chi Kung. El árbol: raíces firmes, ramas flexibles.",
    quote: "Estoy tomando mejores decisiones, pero muy suave y flexible.",
    quoteAuthor: "Mauricio", accent: "#10b981", icon: "🌳",
    tags: ["Zhan Zhuang", "El Árbol", "Chi Kung"],
  },
  {
    id: "serenity", eyebrow: "Hoy", title: "La Serenidad",
    body: "La espasticidad se eliminó. Los medicamentos se redujeron a la mitad.",
    quote: "Antes podía correr, hoy día puedo volar.",
    quoteAuthor: "Mauricio", accent: "#f59e0b", icon: "✨",
    tags: ["100% eliminada", "50% menos medicamentos"],
  },
];

function SceneSection({ scene, index }: { scene: Scene; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -40]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 0.03, 0.03, 0]) }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px]"
          // @ts-ignore
          style={{ background: scene.accent }}
        />
      </div>

      <motion.div style={{ opacity, y: springY }} className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-6 bg-gray-200" />
          <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">
            {String(index + 1).padStart(2, "0")} / {String(scenes.length).padStart(2, "0")}
          </span>
          <div className="h-px w-6 bg-gray-200" />
        </div>

        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.15, 0.3, 0.7, 0.85], [0, 1, 1, 0]) }}
          className="text-5xl md:text-6xl mb-6"
        >
          {scene.icon}
        </motion.div>

        <motion.span
          style={{ opacity }}
          className="inline-block px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase mb-5"
          // @ts-ignore
          style={{ opacity, backgroundColor: `${scene.accent}10`, color: scene.accent, border: `1px solid ${scene.accent}20` }}
        >
          {scene.eyebrow}
        </motion.span>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-gray-900 mb-5 leading-tight">
          {scene.title}
        </h2>

        <p className="text-gray-500 max-w-lg mx-auto mb-6 leading-relaxed">
          {scene.body}
        </p>

        {scene.tags && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {scene.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 text-[11px] rounded-full bg-gray-100 text-gray-500">
                {tag}
              </span>
            ))}
          </div>
        )}

        {scene.quote && (
          <motion.blockquote
            style={{ opacity: useTransform(scrollYProgress, [0.35, 0.45, 0.6, 0.7], [0, 1, 1, 0]) }}
            className="max-w-md mx-auto p-5 rounded-xl bg-gray-50 border border-gray-100"
          >
            <p className="text-gray-600 italic text-sm leading-relaxed">&ldquo;{scene.quote}&rdquo;</p>
            <footer className="mt-2 text-[11px] text-gray-400">— {scene.quoteAuthor}</footer>
          </motion.blockquote>
        )}
      </motion.div>

      {index < scenes.length - 1 && (
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.7, 0.9], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-gray-300 flex justify-center pt-2">
            <div className="w-1 h-1.5 rounded-full bg-gray-400" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export function ScrollWorld() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative bg-white">
      <motion.div style={{ scaleX: progressWidth }} className="fixed top-0 left-0 right-0 h-0.5 bg-gray-900 origin-left z-50" />

      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {scenes.map((scene, i) => (
          <motion.div key={scene.id} className="w-1.5 h-1.5 rounded-full"
            // @ts-ignore
            style={{ backgroundColor: useTransform(scrollYProgress, [i / scenes.length, (i + 0.5) / scenes.length, (i + 1) / scenes.length], ["#d1d5db", scene.accent, "#d1d5db"]) }}
          />
        ))}
      </div>

      {scenes.map((scene, i) => (
        <SceneSection key={scene.id} scene={scene} index={i} />
      ))}

      <div className="min-h-screen flex items-center justify-center bg-white">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-gray-900 mb-4">
            Tu transformación comienza hoy
          </h2>
          <p className="text-gray-500 mb-8">
            La historia de Mauricio es testimonio de lo que es posible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" asChild><Link href="/contacto">Agenda tu sesión</Link></Button>
            <Button variant="secondary" size="lg" asChild><Link href="/camino">Conoce la historia</Link></Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
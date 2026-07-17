"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface Scene {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  quote?: string;
  author?: string;
  accent: string;
  icon: string;
  tags?: string[];
}

const scenes: Scene[] = [
  { id: "crisis", eyebrow: "2008", title: "La Crisis", body: "Las vértebras C3, C4 y C5 se aplastaron. Cirugía urgente o parálisis permanente.", quote: "De un día para otro quedé inválido con la mitad del cuerpo.", author: "Mauricio", accent: "#ef4444", icon: "⚡", tags: ["Mielopatía Cervical", "8h de cirugía"] },
  { id: "awakening", eyebrow: "2009", title: "El Despertar", body: "Desperté de la operación y agradecí. Los médicos dijeron: las células murieron.", quote: "Tenía certeza que me iba a recuperar.", author: "Mauricio", accent: "#3b82f6", icon: "🌅", tags: ["Muerte simbólica", "Supervivencia"] },
  { id: "armor", eyebrow: "Paso 1", title: "Sacar las Armaduras", body: "Daniel me dijo: 'No te sirven las armaduras.' Todo afuera.", quote: "Más vale el salto que mata.", author: "Don Quijote", accent: "#8b5cf6", icon: "🔓", tags: ["Armaduras", "Vulnerabilidad"] },
  { id: "practice", eyebrow: "2010-2022", title: "La Práctica", body: "Tai Chi y Chi Kung diario. El árbol: raíces firmes, ramas flexibles.", quote: "Decisiones mejores, muy suave y flexible.", author: "Mauricio", accent: "#10b981", icon: "🌳", tags: ["Zhan Zhuang", "Chi Kung"] },
  { id: "serenity", eyebrow: "Hoy", title: "La Serenidad", body: "Espasticidad eliminada. Medicamentos reducidos a la mitad.", quote: "Antes podía correr, hoy puedo volar.", author: "Mauricio", accent: "#f59e0b", icon: "✨", tags: ["100% eliminada", "Instructor"] },
];

function SceneSection({ scene, index }: { scene: Scene; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -40]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center relative">
      <motion.div style={{ opacity, y: springY }} className="max-w-2xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-6 bg-zinc-200" />
          <span className="text-[10px] font-mono text-zinc-400 tracking-widest">
            {String(index + 1).padStart(2, "0")} / {String(scenes.length).padStart(2, "0")}
          </span>
          <div className="h-px w-6 bg-zinc-200" />
        </div>

        <motion.div style={{ opacity: useTransform(scrollYProgress, [0.15, 0.3, 0.7, 0.85], [0, 1, 1, 0]) }}
          className="text-5xl md:text-6xl mb-6">{scene.icon}</motion.div>

        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase mb-5"
          style={{ backgroundColor: `${scene.accent}10`, color: scene.accent, border: `1px solid ${scene.accent}20` }}>
          {scene.eyebrow}
        </span>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-5 leading-tight">{scene.title}</h2>
        <p className="text-zinc-500 max-w-lg mx-auto mb-6 leading-relaxed">{scene.body}</p>

        {scene.tags && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {scene.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 text-[11px] rounded-full bg-zinc-100 text-zinc-500">{tag}</span>
            ))}
          </div>
        )}

        {scene.quote && (
          <motion.blockquote style={{ opacity: useTransform(scrollYProgress, [0.35, 0.45, 0.6, 0.7], [0, 1, 1, 0]) }}
            className="max-w-md mx-auto p-5 rounded-xl bg-zinc-50 border border-zinc-100">
            <p className="text-zinc-600 italic text-sm leading-relaxed">&ldquo;{scene.quote}&rdquo;</p>
            <footer className="mt-2 text-[11px] text-zinc-400">— {scene.author}</footer>
          </motion.blockquote>
        )}
      </motion.div>

      {index < scenes.length - 1 && (
        <motion.div style={{ opacity: useTransform(scrollYProgress, [0.7, 0.9], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-zinc-300 flex justify-center pt-2">
            <div className="w-1 h-1.5 rounded-full bg-zinc-400" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default function ScrollWorldPage() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-semibold text-zinc-900">Experiencia Tai Chi</Link>
          <Link href="/contacto" className="text-[13px] font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors">Agendar</Link>
        </div>
      </nav>

      {/* Progress */}
      <motion.div style={{ scaleX: progressWidth }} className="fixed top-16 left-0 right-0 h-0.5 bg-zinc-900 origin-left z-50" />

      {/* Dots */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {scenes.map((scene, i) => (
          <motion.div key={scene.id} className="w-1.5 h-1.5 rounded-full"
            // @ts-ignore
            style={{ backgroundColor: useTransform(scrollYProgress, [i / scenes.length, (i + 0.5) / scenes.length, (i + 1) / scenes.length], ["#d4d4d8", scene.accent, "#d4d4d8"]) }} />
        ))}
      </div>

      <div className="pt-16">
        {scenes.map((scene, i) => <SceneSection key={scene.id} scene={scene} index={i} />)}

        {/* CTA */}
        <div className="min-h-screen flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-center max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Tu transformación comienza hoy</h2>
            <p className="text-zinc-500 mb-8">La historia de Mauricio es testimonio de lo que es posible.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contacto" className="bg-zinc-900 text-white px-6 py-3 rounded-full text-[14px] font-medium hover:bg-zinc-800 transition-colors">Agenda tu sesión</Link>
              <Link href="/camino" className="bg-zinc-100 text-zinc-900 px-6 py-3 rounded-full text-[14px] font-medium hover:bg-zinc-200 transition-colors">Conoce la historia</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
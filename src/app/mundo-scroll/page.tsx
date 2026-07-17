"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface Scene {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  quote?: string;
  author?: string;
  icon: string;
  tags?: string[];
}

const scenes: Scene[] = [
  { id: "crisis", eyebrow: "2008", title: "La Crisis", body: "Las vértebras C3, C4 y C5 se aplastaron. Cirugía urgente o parálisis permanente.", quote: "De un día para otro quedé inválido con la mitad del cuerpo.", author: "Mauricio", icon: "⚡", tags: ["Mielopatía Cervical", "8h de cirugía"] },
  { id: "awakening", eyebrow: "2009", title: "El Despertar", body: "Desperté de la operación y agradecí. Los médicos dijeron: las células murieron.", quote: "Tenía certeza que me iba a recuperar.", author: "Mauricio", icon: "🌅", tags: ["Muerte simbólica", "Supervivencia"] },
  { id: "armor", eyebrow: "Paso 1", title: "Sacar las Armaduras", body: "Daniel me dijo: 'No te sirven las armaduras.' Todo afuera.", quote: "Más vale el salto que mata.", author: "Don Quijote", icon: "🔓", tags: ["Armaduras", "Vulnerabilidad"] },
  { id: "practice", eyebrow: "2010-2022", title: "La Práctica", body: "Tai Chi y Chi Kung diario. El árbol: raíces firmes, ramas flexibles.", quote: "Decisiones mejores, muy suave y flexible.", author: "Mauricio", icon: "🌳", tags: ["Zhan Zhuang", "Chi Kung"] },
  { id: "serenity", eyebrow: "Hoy", title: "La Serenidad", body: "Espasticidad eliminada. Medicamentos reducidos a la mitad.", quote: "Antes podía correr, hoy puedo volar.", author: "Mauricio", icon: "✨", tags: ["100% eliminada", "Instructor"] },
];

function SceneSection({ scene, index }: { scene: Scene; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [30, 0, 0, -30]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="min-h-[100dvh] flex items-center justify-center">
      <motion.div style={{ opacity, y: springY }} className="max-w-[600px] mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-5 bg-gray-200" />
          <span className="text-[9px] font-mono text-gray-400 tracking-widest">
            {String(index + 1).padStart(2, "0")}/{String(scenes.length).padStart(2, "0")}
          </span>
          <div className="h-px w-5 bg-gray-200" />
        </div>

        <motion.div style={{ scale: useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.8, 1, 1, 0.8]), opacity: useTransform(scrollYProgress, [0.1, 0.25, 0.75, 0.9], [0, 1, 1, 0]) }}
          className="text-4xl mb-5">{scene.icon}</motion.div>

        <motion.span style={{ opacity }} className="inline-block px-2.5 py-1 rounded text-[10px] font-mono text-gray-400 bg-gray-50 border border-gray-100 tracking-wide mb-5">
          {scene.eyebrow}
        </motion.span>

        <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight text-gray-900 mb-4 leading-tight">{scene.title}</h2>
        <p className="text-[14px] text-gray-500 max-w-[480px] mx-auto mb-5 leading-relaxed">{scene.body}</p>

        {scene.tags && (
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {scene.tags.map((tag, i) => (
              <span key={i} className="text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
        )}

        {scene.quote && (
          <motion.blockquote style={{ opacity: useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]) }}
            className="max-w-[460px] mx-auto p-4 border border-gray-100 rounded-lg bg-gray-50">
            <p className="text-gray-600 italic text-[13px] leading-relaxed">&ldquo;{scene.quote}&rdquo;</p>
            <footer className="mt-1.5 text-[10px] text-gray-400">— {scene.author}</footer>
          </motion.blockquote>
        )}
      </motion.div>

      {index < scenes.length - 1 && (
        <motion.div style={{ opacity: useTransform(scrollYProgress, [0.7, 0.9], [1, 0]) }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[18px] h-[28px] rounded-full border border-gray-300 flex justify-center pt-1.5">
            <div className="w-[3px] h-[5px] rounded-full bg-gray-400" />
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
      <motion.div style={{ scaleX: progressWidth }} className="fixed top-14 left-0 right-0 h-[2px] bg-gray-900 origin-left z-50" />

      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2.5">
        {scenes.map((scene, i) => (
          <motion.div key={scene.id} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        ))}
      </div>

      <div className="pt-14">
        {scenes.map((scene, i) => <SceneSection key={scene.id} scene={scene} index={i} />)}

        <div className="min-h-[100dvh] flex items-center justify-center border-t border-gray-100">
          <div className="max-w-[640px] mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3">Tu transformación comienza hoy</h2>
            <p className="text-[14px] text-gray-500 mb-8">La historia de Mauricio es testimonio de lo que es posible.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contacto" className="bg-gray-900 text-white px-5 py-2.5 rounded-md text-[13px] font-medium hover:bg-gray-800 transition-colors">Agenda tu sesión</Link>
              <Link href="/camino" className="bg-gray-50 text-gray-900 px-5 py-2.5 rounded-md text-[13px] font-medium hover:bg-gray-100 transition-colors">Conoce la historia</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
"use client";

import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";

export default function ContactoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    await new Promise(r => setTimeout(r, 1500));
    setStatus("done");
  };

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
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">Contacto</h1>
          <p className="text-zinc-500 mb-12">Agenda tu sesión o escríbeme para cualquier consulta.</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[13px] font-medium text-zinc-700 mb-1.5">Nombre</label>
                <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-[14px] text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-zinc-700 mb-1.5">Email</label>
                <input type="email" required className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-[14px] text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-zinc-700 mb-1.5">Tipo de consulta</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-[14px] text-zinc-900 focus:outline-none focus:border-zinc-400 transition-colors bg-white">
                  <option>Sesión 1:1</option>
                  <option>Taller grupal</option>
                  <option>Consulta general</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-zinc-700 mb-1.5">Mensaje</label>
                <textarea rows={4} required className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-[14px] text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors resize-none" placeholder="Cuéntame qué buscas..." />
              </div>
              {status === "done" ? (
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-[14px] text-zinc-600">
                  ¡Mensaje enviado! Te responderé pronto.
                </div>
              ) : (
                <button type="submit" disabled={status === "sending"}
                  className="bg-zinc-900 text-white px-6 py-3 rounded-full text-[14px] font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50">
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </button>
              )}
            </form>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-semibold text-zinc-900 mb-4">Información</h2>
                <div className="space-y-4 text-[14px]">
                  <div className="flex items-start gap-3">
                    <span className="text-zinc-400">📧</span>
                    <div>
                      <div className="font-medium text-zinc-700">Email</div>
                      <a href="mailto:hola@experienciataichi.com" className="text-zinc-500 hover:text-zinc-700">hola@experienciataichi.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-zinc-400">📍</span>
                    <div>
                      <div className="font-medium text-zinc-700">Ubicación</div>
                      <span className="text-zinc-500">Valdivia, Chile</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-zinc-400">🕐</span>
                    <div>
                      <div className="font-medium text-zinc-700">Horarios</div>
                      <span className="text-zinc-500">Lun-Vie: 9:00-21:00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-zinc-900 mb-3">Preguntas frecuentes</h3>
                <div className="space-y-3">
                  {[
                    { q: "¿Necesito experiencia?", a: "No. El Tai Chi se adapta a cada persona." },
                    { q: "¿Cuánto dura una sesión?", a: "60 minutos." },
                    { q: "¿Puedo practicar online?", a: "Sí, por videollamada." },
                  ].map((f, i) => (
                    <div key={i} className="bg-zinc-50 rounded-xl p-4 border border-zinc-100">
                      <div className="font-medium text-zinc-700 text-[13px] mb-1">{f.q}</div>
                      <div className="text-[13px] text-zinc-500">{f.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
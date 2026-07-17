"use client";

import { ArrowLeft, Mail, MapPin, Calendar, Users, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { ContactForm } from "@/components/contact/ContactForm";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "¿Necesito experiencia previa?",
    answer: "No. El Tai Chi se adapta a cada persona. Empezamos desde donde estés, respetando los límites de tu cuerpo.",
  },
  {
    question: "¿Cuánto dura cada sesión?",
    answer: "Las sesiones individuales duran 60 minutos. Los talleres grupales pueden durar entre 90 y 120 minutos.",
  },
  {
    question: "¿Puedo practicar online?",
    answer: "Sí. La enseñanza online es efectiva. Uso plataformas de videollamada con ajuste de cámara para corregir posturas.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer: "Las sesiones individuales tienen tarifa estándar. Los talleres grupales tienen precio reducido. Pregunta por paquetes.",
  },
];

export function ContactoContent() {
  return (
    <>
      <section className="section bg-white dark:bg-neutral-950" aria-labelledby="contacto-heading">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 id="contacto-heading" className="font-heading font-bold text-neutral-900 dark:text-neutral-50 text-4xl sm:text-5xl lg:text-6xl mb-6">
              Conectemos en el <span className="text-gradient">camino</span>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Reserva tu sesión, inscríbete en un taller o escríbeme para cualquier consulta.
              El primer paso siempre es una conversación.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6 lg:p-8">
                  <h2 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 text-xl mb-6">
                    Envíame un mensaje
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 text-xl mb-6">
                  Información de contacto
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 dark:text-neutral-100">Email</p>
                      <a href="mailto:hola@experienciataichi.com" className="text-neutral-600 dark:text-neutral-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                        hola@experienciataichi.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 dark:text-neutral-100">Ubicación</p>
                      <p className="text-neutral-600 dark:text-neutral-400">Barcelona, España</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 dark:text-neutral-100">Horarios</p>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Lun–Vie: 9:00–21:00<br />
                        Sáb: 10:00–14:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 text-lg mb-4">
                  Próximos talleres
                </h3>
                <Card interactive>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                      <span className="text-sm font-medium text-brand-600 dark:text-brand-400">Taller grupal</span>
                    </div>
                    <h4 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                      Fundamentos del Tai Chi
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                      Aprende los principios básicos de la práctica. Ideal para principiantes.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">Sábado, 10:00–12:00</span>
                      <Button size="sm" variant="secondary">
                        Inscribirme
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-neutral-900 dark:text-neutral-100 text-lg mb-4">
                  Preguntas frecuentes
                </h3>
                <div className="space-y-3">
                  {faqItems.map((item, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl cursor-pointer font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                        {item.question}
                        <ChevronDown className="w-4 h-4 text-neutral-500 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="p-4 pt-0 text-neutral-600 dark:text-neutral-400 text-sm">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
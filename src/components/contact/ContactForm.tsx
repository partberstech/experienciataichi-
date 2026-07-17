"use client";

import { ArrowLeft, Mail, MapPin, Calendar, Users, Sparkles, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription, CardHeader } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  tipo: string;
  mensaje: string;
  honeypot: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  tipo?: string;
  mensaje?: string;
  submit?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    tipo: "",
    mensaje: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (formData.telefono && !/^[\d\s\-\+\(\)]{8,}$/.test(formData.telefono)) {
      newErrors.telefono = "Formato de teléfono inválido";
    }

    if (!formData.tipo) {
      newErrors.tipo = "Selecciona un tipo de consulta";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio";
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    if (formData.honeypot) {
      newErrors.submit = "Spam detectado";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("submitting");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          tipo: formData.tipo,
          mensaje: formData.mensaje,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setSubmitMessage(data.message || "¡Mensaje enviado! Te responderé en menos de 24 horas.");
        setFormData({ nombre: "", email: "", telefono: "", tipo: "", mensaje: "", honeypot: "" });
      } else {
        setStatus("error");
        setSubmitMessage(data.message || "Error al enviar. Intenta de nuevo o escríbeme directo a psicobahamondes@gmail.com");
      }
    } catch {
      setStatus("error");
      setSubmitMessage("Error de conexión. Intenta de nuevo o escríbeme directo a psicobahamondes@gmail.com");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const sessionTypes = [
    { value: "sesion-individual", label: "Sesión 1:1 personalizada (presencial/online)" },
    { value: "taller-grupal", label: "Taller grupal / Inscripción a próximo taller" },
    { value: "consulta-general", label: "Consulta general / Información" },
    { value: "colaboracion", label: "Colaboración / Escuela / Empresa" },
    { value: "otro", label: "Otro" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            Nombre completo <span className="text-brand-500">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 transition-all duration-200",
              errors.nombre
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-neutral-200 dark:border-neutral-700 focus:border-brand-500 focus:ring-brand-500/20"
            )}
            placeholder="Tu nombre"
            aria-invalid={errors.nombre ? "true" : "false"}
            aria-describedby={errors.nombre ? "nombre-error" : undefined}
            disabled={status === "submitting"}
          />
          {errors.nombre && (
            <p id="nombre-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.nombre}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            Email <span className="text-brand-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 transition-all duration-200",
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-neutral-200 dark:border-neutral-700 focus:border-brand-500 focus:ring-brand-500/20"
            )}
            placeholder="tu@email.com"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={status === "submitting"}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            Teléfono (opcional)
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 transition-all duration-200",
              errors.telefono
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-neutral-200 dark:border-neutral-700 focus:border-brand-500 focus:ring-brand-500/20"
            )}
            placeholder="+56 9 1234 5678"
            aria-invalid={errors.telefono ? "true" : "false"}
            aria-describedby={errors.telefono ? "telefono-error" : undefined}
            disabled={status === "submitting"}
          />
          {errors.telefono && (
            <p id="telefono-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.telefono}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="tipo" className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            Tipo de consulta <span className="text-brand-500">*</span>
          </label>
          <select
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-all duration-200 appearance-none",
              errors.tipo
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-neutral-200 dark:border-neutral-700 focus:border-brand-500 focus:ring-brand-500/20"
            )}
            aria-invalid={errors.tipo ? "true" : "false"}
            aria-describedby={errors.tipo ? "tipo-error" : undefined}
            disabled={status === "submitting"}
          >
            <option value="">Selecciona una opción</option>
            {sessionTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.tipo && (
            <p id="tipo-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.tipo}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
          Mensaje <span className="text-brand-500">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows={5}
          className={cn(
            "w-full px-4 py-3 rounded-xl border bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 transition-all duration-200 resize-y min-h-[120px]",
            errors.mensaje
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-neutral-200 dark:border-neutral-700 focus:border-brand-500 focus:ring-brand-500/20"
          )}
          placeholder="Cuéntame qué buscas, tu experiencia previa, horarios preferidos, o cualquier duda..."
          aria-invalid={errors.mensaje ? "true" : "false"}
          aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
          disabled={status === "submitting"}
        />
        {errors.mensaje && (
          <p id="mensaje-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.mensaje}
          </p>
        )}
      </div>

      {status === "submitting" && (
        <div className="flex items-center gap-3 p-4 bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-800 rounded-xl">
          <Loader2 className="w-5 h-5 text-brand-600 dark:text-brand-400 animate-spin" />
          <span className="text-brand-700 dark:text-brand-300 font-medium">Enviando mensaje...</span>
        </div>
      )}

      {status === "success" && (
        <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl animate-fade-in-up">
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
          <span className="text-green-700 dark:text-green-300">{submitMessage}</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl animate-fade-in-up">
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
          <span className="text-red-700 dark:text-red-300">{submitMessage}</span>
        </div>
      )}

      {status !== "success" && (
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
          <span className="flex items-center gap-2">
            Enviar mensaje
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </span>
        </Button>
      )}

      <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
        Al enviar, aceptas que usemos tus datos para responder tu consulta.{" "}
        <a href="/privacidad" className="underline hover:text-brand-600 dark:hover:text-brand-400">
          Política de privacidad
        </a>
        .
      </p>
    </form>
  );
}
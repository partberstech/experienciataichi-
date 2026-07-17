import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefono: z.string().optional(),
  tipo: z.string().min(1, "Selecciona un tipo de consulta"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  honeypot: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json(
        { success: false, message: "Spam detectado" },
        { status: 400 }
      );
    }

    // Validate
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { nombre, email, telefono, tipo, mensaje } = result.data;

    // TODO: Send email via Resend
    // const { data, error } = await resend.emails.send({
    //   from: 'Experiencia Tai Chi <onboarding@resend.dev>',
    //   to: ['psicobahamondes@gmail.com'],
    //   subject: `Nueva consulta: ${tipo} - ${nombre}`,
    //   html: `
    //     <h2>Nueva consulta desde la web</h2>
    //     <p><strong>Nombre:</strong> ${nombre}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
    //     <p><strong>Tipo:</strong> ${tipo}</p>
    //     <p><strong>Mensaje:</strong></p>
    //     <p>${mensaje.replace(/\n/g, '<br>')}</p>
    //   `,
    //   replyTo: email,
    // });

    console.log("Contact form submission:", { nombre, email, telefono, tipo, mensaje });

    // Simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: "¡Mensaje enviado! Te responderé en menos de 24 horas.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Error al enviar. Intenta de nuevo o escríbeme directo a psicobahamondes@gmail.com" },
      { status: 500 }
    );
  }
}
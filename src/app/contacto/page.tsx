import { Metadata } from "next";
import { ContactoContent } from "@/components/contact/ContactoContent";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Agenda una sesión personalizada, únete a un taller grupal o escríbeme directamente. Mauricio Ochoa - Valdivia, Chile.",
};

export default function ContactoPage() {
  return <ContactoContent />;
}
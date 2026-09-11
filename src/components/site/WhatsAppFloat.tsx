import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./data";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com um especialista no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7 fill-white" />
    </a>
  );
}

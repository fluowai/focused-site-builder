import { CalendarCheck, Lock, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./data";

export function FinalCta() {
  return (
    <section className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-8">
        <div>
          <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            Pronto para transformar seu Home Care
            <br />
            em uma empresa de{" "}
            <span className="text-brand-soft">crescimento previsível?</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Vamos analisar seu cenário e mostrar o caminho para você conquistar mais
            contratos particulares e crescer com segurança.
          </p>
        </div>

        <div className="lg:justify-self-end">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-brand px-7 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <CalendarCheck className="h-4 w-4" />
            Agendar diagnóstico gratuito
            <MessageCircle className="h-4 w-4" />
          </a>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            Diagnóstico estratégico sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}

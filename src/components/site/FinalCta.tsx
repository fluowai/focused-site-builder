import { CalendarCheck, Lock } from "lucide-react";
import { WHATSAPP_URL } from "./data";

export function FinalCta() {
  return (
    <section className="theme-light border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-8 lg:py-20">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Pronto para transformar seu Home Care
            <br />
            em uma empresa de{" "}
            <span className="text-brand-soft">crescimento previsível?</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Vamos analisar seu cenário e mostrar o caminho para você conquistar mais
            contratos particulares e crescer com segurança.
          </p>
        </div>

        <div className="lg:justify-self-end">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-md bg-brand px-7 py-4 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <CalendarCheck className="h-5 w-5" />
            Agendar diagnóstico gratuito
          </a>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" />
            Diagnóstico estratégico sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}

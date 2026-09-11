import { CalendarCheck, Play } from "lucide-react";
import { WHATSAPP_URL } from "./data";

export function Hero() {
  return (
    <section id="topo" className="theme-light relative scroll-mt-24 overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_75%_10%,color-mix(in_oklab,var(--brand)_10%,transparent),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 py-14 lg:grid-cols-[1.1fr_1fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-soft">
              Engenharia do crescimento
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Estratégia que transforma
              <br />
              <span className="text-brand-soft">Home Care em crescimento</span>
              <br />
              <span className="text-brand-soft">previsível.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Não somos uma agência de marketing.
              <br />
              Somos o sistema que transforma marketing,
              <br />
              comercial e gestão em crescimento previsível.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-7 py-4 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <CalendarCheck className="h-5 w-5" />
                Agendar diagnóstico gratuito
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-7 py-4 text-base font-medium text-foreground transition-colors hover:bg-surface-2"
              >
                <Play className="h-5 w-5" />
                Conheça nosso método
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-2 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Crescimento previsível
              </p>
              <p className="mt-2 text-2xl font-bold tracking-tight">
                com método, processo e dados.
              </p>

              <svg viewBox="0 0 400 220" className="mt-8 w-full" role="img" aria-label="Gráfico de crescimento ascendente">
                <defs>
                  <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[40, 90, 140, 190].map((y) => (
                  <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="var(--border)" strokeWidth="1" />
                ))}
                <polygon
                  points="0,200 60,170 120,182 180,130 240,142 300,84 360,60 400,34 400,220 0,220"
                  fill="url(#heroArea)"
                />
                <polyline
                  points="0,200 60,170 120,182 180,130 240,142 300,84 360,60 400,34"
                  fill="none"
                  stroke="var(--brand)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="400" cy="34" r="7" fill="var(--brand)" />
              </svg>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "+127%", label: "Faturamento médio" },
                  { value: "+642", label: "Contratos gerados" },
                  { value: "+98%", label: "Retenção" },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg border border-border bg-background/70 p-3 text-center">
                    <p className="text-lg font-bold text-brand-soft sm:text-xl">{m.value}</p>
                    <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

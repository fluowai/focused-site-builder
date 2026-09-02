import {
  CalendarCheck,
  Play,
  BriefcaseBusiness,
  CircleCheck,
  Target,
  Settings2,
  TrendingUp,
  Wallet,
  Workflow,
  BarChart3,
} from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";
import { WHATSAPP_URL } from "./data";

const DIFFS = [
  { icon: BriefcaseBusiness, lines: ["Especialistas em", "Home Care"] },
  { icon: CircleCheck, lines: ["Método exclusivo", "e validado"] },
  { icon: Target, lines: ["Foco em resultado", "e previsibilidade"] },
  { icon: Settings2, lines: ["Do estratégico", "ao operacional"] },
];

const TRUST = [
  { icon: TrendingUp, lines: ["Mais contratos", "particulares"] },
  { icon: Wallet, lines: ["Previsibilidade", "de faturamento"] },
  { icon: Workflow, lines: ["Processos comerciais", "que funcionam"] },
  { icon: BarChart3, lines: ["Marketing que gera", "resultado real"] },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_70%_10%,color-mix(in_oklab,var(--brand)_18%,transparent),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 pt-14 lg:grid-cols-[1fr_1fr] lg:pt-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
              Engenharia do crescimento
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl">
              Estratégia que transforma
              <br />
              <span className="text-brand-soft">Home Care em crescimento</span>
              <br />
              <span className="text-brand-soft">previsível.</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Não somos uma agência de marketing.
              <br />
              Somos o sistema que transforma marketing,
              <br />
              comercial e gestão em crescimento previsível.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <CalendarCheck className="h-4 w-4" />
                Agendar diagnóstico
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
              >
                <Play className="h-4 w-4" />
                Conheça nosso método
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroTeam}
              alt="Especialistas da Auditorium Corporate"
              className="w-full rounded-xl object-cover"
            />
            <div className="absolute bottom-6 right-0 hidden w-56 rounded-lg border border-border bg-surface/90 p-4 backdrop-blur-sm xl:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Crescimento
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                com método, processo e dados.
              </p>
              <svg viewBox="0 0 120 44" className="mt-3 h-12 w-full">
                <polyline
                  points="2,40 20,30 34,34 52,20 70,26 88,12 116,4"
                  fill="none"
                  stroke="var(--brand-soft)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
          {DIFFS.map(({ icon: Icon, lines }) => (
            <div key={lines[0]} className="flex min-w-0 items-start gap-3">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-soft" />
              <p className="text-xs leading-snug text-foreground/90 sm:text-sm">
                {lines[0]}
                <br />
                {lines[1]}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-14 grid gap-6 rounded-xl border border-border bg-surface/60 p-6 lg:grid-cols-[1.1fr_repeat(4,1fr)] lg:items-center">
          <p className="text-xs font-semibold uppercase leading-snug tracking-[0.12em] text-foreground">
            Empresas de Home Care
            <br />
            que confiam na Auditorium
          </p>
          {TRUST.map(({ icon: Icon, lines }) => (
            <div key={lines[0]} className="flex min-w-0 items-start gap-3">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-soft" />
              <p className="text-xs leading-snug text-muted-foreground">
                {lines[0]}
                <br />
                {lines[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

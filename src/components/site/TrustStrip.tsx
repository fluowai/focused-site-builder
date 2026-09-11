import {
  BriefcaseBusiness,
  CircleCheck,
  Target,
  Settings2,
  TrendingUp,
  Wallet,
  Workflow,
  BarChart3,
} from "lucide-react";

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

export function TrustStrip() {
  return (
    <section className="border-y border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-6 py-12 lg:grid-cols-4">
          {DIFFS.map(({ icon: Icon, lines }) => (
            <div key={lines[0]} className="flex min-w-0 items-start gap-3">
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-brand-soft" />
              <p className="text-sm leading-snug text-foreground/90 sm:text-base">
                {lines[0]}
                <br />
                {lines[1]}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-14 grid gap-6 rounded-xl border border-border bg-surface/60 p-7 lg:grid-cols-[1.1fr_repeat(4,1fr)] lg:items-center">
          <p className="text-sm font-semibold uppercase leading-snug tracking-[0.12em] text-foreground">
            Empresas de Home Care
            <br />
            que confiam na Auditorium
          </p>
          {TRUST.map(({ icon: Icon, lines }) => (
            <div key={lines[0]} className="flex min-w-0 items-start gap-3">
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-brand-soft" />
              <p className="text-sm leading-snug text-muted-foreground">
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

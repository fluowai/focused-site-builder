import {
  Crosshair,
  Filter,
  Users,
  LineChart,
  RefreshCw,
  BarChart4,
  UsersRound,
  Handshake,
  DollarSign,
} from "lucide-react";

const CARDS = [
  {
    icon: Crosshair,
    title: "Aquisição",
    text: "Estratégias de tráfego, conteúdo, SEO e outbound para gerar demanda qualificada todos os dias.",
  },
  {
    icon: Filter,
    title: "Conversão",
    text: "Processos de qualificação, diagnóstico, propostas e follow-up que transformam leads em contratos.",
  },
  {
    icon: Users,
    title: "Comercial",
    text: "Estruturação de times com BDR, SDR e Closer para uma máquina de vendas previsível.",
  },
  {
    icon: LineChart,
    title: "CRM & Dados",
    text: "Implementação de CRM, pipeline e indicadores para gestão de performance com clareza.",
  },
  {
    icon: RefreshCw,
    title: "Perpetuação",
    text: "Onboarding, Customer Success e estratégias para retenção, renovação e expansão.",
  },
];

const NUMBERS = [
  { icon: BarChart4, value: "+127%", text: "Aumento médio de faturamento dos clientes em 12 meses" },
  { icon: UsersRound, value: "+3.800", text: "Leads qualificados gerados por mês para nossos clientes" },
  { icon: Handshake, value: "+642", text: "Novos contratos particulares gerados por nossos clientes" },
  { icon: DollarSign, value: "+98%", text: "Taxa média de retenção e renovação dos contratos" },
];

export function Solutions() {
  return (
    <section id="solucoes" className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div id="metodo">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
              O que fazemos
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Um sistema completo para
              <br />
              <span className="text-brand-soft">gerar, converter e perpetuar.</span>
            </h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {CARDS.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-lg border border-border bg-surface p-5"
                >
                  <Icon className="h-7 w-7 text-brand-soft" />
                  <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="resultados" className="rounded-xl border border-border bg-surface p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-soft">
              Números que comprovam
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
              nosso método
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {NUMBERS.map(({ icon: Icon, value, text }) => (
                <div key={value} className="flex min-w-0 items-start gap-3">
                  <Icon className="mt-1 h-7 w-7 shrink-0 text-brand-soft" />
                  <div className="min-w-0">
                    <p className="text-2xl font-bold tracking-tight">{value}</p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

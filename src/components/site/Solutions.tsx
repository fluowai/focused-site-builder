import {
  Crown,
  Rocket,
  Crosshair,
  GraduationCap,
  Users,
  BarChart4,
  UsersRound,
  Handshake,
  DollarSign,
} from "lucide-react";

const CARDS = [
  {
    icon: Crown,
    title: "Presença de Autoridade",
    text: "Uma marca forte é construída com estratégia, consistência e posicionamento para gerar confiança.",
  },
  {
    icon: Rocket,
    title: "Motor de Demanda",
    text: "Use o tráfego pago para sair da dependência de indicações, atrair as pessoas certas e gerar novas oportunidades.",
  },
  {
    icon: Crosshair,
    title: "Visibilidade Cirúrgica",
    text: "Sua empresa no lugar certo, na hora certa: quando um familiar precisa de uma solução de Home Care.",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos Comerciais",
    text: "Um processo comercial preparado para transformar oportunidades em contratos e aumentar a conversão.",
  },
  {
    icon: Users,
    title: "Comunidade do Nicho",
    text: "Acompanhe as novidades, tendências e movimentos do mercado de Home Care e esteja sempre um passo à frente.",
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
    <section id="solucoes" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.75fr_1fr]">
          <div id="metodo" className="scroll-mt-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-soft">
              Método Pódium
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Um sistema completo para
              <br />
              <span className="text-brand-soft">gerar, converter e perpetuar.</span>
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {CARDS.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-lg border border-border bg-surface p-6"
                >
                  <Icon className="h-8 w-8 text-brand-soft" />
                  <h3 className="mt-4 text-base font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="resultados" className="scroll-mt-24 self-start rounded-xl border border-border bg-surface p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-soft">
              Números que comprovam
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              nosso método
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {NUMBERS.map(({ icon: Icon, value, text }) => (
                <div key={value} className="flex min-w-0 items-start gap-3">
                  <Icon className="mt-1 h-7 w-7 shrink-0 text-brand-soft" />
                  <div className="min-w-0">
                    <p className="text-3xl font-bold tracking-tight">{value}</p>
                    <p className="mt-1 text-sm leading-snug text-muted-foreground">{text}</p>
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

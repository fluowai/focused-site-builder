import { ShieldCheck, Star, Quote } from "lucide-react";
import founder from "@/assets/founder-maycon.jpg";

export function About() {
  return (
    <section id="sobre" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
              Sobre nós
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              De dentro do Home Care
              <br />
              <span className="text-brand-soft">para transformar o mercado.</span>
            </h2>

            <div className="mt-7 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>Maycon não chegou ao Home Care pela porta do marketing.</p>
              <p>
                Entrou pela porta do serviço. Trabalhou com escalas, viveu o operacional
                e entendeu, na prática, os desafios de quem cuida de quem cuida.
              </p>
              <p>
                Como coordenador de escalas, viu de perto empresas perdendo dinheiro
                todos os meses por não saber vender o particular.
              </p>
              <p>
                Foi aí que nasceu a{" "}
                <span className="font-semibold text-foreground">Auditorium Corporate</span>.
                Não como mais uma agência, mas como a resposta de quem viveu esse mercado
                por dentro e decidiu resolver, de fora, o problema que mais via acontecer.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex min-w-0 items-start gap-3 rounded-lg border border-border bg-surface p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-soft" />
                <p className="text-xs leading-snug text-muted-foreground">
                  <span className="font-semibold text-foreground">6 anos de experiência</span>
                  <br />
                  no setor de Home Care
                </p>
              </div>
              <div className="flex min-w-0 items-start gap-3 rounded-lg border border-border bg-surface p-4">
                <Star className="mt-0.5 h-5 w-5 shrink-0 text-brand-soft" />
                <p className="text-xs leading-snug text-muted-foreground">
                  <span className="font-semibold text-foreground">Única agência do Brasil</span>
                  <br />
                  com método exclusivo para Home Care
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-[1fr_1fr] sm:items-center">
            <div className="border-l border-border pl-6">
              <Quote className="h-8 w-8 fill-brand-soft text-brand-soft" />
              <p className="mt-5 text-lg font-medium leading-relaxed">
                A melhor estratégia de marketing é inútil se o comercial não funciona.
              </p>
              <p className="mt-5 text-lg font-medium leading-relaxed">
                Nosso trabalho é fazer as duas pontas conversarem.
              </p>
              <p className="mt-6 text-sm font-semibold text-brand-soft">Maycon</p>
              <p className="text-xs text-muted-foreground">Fundador da Auditorium</p>
            </div>
            <img
              src={founder}
              alt="Maycon, fundador da Auditorium Corporate"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

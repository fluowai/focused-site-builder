import { Instagram, Linkedin, Youtube, Facebook, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { EMAIL, PHONE } from "./data";


const NAV = ["Sobre Nós", "Soluções", "Resultados", "Método", "Conteúdos"];
const SOL = ["Aquisição", "Conversão", "Comercial", "CRM & Dados", "Perpetuação"];

export function Footer() {
  return (
    <footer id="conteudos" className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(3,0.8fr)_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Especialistas em marketing, vendas e gestão para empresas de Home Care que
              querem crescer com previsibilidade.
            </p>
            <div className="mt-6 flex gap-4 text-muted-foreground">
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-brand-soft">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-brand-soft">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="hover:text-brand-soft">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-brand-soft">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-soft">
              Navegação
            </p>
            <ul className="mt-5 space-y-3 text-xs text-muted-foreground">
              {NAV.map((item) => (
                <li key={item}>
                  <a href="#topo" className="hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-soft">
              Soluções
            </p>
            <ul className="mt-5 space-y-3 text-xs text-muted-foreground">
              {SOL.map((item) => (
                <li key={item}>
                  <a href="#solucoes" className="hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-soft">
              Contato
            </p>
            <ul className="mt-5 space-y-3 text-xs text-muted-foreground">
              <li className="flex min-w-0 items-start gap-2">
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>{PHONE}</span>
              </li>
              <li className="flex min-w-0 items-start gap-2">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span className="break-all">{EMAIL}</span>
              </li>
              <li className="flex min-w-0 items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>
                  Atendimento todo o Brasil
                  <br />
                  Online e Presencial
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-soft">
              Newsletter
            </p>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Receba conteúdos exclusivos sobre crescimento para Home Care.
            </p>
            <form
              className="mt-5 flex items-center gap-2 rounded-md border border-border bg-surface p-1.5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail"
                aria-label="Seu melhor e-mail"
                className="min-w-0 flex-1 bg-transparent px-2 text-xs text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                aria-label="Inscrever-se"
                className="shrink-0 rounded-md border border-border p-2 text-foreground transition-colors hover:bg-surface-2"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>

        <p className="mt-12 border-t border-border/60 pt-6 text-center text-[11px] text-muted-foreground">
          © 2024 Auditorium Corporate. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

# Landing page Auditorium Corporate — réplica fiel do mockup

Construir uma única página (rota `/`) idêntica ao mockup enviado, sem seções extras, sem "criatividade" fora do layout aprovado.

## Variante visual

Assumindo a versão **totalmente dark** (primeiro mockup). Se preferir a segunda versão (seção "Sobre Nós" em fundo claro), é só avisar antes de aprovar.

## Estrutura da página (exatamente nesta ordem)

1. **Header fixo** — logo Auditorium à esquerda; menu: Sobre Nós, Soluções, Resultados, Método, Conteúdos; botão azul "Fale com especialista" com ícone WhatsApp.
2. **Hero** — eyebrow "ENGENHARIA DO CRESCIMENTO"; título em 3 linhas com "Home Care em crescimento previsível." em azul; parágrafo de 3 linhas; dois botões (azul "Agendar diagnóstico" com ícone de calendário, e outlined "Conheça nosso método" com play); imagem dos dois profissionais à direita com gráfico/seta ascendente ao fundo e card flutuante "CRESCIMENTO / com método, processo e dados." com mini-gráfico.
3. **Faixa de 4 diferenciais** (ícone + 2 linhas): Especialistas em Home Care · Método exclusivo e validado · Foco em resultado e previsibilidade · Do estratégico ao operacional.
4. **Barra de confiança** (card com borda) — "EMPRESAS DE HOME CARE QUE CONFIAM NA AUDITORIUM" + 4 itens com ícone: Mais contratos particulares · Previsibilidade de faturamento · Processos comerciais que funcionam · Marketing que gera resultado real.
5. **Sobre Nós** — coluna esquerda: eyebrow, título "De dentro do Home Care / para transformar o mercado.", 4 parágrafos do mockup, 2 cards de credencial (6 anos de experiência / Única agência do Brasil com método exclusivo). Coluna direita: bloco de citação com aspas + assinatura "Maycon — Fundador da Auditorium" e a foto do fundador.
6. **O que fazemos** — eyebrow, título "Um sistema completo para gerar, converter e perpetuar.", 5 cards (Aquisição, Conversão, Comercial, CRM & Dados, Perpetuação) com os textos do mockup + painel lateral "NÚMEROS QUE COMPROVAM NOSSO MÉTODO" com 4 métricas (+127%, +3.800, +642, +98%).
7. **CTA final** — "Pronto para transformar seu Home Care em uma empresa de crescimento previsível?" + subtexto, botão azul "Agendar diagnóstico gratuito" e linha "Diagnóstico estratégico sem compromisso" com cadeado.
8. **Footer** — logo + descrição + ícones sociais (Instagram, LinkedIn, YouTube, Facebook); colunas Navegação, Soluções, Contato ((41) 98860-5017, contato@auditoriumcorporate.com.br, Atendimento todo o Brasil / Online e Presencial), Newsletter com input de e-mail e botão seta; barra de copyright.

## Design system

- Fundo azul-marinho muito escuro com leve gradiente radial nas seções de destaque; cards com fundo levemente mais claro e borda sutil azulada.
- Azul de marca (#1E6BFF aprox.) para acentos, botões, eyebrows e trechos destacados do título — todos como tokens semânticos em `src/styles.css` (oklch), nada hardcoded nos componentes.
- Tipografia sans geométrica, títulos em peso bold com destaque azul, corpo em cinza-azulado claro.
- Cantos levemente arredondados, ícones em linha (lucide) na cor azul.

## Detalhes técnicos

- Rota única: reescrever `src/routes/index.tsx`, com componentes por seção em `src/components/`.
- Logo (versão branca) e fotos enviadas publicadas via Lovable Assets e referenciadas por pointer JSON.
- Imagem do hero: composição com as fotos do casal enviadas sobre fundo escuro com gráfico; ajuste de recorte/fundo via geração de arte de apoio se necessário.
- Links do menu apenas com scroll suave para as seções; CTAs abrindo WhatsApp/e-mail.
- `head()` da rota com title, description, og e twitter próprios da Auditorium.
- Layout responsivo: grid empilhando em mobile, mantendo hierarquia idêntica.

## Fora de escopo

Sem backend, sem formulários com envio real (newsletter apenas visual nesta etapa), sem páginas extras, sem seções que não estejam no mockup.

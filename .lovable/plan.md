# Reforma do site Auditorium — lista de alterações do cliente

Aplicar todas as alterações recebidas por WhatsApp, mantendo a estrutura geral da página.

## 1. Visual — alternância claro/escuro

- Página passa a alternar seções: **branco → azul-marinho escuro → branco → azul-marinho escuro** (inspirado na estrutura do JS Mídias, sem copiar).
- Ordem das seções:
  1. Header fixo **branco** + logo azul (corrigir sobreposição do header com o conteúdo).
  2. Hero **branco**.
  3. Faixa de diferenciais + barra de confiança em **azul-marinho escuro**.
  4. Sobre Nós **branco**.
  5. O que fazemos / Método Pódium em **azul-marinho escuro**.
  6. CTA final **branco**.
  7. Footer em **azul-marinho escuro**.
- Tokens novos em `src/styles.css`: superfície clara, textos escuros para fundo branco, mantendo o azul exato da marca para acentos (inclusive nos textos sobre fundo branco, conforme escolha do cliente).

## 2. Fotos

- Remover a foto dos dois profissionais do hero. No lugar, composição visual leve com o gráfico/seta de crescimento e o card flutuante "Crescimento — com método, processo e dados.".
- Manter apenas a foto do **Maycon Ribeiro** na seção Sobre Nós.

## 3. WhatsApp

- Novo número: **+55 11 93621-1314** (contato da Thayssa), com mensagem automática:
  "Olá! Gostaria de falar com um especialista em marketing e vendas para Home Care."
- Atualizar todos os botões (header, hero, CTA final).
- Adicionar **botão flutuante do WhatsApp** no canto inferior direito, verde tradicional do WhatsApp, visível em toda a página.

## 4. Links

- Conferir todos os links de navegação e âncoras.
- Instagram: https://instagram.com/audi.corporate
- LinkedIn: https://www.linkedin.com/company/auditorium-corporate
- YouTube: https://youtube.com/@auditoriumcorporate
- Facebook: manter o ícone com o link enviado (facebook.com/share/1JJn5aDGYv).

## 5. CTAs

- Padronizar todos como **"Agendar diagnóstico gratuito"** apontando para o WhatsApp novo.
- "Conheça nosso método" continua rolando para a seção do método.

## 6. Maycon

- Nome completo: **Maycon Ribeiro**.
- Nova frase de destaque: "Eu vi por dentro onde o dinheiro escapa. Agora ensino como parar de perder e começar a vender."

## 7. Método Pódium

Substituir os 5 cards atuais pelos pilares do Método Pódium, com os textos enviados:

1. **Presença de Autoridade** — marca forte construída com estratégia, consistência e posicionamento para gerar confiança.
2. **Motor de Demanda** — tráfego pago para sair da dependência de indicações e gerar novas oportunidades.
3. **Visibilidade Cirúrgica** — a empresa no lugar certo, na hora certa, quando um familiar precisa de Home Care.
4. **Treinamentos Comerciais** — processo comercial que transforma oportunidades em contratos.
5. **Comunidade do Nicho** — novidades, tendências e movimentos do mercado de Home Care.

Manter o painel lateral "Números que comprovam nosso método" e ajustar o título da seção para apresentar o **Método Pódium**.

## 8. Fontes e legibilidade

- Aumentar os tamanhos de fonte (textos corridos de `text-xs/sm` para `text-sm/base`), principalmente no mobile.
- Aumentar contraste dos textos secundários (cinza mais forte no claro, cinza mais claro no escuro).
- Priorizar leitura no celular (público 40+), mantendo a estética premium.

## Detalhes técnicos

- Novos tokens semânticos para o tema claro em `src/styles.css`; seções alternam via classes de superfície.
- Header: adicionar altura compensada (`scroll-margin` nas seções) para corrigir a sobreposição ao rolar pelas âncoras.
- Botão flutuante: componente `WhatsAppFloat` montado em `src/routes/index.tsx`.
- Links sociais e telefone centralizados em `src/components/site/data.ts`.
- Verificação final com screenshots em desktop e mobile.

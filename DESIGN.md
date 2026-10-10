---
name: Hiarley C. da Silva · portfólio
description: Readout de sistema em registro de resultado — mono pixelada sobre fundo quase-preto, réguas hairline e um único âmbar de fósforo.
colors:
  ground: "#0b0b09"
  surface: "#131311"
  rule: "#2a2a26"
  rule-strong: "#55554c"
  ink: "#edede5"
  dim: "#9c9c92"
  ghost: "#6d6d63"
  amber: "#ffb000"
typography:
  display:
    fontFamily: "Departure Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(2.7rem, 10.5vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "normal"
  papel:
    fontFamily: "Departure Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(0.9rem, 2.1vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.06em"
  secao:
    fontFamily: "Departure Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(1.75rem, 4.6vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  destaque:
    fontFamily: "Departure Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(1.75rem, 5.2vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "normal"
  corpo:
    fontFamily: "Departure Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  rotulo:
    fontFamily: "Departure Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
  micro:
    fontFamily: "Departure Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "normal"
rounded:
  none: "0"
spacing:
  pagina: "clamp(1.25rem, 2vw, 2rem)"
  secao: "clamp(3.5rem, 5vw, 5rem)"
  linha: "0.625rem"
components:
  botao-primario:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ground}"
    typography: "{typography.rotulo}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.25rem"
  botao-primario-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  painel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.25rem 1.5rem"
  link-quieto:
    textColor: "{colors.dim}"
    typography: "{typography.corpo}"
---

# Design System: Hiarley C. da Silva · portfólio

## Overview

A página se apresenta como um **readout de sistema**: o visitante lê o trabalho como quem lê um painel — nome, papel, prova em uma linha, as etapas da esteira de release em painel de borda fina e, abaixo, experiência, projetos e contato. O registro é de resultado (escala, isolamento de dados, release sem queda), e o que sustenta cada afirmação é o próprio sistema descrito em tela.

O mundo é o do terminal monoespaçado e do impresso pontilhado: fundo quase-preto, tinta quase-branca, réguas de 1px, cantos vivos, texto em mono pixelada e **um único âmbar de fósforo** reservado à ação. Nada aqui é imagem pré-filtrada: a retícula de pontilhado ordenado é um tile SVG desenhado para o projeto e o glitch do nome é CSS. Nenhuma figura da página simula medição: a dobra é um readout das etapas reais da esteira de release.

## Colors

Estratégia: neutros tingidos pelo mundo + um acento. O fundo é quente-escuro, nunca preto puro (#0b0b09) e nunca azul-petróleo.

- **Ground** `#0b0b09` — o campo da página e o `themeColor`.
- **Surface** `#131311` — painéis, painel de readout e as caixas de log.
- **Rule** `#2a2a26` — toda separação: réguas de 1px, bordas de painel, `thead` e `divide-y`.
- **Rule strong** `#55554c` — só onde a régua precisa sobreviver ao fundo claro: barras de rolagem e marcadores de lista.
- **Ink** `#edede5` — texto principal, títulos, valores e o estado de hover do botão âmbar.
- **Dim** `#9c9c92` — texto secundário, legendas, metadados e rótulos. Medido em 7,11:1 sobre o ground.
- **Ghost** `#6d6d63` — só a camada cinza do glitch de registro no nome, o fantasma de uma impressão fora de alinhamento. Não serve para texto de leitura.
- **Amber** `#ffb000` — a ação primária (preenchimento), o anel de foco e a seleção de texto. Preto sobre âmbar mede 10,75:1.

### Named Rules

**A Regra de Um Só Âmbar.** O âmbar só aparece como ação: os dois botões da página (dobra e contato, a mesma ação), o anel de foco e a seleção de texto. Nunca como decoração, nunca como fundo de bloco, nunca em ícone.

**Nada de preto puro, nada de branco puro.** O fundo é `#0b0b09` e a tinta é `#edede5`. Contraste alto se conquista por valor medido, não por extremos.

## Typography

Uma única face, **Departure Mono**, self-hosted em `src/app/fonts/DepartureMono-Regular.woff2` com a licença SIL OFL 1.1 ao lado, carregada por um `@font-face` próprio. Não há fonte hospedada, nem face de sistema no papel de display. Sem `font-smoothing`, para a pixel manter a aresta.

A hierarquia vem de escala, caixa e tinta — a face tem um peso só, então peso não é um degrau disponível.

### Hierarchy

- **Display** (`clamp(2.7rem, 10.5vw, 6rem)`, `line-height 0.94`): o nome, com o glitch de registro de impressão em duas cores.
- **Destaque** (`clamp(1.75rem, 5.2vw, 3.25rem)`): a pergunta de fechamento no contato.
- **Seção** (`clamp(1.75rem, 4.6vw, 2.75rem)`, `line-height 1`): os títulos `EXPERIÊNCIA`, `PROJETOS`.
- **Papel** (`clamp(0.9rem, 2.1vw, 1.15rem)`, `tracking 0.06em`, caixa alta): a linha de papel sob o nome.
- **Corpo** (`0.95rem`, `line-height 1.6`, medida máxima 68–76ch): prova da dobra, escopos e desfechos da experiência, resumos e itens de projeto.
- **Rótulo** (`0.75rem`, `tracking 0.08em` a `0.16em`, caixa alta ou não): metadados de seção, cabeçalhos de painel, legendas de figura.
- **Micro** (`0.7rem`, `line-height 1.35`): só rótulos de valor em grade, como o nome e o hex de cada cor na ficha de um projeto. Nunca texto de leitura.

### Named Rules

**Texto pequeno é leitura, não textura.** Dim não desce abaixo de 0.75rem e mantém 7:1 sobre o ground; nada de cinza sobre âmbar (o botão usa preto sobre âmbar).

**Caixa alta só em rótulo e título.** Frases de corpo nunca são capitalizadas por CSS.

## Layout

Um container de `max-width: 1180px` com `padding` de `1.25rem` (2rem a partir de `sm`). Cada seção fecha com uma régua de 1px e respira `clamp(3.5rem, 5vw, 5rem)` no eixo vertical; o hero usa o mesmo ritmo, com o topo um pouco maior.

As colunas são assimétricas de propósito: a experiência é uma grade de 12 com o bloco da empresa em 3 e o log do cargo em 9. O projeto é um bloco de coluna única, sempre na mesma ordem: resumo com medida de 72ch, faixa de metadados em até quatro colunas (papel, entrega, stack e links), grade 2×2 de itens e, quando existe, a captura em largura cheia com a paleta em faixa logo abaixo. Duas regras verticais nunca nascem de um layout de duas colunas desiguais: o que alinha é a régua de 1px abrindo cada bloco.

Breakpoints do Tailwind: `sm` 640, `md` 768, `lg` 1024. O hero mantém nome, papel, prova, CTA e o painel de readout dentro dos primeiros 900px em desktop.

## Elevation & Depth

**Não existe token de sombra.** Profundidade aqui é valor e régua: superfície mais clara contra o ground, moldura de 1px e o peso da tinta. Nenhum `box-shadow` aparece no código; nenhum `backdrop-filter`; nenhum brilho colorido.

### Named Rules

**Régua, não sombra.** Se dois blocos precisam se separar, entra uma linha de 1px — nunca uma sombra, nunca um cartão com raio.

**Movimento autoral, uma vez por elemento.** Três dispositivos, todos do vocabulário do mundo e disparados uma única vez: a dobra liga (`power-on`, 620ms), cada título decodifica ao entrar (620ms) e o nome tem glitch de registro no hover. Nenhuma entrada se repete por seção, e com `prefers-reduced-motion` nada disso monta — inclusive o Lenis.

## Shapes

Raio **zero** em tudo: botões, painéis e molduras de imagem. A forma é sempre retangular e a borda é sempre de 1px. O círculo não existe nesta página; nada é pill, nada é arredondado, nada tem canto suavizado.

O glitch do nome é a única forma "irregular": dois fantasmas deslocados de 2px em âmbar e em cinza, com `clip-path` fixo e uma animação curta no hover.

### Named Rules

**Zero raio, uma espessura.** Um único peso de borda (1px) e um único raio (0).

## Components

### Buttons

Um só tipo de ação, dois lugares (dobra e contato): preenchimento âmbar, texto preto em caixa alta com `tracking` de rótulo, padding de `0.75rem 1.25rem`, altura de 44px (alvo de toque), raio zero. No hover o preenchimento vira `ink`. Não existe botão secundário — as ações alternativas (e-mail, LinkedIn) são links de texto em `dim` que sobem para `ink` no hover.

### Cards / Containers

Painéis com `background: surface` e `border: 1px solid rule`, sem raio e sem sombra. O cabeçalho do painel é uma linha com título em caixa alta à esquerda e metadado em `dim` à direita, separada por uma régua. A legenda de cada figura fica **fora** da moldura, em `dim`, e carrega o que é dado real e o que é ilustrativo.

### Navigation

Barra fixa no topo com fundo do ground, régua inferior de 1px, um link `início` à esquerda e os três destinos à direita (`experiência`, `projetos`, `contato`), todos em `0.75rem`. O estado ativo não existe: o que muda no hover é o valor do texto (`dim` → `ink`).

### Painel de readout (componente assinatura)

A figura da dobra: um `dl` com cinco linhas em duas colunas (etapa em `dim` na coluna de 4, o que ela faz em `ink` na de 8), régua de 1px entre as linhas, moldura de 1px e o fundo de `surface` coberto pela **retícula de pontilhado ordenado** (`.reticula`, tile SVG de 8x8 px em `--color-rule`, `background-size: 8px 8px`). A retícula é textura de impressão do mundo: não codifica número nenhum, e a legenda diz que os passos vêm do pipeline real, sem valor de amostra.

A mesma forma serve a qualquer conteúdo tabular da página; nenhuma figura simula medição.

**Dois usos, dois registros.** Na dobra, o readout fala de resultado (`o que eu entrego`, quatro linhas) e leva a retícula. Em `#experiencia`, o mesmo componente mostra o mecanismo (`Esteira de release`, cinco linhas de pipeline) **sem** a retícula, como prova do que sustenta a dobra. Fechadura: registro técnico nunca abre a página; ele mora onde quem quer o detalhe vai olhar.

### Ficha de projeto

A faixa de metadados que abre cada projeto: um `dl` em grade de até quatro colunas, com o rótulo em micro (`0.7rem`, `dim`, caixa alta) e o valor em `0.875rem` na tinta. As células são papel, entrega, stack e links — os links em `ink`, sublinhados com offset de 4px e um `->` `aria-hidden` como marca de ação, sem trocar de cor (o âmbar continua sendo só a ação primária do site).

### Captura e paleta

A captura do cliente entra em largura cheia dentro da moldura de 1px, **sem corte e sem esticar**: a proporção é a do arquivo. A legenda de origem fica logo abaixo, em `0.75rem`. A paleta entregue aparece como uma faixa de 40px com quatro segmentos iguais e a lista de nome e hex em `0.7rem` embaixo — cor em bloco, legível à distância, nunca em quadradinhos.

### Título que decodifica

`src/components/titulo-animado.tsx` — o `h2` carrega `aria-label` com o texto real e um `span` `aria-hidden` que, na primeira vez que o título entra na tela, chega como caracteres de terminal (`A–Z0–9#%&*+-/<>`) e vai assentando da esquerda para a direita em 620ms. O texto do servidor já é o final, então sem JavaScript e para leitores de tela nada muda.

### Glitch de registro

Classe `.glitch`: o nome passa a ser um `span` com `aria-hidden`, o `h1` carrega `aria-label`, e duas camadas `::before`/`::after` reimprimem o texto deslocadas 2px (âmbar e cinza). Animação só no hover, em `steps`, 360ms e 300ms.

## Do's and Don'ts

### Do:

- Escrever em linguagem de resultado e ancorar cada afirmação numa medição ou numa amostra em tela.
- Rotular no mesmo bloco o que é sintético, reconstruído ou captura — e de onde a captura veio.
- Separar com régua de 1px, medir contraste antes de publicar, manter 44px de alvo nos botões.
- Ler a paleta dentro do canvas quando houver canvas (hoje: nenhum), sempre a partir dos tokens.
- Respeitar `prefers-reduced-motion`: sem Lenis, sem varredura, sem entrada animada.

### Don't:

- Não usar o âmbar como decoração, fundo ou ícone.
- Não introduzir raio, sombra, gradiente, `blur`, emoji ou glifo no lugar de ícone.
- Não voltar a incluir lista de cursos, certificados, competências ou de tecnologias: o eixo é trabalho feito.
- Não afirmar número sem origem — a fonte de cada um vive em `PRODUCT.md`.
- Não acrescentar imagem de cliente além da captura licenciada (`public/amostras/tavares-odontologia.png`).
- Não colocar série de dado ilustrativa nem figura que pareça medição sem medição real.

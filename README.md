# Portfólio — Hiarley C. da Silva

Página única em Next.js 16 (App Router), TypeScript e Tailwind CSS v4. Tema escuro
brutalista/terminal, com dithering, halftone de linhas e glitch **desenhados em código**
(canvas 2D e CSS), sem imagem pré-filtrada. Scroll suave com Lenis, desligado sob
`prefers-reduced-motion`.

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
```

Outros scripts: `npm run build`, `npm start`, `npm run lint`.

## Estrutura

- `src/app/page.tsx` — composição das seções: hero, `#experiencia`, `#projetos`, `#contato`
- `src/app/globals.css` — tokens do tema, superfícies nativas do navegador (seleção, barra de rolagem, foco), a retícula `.reticula` (pontilhado ordenado como textura), o glitch de impressão e o vocabulário de movimento do mundo
- `src/components/titulo-animado.tsx` — título de seção que decodifica uma vez ao entrar na tela
- `src/components/scroll-suave.tsx` — Lenis
- `src/data/profile.ts` — conteúdo factual (fonte: CV do autor) e as legendas das figuras. Sem série de dado ilustrativa: a dobra é um readout das etapas reais da esteira de release
- `src/app/fonts/` — Departure Mono, com a licença SIL OFL 1.1 ao lado
- `PRODUCT.md` — verdade de produto; `DESIGN.md` — sistema de design implementado
- `.impeccable/` — brief da superfície, config de build e capturas da revisão final

## Conteúdo

Entra apenas o que está no CV do autor ou foi confirmado por ele. Toda amostra sintética
ou reconstruída é rotulada como tal na própria página, e nenhum dado de cliente aparece.

## Licença

Código sob MIT (`LICENSE`). Fora do MIT: a fonte Departure Mono (SIL OFL 1.1, licença em
`src/app/fonts/DepartureMono-LICENSE.txt`) e a captura da clínica Tavares Odontologia em
`public/amostras/`, cuja marca, fotos e conteúdo pertencem à clínica.

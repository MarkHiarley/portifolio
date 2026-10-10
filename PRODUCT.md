# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Greenfield, decidido nesta rodada: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, sem dependências extras de UI, sem CMS. Fonte Departure Mono self-hosted (SIL OFL). Conteúdo vive em um único arquivo de dados tipado.

## Users

Recrutadores técnicos, líderes de engenharia e fundadores (Brasil, remoto) que chegam por LinkedIn, GitHub ou indicação e decidem em 60 a 90 segundos se vale conversar. Abrem no celular durante a triagem e revisitam no desktop antes da entrevista. Job to be done: confirmar, rápido, que este engenheiro sustenta sistema em escala e pode assumir plataforma, backend ou infraestrutura.

## Product Purpose

Portfólio de uma página de Hiarley C. da Silva, engenheiro de software. Existe para transformar um CV denso em evidência legível e abrir contato direto. Sucesso: o visitante entende em segundos o que ele faz, encontra um número verificável que sustenta a alegação e aciona o canal de contato que preferir (WhatsApp, e-mail, LinkedIn).

## Positioning

Não é uma lista de tecnologias, e sim resultado de operação: uma plataforma multi-tenant com mais de 30 mil usuários que escala sem gargalo, dados isolados por organização em nível corporativo, releases que não derrubam o serviço, um servidor de filas próprio em Go e um produto que venceu a Olimpíada Brasileira de Tecnologia 2025. Um concorrente não copia isso sem ter operado o mesmo sistema.

## Operating Context

Avaliação rápida, quase sempre em leitura escaneável, em português. Contato real acontece por WhatsApp, e-mail (hiarleycostamarley@gmail.com) e LinkedIn (hiarleysilva). GitHub (MarkHiarley) existe mas o usuário não o incluiu no conjunto de canais desta página. Sem login, sem formulário, sem newsletter.

## Capabilities and Constraints

Confirmado nesta rodada:

- Uma página com o eixo em trabalho feito: hero, `#experiencia`, `#projetos` e `#contato`. Não existe demonstração com dado inventado: a dobra mostra os passos reais da esteira de release, a experiência traz resultados medidos nos sistemas e os projetos trazem fatos mais a captura do site entregue. Os painéis de amostra reconstruída e as gravuras de série foram retirados a pedido do autor.
- O CV completo em PDF **não** é oferecido para download (decisão explícita do usuário).
- Canais expostos: e-mail, WhatsApp (88) 98189-9242, LinkedIn. GitHub fora.
- Sem publicação nesta rodada: roda apenas local.
- Todo o conteúdo factual vem do CV em `/home/hiarley/Documentos/Curriculos/Hiarley C Silva-1.pdf`, mais a escala da plataforma (mais de 30 mil usuários), confirmada pelo autor nesta conversa.
- Sem fotos do autor e sem depoimento. O único raster enviado é a captura do site da Tavares Odontologia, entregue pelo próprio autor e autorizada por ele para esta página; dentro dela aparecem o logo e a foto da clínica (ver Evidence on Hand).
- Sem geração de imagem disponível neste ambiente: a construção é code-led. A retícula de pontilhado ordenado é um tile SVG desenhado para o projeto (textura, não medição) e o glitch do nome é CSS; a captura do site entregue é a única imagem raster que a página carrega.
- Sem lista de cursos, certificados ou competências: o eixo é amostra de trabalho, não currículo.

## Brand Commitments

Decisões estéticas dadas pelo usuário e vinculantes: dark mode, tipografia monoespaçada, estética brutalista/terminal, retícula de pontilhado ordenado como textura de impressão e glitch tipográfico no nome, e **uma única cor** de destaque para a ação, como o botão amarelo da referência enviada. Registros em caixas pretas com bordas finas cinza/branco e texto imitando log de terminal. Nada de filtro de foto pronto: a retícula é um tile SVG desenhado para o projeto e o glitch é CSS.

## Evidence on Hand

- CV em PDF: `/home/hiarley/Documentos/Curriculos/Hiarley C Silva-1.pdf` (métricas de Chatvolt, CodXiss, EcoRadar, eNem Estudei, Ceará Científico, formação e certificados).
- Escala das plataformas em que trabalhou (mais de 30 mil usuários): confirmada pelo autor nesta conversa, não consta no CV. A atribuição dessa escala a um produto específico **não** foi confirmada, então a página não a nomeia.
- Afirmações do CV que a página usa como fato: operações multinacionais com provedores privados (AWS Bedrock / Portkey), viabilizando clientes enterprise com LLMs próprios e isolamento de credenciais; pipeline com infraestrutura efêmera; RBAC e isolamento entre organizações; consentimento LGPD por WhatsApp.
- Infraestrutura e DNS de `tavaresodontologiactga.com.br` no Cloudflare: confirmado pelo autor nesta conversa; entra na ficha do projeto, na faixa de metadados acima dos itens.
- Captura do site entregue à Tavares Odontologia, enviada pelo próprio autor e publicada em `public/amostras/tavares-odontologia.png`, exibida em largura cheia no fim do projeto, com a paleta logo abaixo e o endereço do site na ficha. É o único raster de cliente licenciado nesta página, e a legenda diz que a captura é do autor. Papel do autor nesse projeto, confirmado por ele: frontend, deploy e DNS.
- Links públicos permitidos: `tavaresodontologiactga.com.br`, `github.com/MarkHiarley/lp-tavares` (código do projeto entregue, ligado abaixo da paleta), `enemestudei.com`, `enemestudei.com/b2b`, `eco-radar.enemestudei.com`. "GitHub fora" vale como canal de contato: o perfil não é divulgado, mas o repositório de um projeto entregue pode aparecer.
- Ausências que o trabalho futuro não deve fabricar: número de WhatsApp de terceiros, depoimentos, logos de clientes fora da captura licenciada, fotos do autor, e métricas que o CV nem a confirmação do autor não trazem.

## Product Principles

1. Resultado antes de adjetivo, e o resultado sempre como amostra: o que a página afirma aparece em tela, com a escala ou o sistema que sustenta. A única figura do hero (mais de 30 mil usuários) tem a fonte registrada em Evidence on Hand, porque não vem do CV.
2. Número com origem declarada: nenhum número entra sem que o registro diga de onde veio — CV ou confirmação do autor.
3. Contato a um clique, no canal que a pessoa já usa.
4. Nenhum fato inventado, e nenhuma série de dado ilustrativa: o que o CV nem a confirmação do autor trazem não entra, e figura que pareça medição só entra com medição de verdade.
5. O layout é um registro de sistema: linhas, medições e estados em vez de cartões decorativos.

## Accessibility & Inclusion

Alvo WCAG 2.1 AA: contraste de corpo ≥ 4,5:1 e de texto grande ≥ 3:1 sobre o fundo escuro, foco de teclado visível, navegação completa por teclado, nenhuma informação transmitida só por cor, e `prefers-reduced-motion` desliga glitch, varredura e qualquer animação de entrada.

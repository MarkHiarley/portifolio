/**
 * Conteúdo factual da página. Fonte: CV de Hiarley C. da Silva
 * (/home/hiarley/Documentos/Curriculos/Hiarley C Silva-1.pdf).
 * Nada aqui deve ser afirmado sem estar no CV ou ter sido confirmado pelo autor.
 */

export const identity = {
  nome: "Hiarley C. da Silva",
  papel: "Software Engineer",
  prova:
    "Construo e escalo plataformas seguras para mais de 30 mil usuários: o sistema cresce sem gargalo, os dados de cada cliente ficam blindados e as novidades entram no ar sem derrubar o serviço.",
  local: "Tianguá, CE · remoto",
} as const;

export const contato = {
  email: "hiarleycostamarley@gmail.com",
  whatsapp: {
    numero: "(88) 98189-9242",
    link:
      "https://wa.me/5588981899242?text=" +
      encodeURIComponent(
        "Olá, Hiarley! Vi seu portfólio e quero conversar sobre um projeto.",
      ),
  },
  linkedin: { rotulo: "hiarleysilva", link: "https://www.linkedin.com/in/hiarleysilva" },
} as const;

export const emailLink =
  "mailto:" +
  contato.email +
  "?subject=" +
  encodeURIComponent("Conversa sobre projeto") +
  "&body=" +
  encodeURIComponent(
    "Olá, Hiarley!\n\nCheguei pelo seu portfólio e quero conversar sobre um projeto.\n",
  );

export type Cargo = {
  titulo: string;
  periodo: string;
  escopo: string;
  desfechos: string[];
};

export type Empresa = {
  nome: string;
  local: string;
  modelo: string;
  periodo: string;
  cargos: Cargo[];
};

export const experiencia: Empresa[] = [
  {
    nome: "Chatvolt",
    local: "Campinas, SP",
    modelo: "remoto",
    periodo: "ago 2025 → hoje",
    cargos: [
      {
        titulo: "Software Engineer (Platform)",
        periodo: "jul 2026 → hoje",
        escopo:
          "Plataforma multi-tenant: confiabilidade, release e infraestrutura de uma base grande de usuários.",
        desfechos: [
          "escalabilidade comprovada: a arquitetura sustenta alto tráfego e volume de dados, com o isolamento de cada organização mantido no backend",
          "lançamentos à prova de falhas: esteira que reproduz o ambiente real (banco, cache, busca, storage e e-mail) e valida checkout, assinaturas, upgrade, downgrade e cancelamento antes de qualquer release",
          "segurança de nível corporativo: dados de empresas diferentes isolados na mesma plataforma, o que viabilizou clientes enterprise com LLMs próprios e exigência rígida de privacidade",
          "consentimento da LGPD automatizado por WhatsApp, com data, versão do termo e aceite registrados no inbox para auditoria",
          "modernização para Node 24 e Next.js, com auditoria de dependências e redução da superfície de ataque",
        ],
      },
      {
        titulo: "Backend Engineer · Integrações",
        periodo: "out 2025 → jun 2026",
        escopo: "APIs e integrações que ligam agentes de IA a WhatsApp, Instagram, Z-API e Notion.",
        desfechos: [
          "automações em n8n, Make e Google Apps Script que cortaram até 80% do custo operacional de clientes",
          "scripts em Python para testes, validação de integrações e investigação de falhas",
        ],
      },
      {
        titulo: "Customer Support",
        periodo: "ago 2025 → out 2025",
        escopo: "Atendimento a clientes e ponte entre clientes e times técnicos.",
        desfechos: [],
      },
    ],
  },
  {
    nome: "CodXiss",
    local: "Tianguá, CE",
    modelo: "presencial",
    periodo: "2025",
    cargos: [
      {
        titulo: "Desenvolvedor Backend",
        periodo: "2025",
        escopo: "Backend em Go (Gin) com servidor de filas próprio, para tirar gargalos da operação.",
        desfechos: [
          "filas próprias em RabbitMQ descentralizando requisições internas e eliminando gargalos",
          "observabilidade com Prometheus e Grafana sobre requisições, memória e saúde da aplicação",
          "entrega automatizada com GitHub Actions, encurtando o ciclo de release",
        ],
      },
    ],
  },
];

/**
 * A esteira de release, como ela realmente é: nenhum valor de amostra, só os
 * passos e serviços que o pipeline executa (fonte: CV do autor).
 */
export const releaseDaPlataforma = {
  titulo: "Esteira de release",
  contexto: "Chatvolt · GitHub Actions · infraestrutura efêmera",
  legenda:
    "O que a esteira executa antes de publicar. Os serviços e os passos vêm do pipeline real descrito no CV; não há número de amostra nesta figura.",
  linhas: [
    ["serviços efêmeros", "postgres, redis, qdrant, s3 e smtp subindo do zero a cada corrida"],
    ["build de produção", "validado no mesmo artefato que vai para o ar"],
    ["migrações", "aplicadas contra o banco efêmero antes de qualquer liberação"],
    ["fluxo de receita", "checkout, assinatura, upgrade, downgrade, periodicidade e cancelamento"],
    ["artefato", "liberado só depois de toda a esteira passar"],
  ],
} as const;

export const instituicoesDeEnsino = [
  { tipo: "CollegeOrUniversity", nome: "IFCE · Campus Tianguá" },
  {
    tipo: "EducationalOrganization",
    nome: "EEEP Professor Sebastião Vasconcelos Sobrinho",
  },
] as const;

export const areasDeConhecimento = [
  "Go",
  "Node.js",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "RabbitMQ",
  "Docker",
  "AWS",
  "GitHub Actions",
  "observabilidade",
] as const;

export type Projeto = {
  nome: string;
  periodo: string;
  resumo: string;
  itens: string[];
  links: { rotulo: string; href: string }[];
  ficha?: [string, string][];
  legendaCaptura?: string;
  paleta?: { nome: string; hex: string }[];
  captura?: { src: string; largura: number; altura: number; alt: string };
};

export const projetos: Projeto[] = [
  {
    nome: "Tavares Odontologia",
    periodo: "2025",
    resumo:
      "Landing page da clínica Tavares Odontologia, em Caratinga–MG: especialidades, equipe e o caminho direto para o agendamento por WhatsApp.",
    itens: [
      "Página leve em HTML, CSS e JavaScript, sem framework, publicada na Vercel e no ar em tavaresodontologiactga.com.br.",
      "Navegação entre início, sobre e casos de sucesso, com o agendamento por WhatsApp presente em toda a página.",
      "Oito especialidades e a equipe da clínica em seções escaneáveis, responsivas e otimizadas para celular.",
      "Identidade aplicada direto no CSS: Bricolage Grotesque no display, DM Sans no corpo e zero raio de canto.",
    ],
    links: [
      {
        rotulo: "tavaresodontologiactga.com.br",
        href: "https://www.tavaresodontologiactga.com.br/",
      },
      { rotulo: "github.com/MarkHiarley/lp-tavares", href: "https://github.com/MarkHiarley/lp-tavares" },
    ],
    ficha: [
      ["entrega", "landing page estática, publicada"],
      ["stack", "HTML · CSS · JavaScript · Vercel · DNS no Cloudflare"],
    ],
    legendaCaptura: "captura do autor em 09/10/2026, do deploy em lp-tavares.vercel.app",
    captura: {
      src: "/amostras/tavares-odontologia.png",
      largura: 2561,
      altura: 1380,
      alt: "Captura da página inicial da Tavares Odontologia: o cabeçalho da clínica, a manchete, os botões de agendamento e a foto da sala de atendimento.",
    },
    paleta: [
      { nome: "ink", hex: "#122B27" },
      { nome: "paper", hex: "#F3F0E8" },
      { nome: "gold", hex: "#C7A45E" },
      { nome: "coral", hex: "#E86F54" },
    ],
  },
  {
    nome: "EcoRadar",
    periodo: "2024 → 2025",
    resumo:
      "Plataforma de monitoramento ambiental em tempo real, criada para tornar acessíveis os dados de focos de incêndio.",
    itens: [
      "1º lugar na Olimpíada Brasileira de Tecnologia (OBT 2025), categoria C3, e medalha de prata representando o Ceará na Semana EAT, em São José dos Campos.",
      "Scripts em Python para mapear e categorizar grandes volumes de dados em CSV e remover falsos positivos nos registros de focos.",
      "Dados públicos de focos de incêndio transformados em leitura simples para quem não é técnico, com apoio da SEDUC-CE.",
      "Apresentações do projeto na Lumen, na Fatec e na Unifesp.",
    ],
    links: [{ rotulo: "eco-radar.enemestudei.com", href: "https://eco-radar.enemestudei.com/" }],
  },
  {
    nome: "eNem Estudei",
    periodo: "2024 → 2025",
    resumo:
      "Plataforma educacional de IA para a preparação ao ENEM, voltada a escolas (B2B) e a estudantes.",
    itens: [
      "Frontend completo em React (Next.js): landing institucional B2B em dark mode, planos, contato e agendamento de demonstração.",
      "Infraestrutura inteira sob minha responsabilidade: Nginx como reverse proxy, TLS/SSL com Certbot, DNS, portas HTTP/HTTPS e hospedagem em AWS (EC2, S3, VPC), Hostinger e Hostgator.",
      "CI/CD para deploy automatizado, com foco em disponibilidade e escalabilidade.",
      "IA generativa, simulados personalizados e plantão de dúvidas 24/7 por LLM.",
    ],
    links: [
      { rotulo: "enemestudei.com", href: "https://enemestudei.com" },
      { rotulo: "enemestudei.com/b2b", href: "https://enemestudei.com/b2b" },
    ],
  },
  {
    nome: "Ceará Científico 2025",
    periodo: "2025",
    resumo: "Robótica, automação e aplicações das TIC.",
    itens: [
      "1º lugar na etapa regional da CREDE 05 (Ibiapaba), categoria Ensino Médio, entre todas as escolas da região.",
      "Projeto classificado para a etapa estadual do Ceará Científico 2025.",
    ],
    links: [],
  },
];

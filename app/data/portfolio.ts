import {
  Braces,
  Cloud,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Globe2,
  Layers3,
  Network,
  Palette,
  Server,
  Smartphone,
} from "lucide-react";

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export const skills = [
  { name: "HTML", icon: FileCode2 },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Braces },
  { name: "TypeScript", icon: Code2 },
  { name: "React", icon: Layers3 },
  { name: "Node.js", icon: Server },
  { name: "Ruby on Rails", icon: Code2 },
  { name: "PHP", icon: Code2 },
  { name: "WordPress", icon: Globe2 },
  { name: "Bootstrap", icon: Palette },
  { name: "PostgreSQL", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "APIs REST", icon: Network },
  { name: "Git", icon: GitBranch },
  { name: "API Sankhya", icon: Network },
];

export const projects = [
  {
    title: "Norte Sul Sementes",
    description:
      "Sistema de gestão e soluções digitais para uma distribuidora de sementes.",
    technologies: ["React", "Node.js", "MySQL"],
    type: "dashboard",
    cover: "/projeto-norte-sul.png",
    gallery: [
      "/projeto-norte-sul.png",
      "/norte-sul-fila-conferencia.png",
      "/norte-sul-conferencia-pedido.png",
      "/norte-sul-pedido-conferido.png",
    ],
    href: "#contato",
  },
  {
    title: "App Estoque",
    description:
      "Aplicativo para controle e contagem de estoque com leitura de código de barras.",
    technologies: ["React Native", "API", "MySQL"],
    type: "mobile",
    cover: [
      "/app-estoque-separacao.png",
      "/app-estoque-confirmacao.png",
    ],
    gallery: undefined,
    href: "#contato",
  },
  {
    title: "WhatsApp Bot",
    description:
      "Bot inteligente para atendimento, busca de produtos e automação de mensagens.",
    technologies: ["Node.js", "Baileys", "API Sankhya"],
    type: "bot",
    cover: undefined,
    gallery: undefined,
    href: "#contato",
  },
];

export const experiences = [
  {
    company: "Norte Sul Sementes",
    period: "2 anos",
    role: "Desenvolvedor de Sistemas / Analista de TI",
    description:
      "Desenvolvimento e personalização de sistemas internos e CRM, integrações com a API do ERP Sankhya, WhatsApp, bancos de dados e plataformas externas, além de automações para rotinas administrativas, comerciais e operacionais.",
  },
  {
    company: "WebTech",
    period: "08/2021 — 2022",
    role: "Programador Web",
    description:
      "Desenvolvimento e manutenção de sistemas de compensação previdenciária utilizados pelos estados do Rio Grande do Norte e Pará, utilizando Ruby on Rails, JavaScript, PostgreSQL, SQL, Bootstrap e AWS.",
  },
  {
    company: "WebTech",
    period: "11/2020 — 08/2021",
    role: "Estagiário de Desenvolvimento Web",
    description:
      "Apoio no desenvolvimento, testes e manutenção de sistemas de compensação previdenciária com Ruby on Rails, JavaScript, PostgreSQL e Bootstrap.",
  },
  {
    company: "EIT — UFMT",
    period: "04/2019 — 09/2021",
    role: "Estagiário de Desenvolvimento Web",
    description:
      "Desenvolvimento e manutenção de portal institucional em WordPress, com publicação de notícias, notificações, cadastro de e-mails, carrosséis e linha do tempo.",
  },
  {
    company: "PRAE — UFMT",
    period: "04/2017 — 09/2018",
    role: "Estagiário de Desenvolvimento Web",
    description:
      "Levantamento de necessidades e desenvolvimento autônomo de um sistema para cadastro de alunos e análise de perfis utilizando PHP, HTML, Bootstrap e MySQL.",
  },
];

export const socialLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/leonardo-gabriel-42a861210",
  instagram: "https://www.instagram.com/",
  email: "mailto:leop.gabriel9@gmail.com",
  whatsapp:
    "https://wa.me/5566997212427?text=Olá%20Leonardo!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.",
};

export const profile = {
  photo: "/leonardo-gabriel.png",
  cv: "/curriculo-leonardo-gabriel.pdf",
};

export const projectVisualIcons = {
  dashboard: Layers3,
  mobile: Smartphone,
  bot: Network,
};

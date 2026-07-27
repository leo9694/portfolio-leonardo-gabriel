import {
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Layers3,
  Network,
  Palette,
  Server,
  Smartphone,
  Terminal,
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
  { name: "Python", icon: Terminal },
  { name: "PHP", icon: Code2 },
  { name: "MySQL", icon: Database },
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
    period: "2022 — Atual",
    role: "Desenvolvedor Full Stack",
    description:
      "Desenvolvimento de sistemas internos, integrações com API Sankhya, criação e personalização de CRM, integrações com WhatsApp e automações.",
  },
  {
    company: "WebTech",
    period: "2021 — 2022",
    role: "Estagiário Desenvolvedor",
    description:
      "Desenvolvimento de aplicações web com Ruby on Rails, JavaScript, PostgreSQL e deploy na AWS.",
  },
  {
    company: "UFMT",
    period: "2019 — 2021",
    role: "Estagiário Desenvolvedor",
    description:
      "Desenvolvimento de sistemas e sites com PHP, HTML, CSS, Bootstrap e WordPress.",
  },
];

export const socialLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
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

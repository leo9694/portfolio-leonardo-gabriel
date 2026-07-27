"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownToLine, ArrowRight, ArrowUp, BriefcaseBusiness, CalendarDays,
  Camera, Check, ExternalLink, GitBranch, GraduationCap, Link, Mail,
  MapPin, Menu, MessageCircle, Rocket, UserRound, X,
} from "lucide-react";
import {
  experiences, navigation, profile, projects, skills, socialLinks,
} from "../data/portfolio";
import { ProjectVisual } from "./ProjectVisual";
import { SectionHeading } from "./SectionHeading";

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-32% 0px -58% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" onClick={closeMenu}>
            Leonardo <span>Gabriel</span><i aria-hidden="true">.</i>
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Menu principal">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href.slice(1) ? "active" : ""}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a className="button button--cv" href={profile.cv} download>
              Download CV <ArrowDownToLine size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="hero-kicker">Olá, eu sou</span>
              <h1>Leonardo <span>Gabriel</span></h1>
              <p className="hero-role">Desenvolvedor Full Stack</p>
              <p className="hero-description">
                Desenvolvo aplicações web modernas, rápidas e responsivas, com foco em
                experiência do usuário, integrações e automação de processos.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#projetos">
                  Ver meus projetos <ArrowRight size={18} />
                </a>
                <a className="button button--secondary" href="#contato">
                  Entrar em contato <MessageCircle size={18} />
                </a>
              </div>
              <div className="socials" aria-label="Redes sociais">
                <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch /></a>
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Link /></a>
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Camera /></a>
                <a href={socialLinks.email} aria-label="E-mail"><Mail /></a>
              </div>
            </div>

            <div className="portrait-wrap reveal reveal--delay">
              <div className="portrait-halo" aria-hidden="true" />
              <div className="portrait-card">
                {profile.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profile.photo} alt="Leonardo Gabriel, Desenvolvedor Full Stack" />
                ) : (
                  <div className="portrait-placeholder">
                    <UserRound size={88} strokeWidth={1} />
                    <strong>Sua foto profissional</strong>
                    <span>Configure em app/data/portfolio.ts</span>
                  </div>
                )}
                <span className="portrait-corner portrait-corner--one" aria-hidden="true" />
                <span className="portrait-corner portrait-corner--two" aria-hidden="true" />
              </div>
              <div className="availability">
                <i aria-hidden="true" />
                <span><strong>Disponível</strong> para novos projetos</span>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#sobre" aria-label="Ir para a seção Sobre">
            <span>Role para descobrir</span>
            <ArrowDownToLine size={16} />
          </a>
        </section>

        <section id="sobre" className="section section--about">
          <div className="container about-grid">
            <div className="about-copy reveal">
              <SectionHeading eyebrow="Sobre mim" title="Quem sou eu?" />
              <p>
                Sou desenvolvedor Full Stack apaixonado por tecnologia e por criar
                soluções que fazem a diferença. Tenho experiência com desenvolvimento de
                sistemas, integrações, APIs, CRM e automação de processos.
              </p>
              <div className="about-signature"><span />Tecnologia com propósito</div>
            </div>
            <div className="stats-grid reveal reveal--delay">
              <article className="stat-card">
                <CalendarDays /><strong>2+</strong><span>Anos de experiência</span>
              </article>
              <article className="stat-card">
                <MapPin /><strong>Jaciara — MT</strong><span>Localização</span>
              </article>
              <article className="stat-card">
                <GraduationCap /><strong>Técnico em Desenvolvimento de Sistemas</strong><span>Formação</span>
              </article>
              <article className="stat-card">
                <Rocket /><strong>Focado em resultados e inovação</strong><span>Mindset</span>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section section--skills">
          <div className="container">
            <div className="section-row">
              <SectionHeading eyebrow="Minhas Skills" description="Tecnologias que transformo em soluções." />
              <span className="section-index" aria-hidden="true">01</span>
            </div>
            <div className="skills-grid reveal">
              {skills.map(({ name, icon: Icon }) => (
                <article className="skill-card" key={name}>
                  <Icon aria-hidden="true" />
                  <span>{name}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="section section--projects">
          <div className="container">
            <div className="section-row">
              <SectionHeading eyebrow="Projetos em destaque" description="Soluções que unem estratégia, design e código." />
              <a className="text-link" href="#contato">Ver todos os projetos <ArrowRight size={17} /></a>
            </div>
            <div className="projects-grid reveal">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <span className="project-number">0{index + 1}</span>
                  <ProjectVisual type={project.type} />
                  <div className="project-content">
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                      <a href={project.href} aria-label={`Abrir projeto ${project.title}`}><ExternalLink /></a>
                    </div>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="section section--experience">
          <div className="container">
            <div className="section-row">
              <SectionHeading eyebrow="Experiência profissional" description="Uma trajetória construída resolvendo problemas reais." />
              <span className="section-index" aria-hidden="true">03</span>
            </div>
            <div className="timeline reveal">
              {experiences.map((experience) => (
                <article className="timeline-item" key={experience.company}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-company">
                    <h3>{experience.company}</h3>
                    <span>{experience.role}</span>
                  </div>
                  <time>{experience.period}</time>
                  <p>{experience.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section section--contact">
          <div className="container contact-card reveal">
            <div className="contact-copy">
              <span className="eyebrow"><span aria-hidden="true" />Entre em contato</span>
              <h2>Vamos conversar sobre<br />o seu <em>projeto!</em></h2>
              <p>Estou disponível para novas oportunidades.</p>
            </div>
            <div className="contact-links">
              <a href={socialLinks.email}>
                <span><Mail /></span>
                <div><small>E-mail</small><strong>leop.gabriel9@gmail.com</strong></div>
                <ArrowRight />
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
                <span><MessageCircle /></span>
                <div><small>WhatsApp</small><strong>(66) 99721-2427</strong></div>
                <ArrowRight />
              </a>
              <div className="contact-location">
                <span><MapPin /></span>
                <div><small>Localização</small><strong>Jaciara — MT</strong></div>
                <Check />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <a className="brand brand--footer" href="#inicio">Leonardo <span>Gabriel</span><i>.</i></a>
          <p>© 2026 Leonardo Gabriel. Todos os direitos reservados.</p>
          <div className="footer-note"><BriefcaseBusiness size={15} /> Desenvolvido com atenção aos detalhes</div>
        </div>
      </footer>
      <a className="back-to-top" href="#inicio" aria-label="Voltar ao topo"><ArrowUp /></a>
    </>
  );
}

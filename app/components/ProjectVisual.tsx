import { Check, Maximize2, MessageCircle } from "lucide-react";

type ProjectVisualProps = {
  type: string;
  cover?: string | string[];
  title: string;
  onOpen?: (index: number) => void;
};

export function ProjectVisual({ type, cover, title, onOpen }: ProjectVisualProps) {
  if (Array.isArray(cover)) {
    return (
      <div className="project-visual project-visual--mobile-covers">
        {cover.map((image, index) => (
          <button
            key={image}
            className="project-cover-trigger"
            type="button"
            onClick={() => onOpen?.(index)}
            aria-label={`Ampliar ${title} - tela ${index + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={`${title} - tela ${index + 1}`} />
            <span className="cover-zoom" aria-hidden="true"><Maximize2 /></span>
          </button>
        ))}
      </div>
    );
  }

  if (cover) {
    return (
      <button
        className="project-visual project-visual--cover"
        type="button"
        onClick={() => onOpen?.(0)}
        aria-label={`Ampliar imagem do projeto ${title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cover} alt={`Tela do projeto ${title}`} />
        <span className="cover-zoom" aria-hidden="true"><Maximize2 /></span>
      </button>
    );
  }

  if (type === "mobile") {
    return (
      <div className="project-visual visual-mobile" aria-hidden="true">
        <div className="phone">
          <i />
          <span className="phone-title" />
          <span />
          <span />
          <span />
        </div>
        <div className="phone phone--back">
          <i />
          <span className="phone-title" />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  if (type === "bot") {
    return (
      <div className="project-visual visual-bot" aria-hidden="true">
        <div className="bot-orb">
          <MessageCircle size={44} strokeWidth={1.8} />
        </div>
        <div className="bot-panel">
          <span><Check size={12} /> Catálogo conectado</span>
          <span><Check size={12} /> Atendimento ativo</span>
          <span><Check size={12} /> ERP sincronizado</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual visual-dashboard" aria-hidden="true">
      <div className="dash-sidebar"><i /><i /><i /><i /></div>
      <div className="dash-main">
        <div className="dash-top"><span /><span /><span /></div>
        <div className="dash-chart">
          {[24, 40, 32, 58, 48, 76, 62].map((height) => (
            <i key={height} style={{ height }} />
          ))}
        </div>
      </div>
    </div>
  );
}

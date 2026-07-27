import { Check, MessageCircle } from "lucide-react";

export function ProjectVisual({ type }: { type: string }) {
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

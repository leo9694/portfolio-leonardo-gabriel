import type { Metadata } from "next";
import { Portfolio } from "./components/Portfolio";

export const metadata: Metadata = {
  title: "Leonardo Gabriel | Desenvolvedor de Sistemas e Analista de TI",
  description:
    "Portfólio de Leonardo Gabriel, profissional de TI com experiência em desenvolvimento web, integrações de sistemas, CRM e automação.",
};

export default function Home() {
  return <Portfolio />;
}

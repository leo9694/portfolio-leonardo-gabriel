import type { Metadata } from "next";
import { Portfolio } from "./components/Portfolio";

export const metadata: Metadata = {
  title: "Leonardo Gabriel | Desenvolvedor Full Stack",
  description:
    "Portfólio de Leonardo Gabriel, Desenvolvedor Full Stack especializado em aplicações web, integrações e automação.",
};

export default function Home() {
  return <Portfolio />;
}

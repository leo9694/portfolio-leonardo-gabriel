import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../app/globals.css";
import { Portfolio } from "../app/components/Portfolio";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);

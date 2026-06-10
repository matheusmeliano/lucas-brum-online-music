import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ScrollToTop from "@/components/ScrollToTop";

const Obrigado = lazy(() => import("@/pages/Obrigado"));
const PoliticaPrivacidade = lazy(() => import("@/pages/PoliticaPrivacidade"));
const TermosCompromisso = lazy(() => import("@/pages/TermosCompromisso"));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/obrigado" element={<Obrigado />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-e-compromisso" element={<TermosCompromisso />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

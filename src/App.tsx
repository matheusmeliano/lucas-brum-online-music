import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Obrigado from "@/pages/Obrigado";
import PoliticaPrivacidade from "@/pages/PoliticaPrivacidade";
import TermosCompromisso from "@/pages/TermosCompromisso";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obrigado" element={<Obrigado />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/termos-e-compromisso" element={<TermosCompromisso />} />
      </Routes>
    </Router>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Sobre from "../pages/Sobre";
import FAQ from "../pages/faq";
import Contato from "../pages/contato";
import Integrantes from "../pages/integrantes";
import Solucao from "../pages/solucao";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/solucao" element={<Solucao />} />
      </Routes>
    </BrowserRouter>
  );
}
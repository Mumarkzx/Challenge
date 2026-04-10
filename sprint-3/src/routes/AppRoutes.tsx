import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Sobre from "../pages/Sobre";
import FAQ from "../pages/faq";
import Contato from "../pages/contato";
import Integrantes from "../pages/integrantes";
import Solucao from "../pages/solucao";
import DetalheIntegrante from "../pages/DetalheIntegrante";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/integrantes/:id" element={<DetalheIntegrante />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
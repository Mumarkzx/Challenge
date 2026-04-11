import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Página não encontrada");
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="bg-white border border-yellow-200 rounded-2xl shadow p-10 text-center">
        <h2 className="text-6xl font-extrabold text-green-400 mb-2">404</h2>
        <h3 className="text-2xl font-bold mb-4">Página não encontrada</h3>
        <p className="text-gray-600 mb-6">O endereço que você acessou não existe.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold border-0 cursor-pointer hover:bg-gray-700 transition-colors"
        >
          Voltar para o início
        </button>
      </section>
    </Layout>
  );
}
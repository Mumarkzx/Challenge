import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { integrantes } from "../data/integrantes";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function DetalheIntegrante() {
  const { id } = useParams();
  const navigate = useNavigate();

  const integrante = integrantes.find((item) => item.id === Number(id));
  useDocumentTitle(integrante ? integrante.nome : "Integrante não encontrado");

  if (!integrante) {
    return (
      <Layout>
        <section className="bg-white border border-yellow-200 rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Integrante não encontrado</h2>
          <button
            onClick={() => navigate("/integrantes")}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold border-0 cursor-pointer hover:bg-gray-700 transition-colors"
          >
            Voltar para integrantes
          </button>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold border-0 cursor-pointer hover:bg-gray-700 transition-colors"
      >
        ← Voltar
      </button>

      <section className="bg-white border border-yellow-200 rounded-2xl shadow p-6 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
        <img
          src={integrante.foto}
          alt={integrante.nome}
          className="w-full rounded-xl object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold mt-0 mb-4">{integrante.nome}</h2>
          <p className="mb-2"><strong>RM:</strong> {integrante.rm}</p>
          <p className="mb-2"><strong>Turma:</strong> {integrante.turma}</p>
          <p className="mb-2">
            <strong>GitHub:</strong>{" "}
            <a href={integrante.github} target="_blank" rel="noreferrer" className="text-green-700 break-all hover:underline">
              {integrante.github}
            </a>
          </p>
          <p className="mb-2">
            <strong>LinkedIn:</strong>{" "}
            <a href={integrante.linkedin} target="_blank" rel="noreferrer" className="text-green-700 break-all hover:underline">
              {integrante.linkedin}
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
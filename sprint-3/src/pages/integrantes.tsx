import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { integrantes } from "../data/integrantes";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Integrantes() {
  useDocumentTitle("Integrantes");
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="bg-white border border-yellow-200 rounded-2xl shadow p-6 mb-6">
        <h2 className="text-3xl font-bold mb-2">Conheça os integrantes</h2>
        <p className="text-gray-600">Equipe responsável pelo desenvolvimento e evolução do projeto.</p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {integrantes.map((item) => (
          <div key={item.id} className="bg-white border border-yellow-200 rounded-2xl shadow p-5 flex flex-col">
            <img
              src={item.foto}
              alt={item.nome}
              className="w-full aspect-square object-cover rounded-xl mb-3"
            />
            <h3 className="font-bold text-lg mt-0 mb-2">{item.nome}</h3>
            <p className="text-gray-600 text-sm mb-1">RM-{item.rm}</p>
            <p className="text-gray-600 text-sm mb-1">{item.turma}</p>
            <div className="flex gap-3 my-2">
              <a href={item.github} target="_blank" rel="noreferrer" className="text-green-700 font-semibold text-sm no-underline hover:underline">
                GitHub
              </a>
              <a href={item.linkedin} target="_blank" rel="noreferrer" className="text-green-700 font-semibold text-sm no-underline hover:underline">
                LinkedIn
              </a>
            </div>
            <div className="mt-auto flex gap-2 pt-2">
              <Link
                to={`/integrantes/${item.id}`}
                className="text-sm no-underline bg-gray-900 text-white px-3 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Ver perfil
              </Link>
              <button
                onClick={() => navigate(`/integrantes/${item.id}`)}
                className="text-sm bg-green-400 text-gray-900 px-3 py-2 rounded-lg font-semibold border-0 cursor-pointer hover:bg-green-500 transition-colors"
              >
                Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
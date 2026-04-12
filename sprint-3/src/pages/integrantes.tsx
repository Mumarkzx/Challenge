import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { integrantes } from "../data/integrantes";
import useDocumentTitle from "../hooks/useDocumentTitle";

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

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
            <div className="flex gap-3 my-2 items-center">
              <a href={item.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-800 hover:text-black transition-colors">
                <GitHubIcon />
              </a>
              <a href={item.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-900 transition-colors">
                <LinkedInIcon />
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
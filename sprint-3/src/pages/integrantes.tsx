import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { integrantes } from "../data/integrantes";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Integrantes() {
  useDocumentTitle("Integrantes");

  return (
    <Layout>
      <section className="content-section">
        <h2>Conheca os integrantes</h2>
        <p>Equipe responsavel pelo desenvolvimento e evolucao do projeto.</p>
      </section>

      <div className="integrantes-section">
        <div className="integrantes-container">
          {integrantes.map((item) => (
            <div className="integrante-card" key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <h3>{item.nome}</h3>
              <p>RM-{item.rm}</p>
              <p>{item.turma}</p>
              <p>
                <a href={item.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </p>
              <p>
                <a href={item.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </p>
              <Link className="card-link" to={`/integrantes/${item.id}`}>
                Ver perfil completo
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

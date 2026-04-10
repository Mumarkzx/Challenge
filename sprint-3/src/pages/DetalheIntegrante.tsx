
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { integrantes } from "../data/integrantes";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function DetalheIntegrante() {
  const { id } = useParams();

  const integrante = integrantes.find((item) => item.id === Number(id));
  useDocumentTitle(integrante ? integrante.nome : "Integrante nao encontrado");

  if (!integrante) {
    return (
      <Layout>
        <section className="content-section">
          <h2>Integrante nao encontrado</h2>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="integrante-detail">
        <img src={integrante.foto} alt={integrante.nome} />
        <div className="integrante-detail-content">
          <h2>{integrante.nome}</h2>
          <p>
            <strong>RM:</strong> {integrante.rm}
          </p>
          <p>
            <strong>Turma:</strong> {integrante.turma}
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href={integrante.github} target="_blank" rel="noreferrer">
              {integrante.github}
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href={integrante.linkedin} target="_blank" rel="noreferrer">
              {integrante.linkedin}
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
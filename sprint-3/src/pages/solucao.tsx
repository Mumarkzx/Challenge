import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Solucao() {
  useDocumentTitle("Solucao");

  return (
    <Layout>
      <section className="content-section">
        <h2>Nossa solucao</h2>
        <p>
          A proposta combina triagem social, atendimento odontologico continuo
          e acompanhamento dos pacientes com foco em prevencao e qualidade de
          vida.
        </p>
      </section>

      <section className="cards-grid">
        <article className="info-card">
          <h3>Dentista do Bem</h3>
          <p>Atendimento voluntario para jovens de baixa renda.</p>
        </article>
        <article className="info-card">
          <h3>Educacao preventiva</h3>
          <p>Orientacao sobre higiene e saude bucal nas comunidades.</p>
        </article>
        <article className="info-card">
          <h3>Rede de parceiros</h3>
          <p>Empresas e instituicoes apoiando infraestrutura e alcance.</p>
        </article>
      </section>
    </Layout>
  );
}
import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("Home");

  return (
    <Layout>
      <section className="page-hero">
        <span className="badge">Impacto social</span>
        <h2>Saude bucal transforma futuros</h2>
        <p>
          A Turma do Bem conecta voluntarios, pacientes e parceiros para levar
          atendimento odontologico a quem mais precisa.
        </p>
      </section>

      <section className="stats-grid">
        <article className="stat-card">
          <h3>Diversas localidades</h3>
          <p>Rede de dentistas e apoiadores.</p>
        </article>
        <article className="stat-card">
          <h3>Mais de 80 mil</h3>
          <p>Criancas e jovens impactados pelos programas.</p>
        </article>
        <article className="stat-card">
          <h3>Voluntariado ativo</h3>
          <p>Profissionais que doam tempo e conhecimento.</p>
        </article>
      </section>
    </Layout>
  );
}
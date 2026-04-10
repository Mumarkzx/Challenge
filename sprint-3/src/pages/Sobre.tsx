import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Sobre() {
  useDocumentTitle("Sobre");

  return (
    <Layout>
      <section className="content-section">
        <h2>Sobre a Turma do Bem</h2>
        <p>
          A Turma do Bem e uma organizacao social que amplia o acesso a saude
          bucal para criancas e adolescentes em situacao de vulnerabilidade.
        </p>
        <p>
          O projeto atua por meio de uma rede colaborativa de dentistas
          voluntarios, empresas parceiras e a propria comunidade.
        </p>
      </section>
    </Layout>
  );
}
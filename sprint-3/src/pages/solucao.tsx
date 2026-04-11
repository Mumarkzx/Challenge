import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Solucao() {
  useDocumentTitle("Solução");

  return (
    <Layout>
      <section className="bg-white border border-yellow-200 rounded-2xl shadow p-6 mb-6">
        <h2 className="text-3xl font-bold mb-2">Nossa solução</h2>
        <p className="text-gray-600">
          A proposta combina triagem social, atendimento odontológico contínuo e acompanhamento
          dos pacientes com foco em prevenção e qualidade de vida.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <article className="bg-white border border-yellow-200 rounded-2xl shadow p-5">
          <h3 className="font-bold text-lg mt-0 mb-2">Dentista do Bem</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Atendimento voluntário para jovens de baixa renda.</p>
        </article>
        <article className="bg-white border border-yellow-200 rounded-2xl shadow p-5">
          <h3 className="font-bold text-lg mt-0 mb-2">Educação preventiva</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Orientação sobre higiene e saúde bucal nas comunidades.</p>
        </article>
        <article className="bg-white border border-yellow-200 rounded-2xl shadow p-5">
          <h3 className="font-bold text-lg mt-0 mb-2">Rede de parceiros</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Empresas e instituições apoiando infraestrutura e alcance.</p>
        </article>
      </div>
    </Layout>
  );
}
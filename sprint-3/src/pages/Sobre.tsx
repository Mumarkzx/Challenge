import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Sobre() {
  useDocumentTitle("Sobre");
  return (
    <Layout>
      <section className="bg-white border border-yellow-200 rounded-2xl shadow p-6 mb-6">
        <h2 className="text-3xl font-bold mb-3">Sobre nós</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A Turma do Bem é uma organização sem fins lucrativos que tem como missão levar saúde bucal e sorrisos para crianças e adolescentes em situação de vulnerabilidade social. Fundada em 2003, a ONG já impactou a vida de milhares de jovens por meio de tratamentos odontológicos gratuitos e ações educativas.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Nossa equipe é composta por voluntários dedicados, incluindo dentistas, estudantes de odontologia e profissionais de diversas áreas, que trabalham juntos para proporcionar um futuro melhor para aqueles que mais precisam.
        </p>
        <aside className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
          <h3 className="font-bold text-lg mb-1">Nossa missão</h3>
          <p className="text-gray-600">Promover inclusão social por meio do acesso à saúde bucal, transformando vidas com dignidade e sorriso.</p>
        </aside>
        <h3 className="font-bold text-lg mb-1">Nossa visão</h3>
        <p className="text-gray-600">Ser referência nacional em ações de saúde bucal para crianças e adolescentes em situação de vulnerabilidade social.</p>
      </section>

      <section className="bg-white border border-yellow-200 rounded-2xl shadow p-6">
        <h4 className="text-xl font-bold mb-6 text-center">Programas</h4>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="text-center flex-1">
            <img
              src="/img/img_dentistaBem.jpg"
              alt="Dentista do Bem"
              className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
            />
            <h5 className="font-bold text-lg mb-2">Dentista do Bem</h5>
            <p className="text-gray-600 text-sm leading-relaxed">
              Destinado a crianças e adolescentes em situação de vulnerabilidade social na faixa dos 11 a 17 anos. Os beneficiários recebem atendimento odontológico gratuito até completarem 18 anos.
            </p>
          </div>
          <div className="text-center flex-1">
            <img
              src="/img/apolonias-do-bem-1.png"
              alt="Apolônias do Bem"
              className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
            />
            <h5 className="font-bold text-lg mb-2">Apolônias do Bem</h5>
            <p className="text-gray-600 text-sm leading-relaxed">
              Oferece tratamento odontológico gratuito para mulheres cis e trans que vivenciaram situações de violência e tiveram a dentição afetada pelas agressões.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
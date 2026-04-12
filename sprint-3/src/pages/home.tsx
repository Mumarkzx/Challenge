import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("Home");
  return (
    <Layout>
      <img
        src="/img/img1.webp"
        alt="Turma do bem"
        className="w-full rounded-2xl object-cover max-h-80 mb-4"
      />
      <div className="text-center italic text-gray-600 mb-6">
        <p>"Um sorriso pode mudar tudo. A Turma do Bem leva saúde bucal a quem mais precisa."</p>
      </div>

      <div className="bg-white rounded-2xl shadow p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Bem-vindo à Turma do Bem!</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A Turma do Bem é uma organização sem fins lucrativos dedicada a levar saúde bucal e sorrisos para crianças e adolescentes em situação de vulnerabilidade social.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Desde nossa fundação, já impactamos milhares de vidas, proporcionando cuidados dentários essenciais e educação sobre higiene bucal.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Junte-se a nós nessa missão! Seja como voluntário, doador ou parceiro, sua contribuição faz toda a diferença.
        </p>

        <section className="bg-yellow-100 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-3 text-center">Estatísticas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">     
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-green-600 text-lg">+82 mil</p>
              <p className="text-gray-600 text-sm">jovens atendidos</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-green-600 text-lg">+1.1 mil</p>
              <p className="text-gray-600 text-sm">mulheres atendidas</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-green-600 text-lg">+18 mil</p>
              <p className="text-gray-600 text-sm">dentistas voluntários</p>
            </div>
          </div>
        </section>

        <h3 className="font-bold text-lg mb-2">Como você pode ajudar:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Seja um voluntário e participe das nossas ações.</li>
          <li>Faça uma doação para apoiar nossos projetos.</li>
          <li>Compartilhe nossa missão com amigos e familiares.</li>
        </ul>
      </div>
    </Layout>
  );
}
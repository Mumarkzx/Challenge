import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("Home");
  return (
    <Layout>
      <img id="hero" src="/img/img1.webp" alt="Turma do bem" />
      <div id="legendas">
        <p>"Um sorriso pode mudar tudo. A Turma do Bem leva saúde bucal a quem mais precisa."</p>
      </div>
      <main>
        <h2>Bem-vindo à Turma do Bem!</h2>
        <p>
          A Turma do Bem é uma organização sem fins lucrativos dedicada a levar saúde bucal e sorrisos para crianças e adolescentes em situação de vulnerabilidade social. Nosso objetivo é transformar vidas por meio do acesso a tratamentos odontológicos gratuitos, promovendo o bem-estar e a autoestima.
        </p>
        <p>
          Desde nossa fundação, já impactamos milhares de vidas, proporcionando cuidados dentários essenciais e educação sobre higiene bucal. Acreditamos que um sorriso saudável é um direito de todos, e trabalhamos incansavelmente para garantir que mais pessoas tenham acesso a esse direito.
        </p>
        <p>
          Junte-se a nós nessa missão! Seja como voluntário, doador ou parceiro, sua contribuição faz toda a diferença. Vamos juntos construir um futuro mais sorridente para nossas crianças e adolescentes.
        </p>
        <aside>
          <section className="estatisticas">
            <div className="conteudo">
              <h2><span>Estatísticas</span></h2>
              <p><span>+82 mil jovens atendidos</span></p>
              <p><span>+1.1 mil mulheres atendidas</span></p>
              <p><span>+18 mil dentistas voluntários</span></p>
            </div>
          </section>
          <h3>Como você pode ajudar:</h3>
          <ul>
            <li>Seja um voluntário e participe das nossas ações.</li>
            <li>Faça uma doação para apoiar nossos projetos.</li>
            <li>Compartilhe nossa missão com amigos e familiares.</li>
          </ul>
          <p>Para mais informações, visite nossas outras páginas ou entre em contato conosco!</p>
        </aside>
      </main>
    </Layout>
  );
}
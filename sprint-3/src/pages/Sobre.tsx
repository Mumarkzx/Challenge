import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Sobre() {
  useDocumentTitle("Sobre");
  return (
    <Layout>
      <section id="sobre">
        <h2>Sobre nós</h2>
        <p>
          A Turma do Bem é uma organização sem fins lucrativos que tem como missão levar saúde bucal e sorrisos para crianças e adolescentes em situação de vulnerabilidade social. Fundada em 2003, a ONG já impactou a vida de milhares de jovens por meio de tratamentos odontológicos gratuitos e ações educativas.
        </p>
        <p>
          Nossa equipe é composta por voluntários dedicados, incluindo dentistas, estudantes de odontologia e profissionais de diversas áreas, que trabalham juntos para proporcionar um futuro melhor para aqueles que mais precisam. Acreditamos que um sorriso saudável é um direito de todos, e nos esforçamos para garantir que nossas crianças e adolescentes tenham acesso a esse direito fundamental.
        </p>
        <aside>
          <h3>Nossa missão</h3>
          <p>Promover inclusão social por meio do acesso à saúde bucal, transformando vidas com dignidade e sorriso.</p>
        </aside>
        <h3>Nossa visão</h3>
        <p>Ser referência nacional em ações de saúde bucal para crianças e adolescentes em situação de vulnerabilidade social.</p>
      </section>

      <section id="programas">
        <h4>Programas</h4>
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', margin: '32px 0' }}>
          <div style={{ textAlign: 'center' }}>
            <img
              id="dentistaDoBem"
              src="/img/img_dentistaBem.jpg"
              alt="Dentista do Bem"
              style={{ width: 220, height: 220, borderRadius: '50%', objectFit: 'cover' }}
            />
            <div id="legenda1.0">
              <p>
                O Dentista do Bem é o principal programa da TdB, destinado a crianças e adolescentes em situação de vulnerabilidade social na faixa dos 11 a 17 anos. Os nossos beneficiários possuem graves problemas bucais e não têm condições financeiras de pagar pelo tratamento. Após serem selecionados e entrarem no programa, os jovens recebem atendimento odontológico e gratuito – independente da complexidade dos casos – até completarem 18 anos.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              id="apoloniasDoBem"
              src="/img/apolonias-do-bem-1.png"
              alt="Apolônias do Bem"
              style={{ width: 220, height: 220, borderRadius: '50%', objectFit: 'cover' }}
            />
            <div id="legenda1.1">
              <p>
                Apolônias do Bem oferece tratamento odontológico e gratuito para mulheres cis e trans que vivenciaram situações de violência e tiveram a dentição afetada pelas agressões. As beneficiárias são selecionadas através de triagens em que passam por um rápido exame oral, não invasivo, e respondem a uma ferramenta científica que mede o impacto da saúde bucal na qualidade de vida de uma pessoa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
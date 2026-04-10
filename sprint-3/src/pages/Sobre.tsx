import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Sobre() {
  useDocumentTitle("Sobre");
  return (
    <Layout>
      <h1>Sobre</h1>
      <div style={{ display: 'flex', gap: 32, justifyContent: 'center', margin: '32px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <img
            src="/img/img_dentistaBem.jpg"
            alt="Dentista do Bem"
            style={{ width: 220, height: 220, borderRadius: '50%', objectFit: 'cover' }}
          />
          <div style={{ marginTop: 12, fontWeight: 'bold' }}>Dentista do Bem</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img
            src="/img/apolonias-do-bem-1.png"
            alt="Apolônias do Bem"
            style={{ width: 220, height: 220, borderRadius: '50%', objectFit: 'cover' }}
          />
          <div style={{ marginTop: 12, fontWeight: 'bold' }}>Apolônias do Bem</div>
        </div>
      </div>
      <p>Coloque aqui o texto sobre o projeto, missão, visão, etc.</p>
    </Layout>
  );
}
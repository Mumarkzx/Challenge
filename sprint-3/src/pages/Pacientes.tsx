import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";
import type { Paciente } from "../types";

const API_URL = "http://localhost:8080";

export default function Pacientes() {
  useDocumentTitle("Pacientes");

  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [busca, setBusca] = useState("");

useEffect(() => {
  const carregar = async () => {
    try {
      setLoading(true);
      setErro(null);
      const res = await fetch(`${API_URL}/beneficiario`);
      if (!res.ok) throw new Error("Erro ao carregar beneficiários.");
      const data: Paciente[] = await res.json();
      setPacientes(data);
    } catch {
      setErro("Não foi possível carregar os dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  carregar();
}, []);

  const filtrados = pacientes.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) ||
    p.endereco.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Layout>
      <section className="bg-white border border-yellow-200 rounded-2xl shadow p-6 mb-6">
        <h2 className="text-3xl font-bold mb-2">Beneficiários</h2>
        <p className="text-gray-600">Lista de beneficiários atendidos pelos programas da Turma do Bem.</p>
<button
  onClick={() => window.location.reload()}
  className="mt-3 bg-green-400 text-gray-900 border-0 rounded-xl px-4 py-2 font-bold cursor-pointer hover:bg-green-500 transition-colors text-sm"
>
  Atualizar lista
</button>
      </section>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por nome ou endereço..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
        />
      </div>

      {loading && (
        <p className="text-center text-gray-500 py-10">Carregando beneficiários...</p>
      )}

      {erro && !loading && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <p className="text-red-600 font-bold mb-3">{erro}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 text-white px-4 py-2 rounded-xl font-semibold border-0 cursor-pointer hover:bg-red-600 transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      )}

      {!loading && !erro && (
        <>
          <p className="text-sm text-gray-500 mb-3">{filtrados.length} beneficiário(s) encontrado(s)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filtrados.map((paciente) => (
              <article key={paciente.idBeneficiario} className="bg-white border border-yellow-200 rounded-2xl shadow p-5 flex flex-col gap-2">
                <h3 className="font-bold text-lg">{paciente.nome}</h3>
                <p className="text-sm text-gray-600"><span className="font-semibold">Tratamento:</span> {paciente.tratamentoSolicitado}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">Status:</span> {paciente.statusVulnerabilidade}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">Endereço:</span> {paciente.endereco}</p>
                <p className="text-sm text-gray-600"><span className="font-semibold">Nascimento:</span> {new Date(paciente.dataNasc).toLocaleDateString("pt-BR")}</p>
              </article>
            ))}
          </div>
        </>
      )}
    </Layout>
  );
}
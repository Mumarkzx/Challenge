import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

import type { Paciente, StatusPaciente } from "../types";

const MOCK_PACIENTES: Paciente[] = [
  { id: 1, nome: "Ana Souza", idade: 13, programa: "Dentista do Bem", cidade: "São Paulo", status: "Em atendimento" },
  { id: 2, nome: "Carlos Lima", idade: 15, programa: "Dentista do Bem", cidade: "Campinas", status: "Concluído" },
  { id: 3, nome: "Maria Oliveira", idade: 29, programa: "Apolônias do Bem", cidade: "Santos", status: "Aguardando" },
  { id: 4, nome: "João Pedro", idade: 12, programa: "Dentista do Bem", cidade: "Guarulhos", status: "Em atendimento" },
  { id: 5, nome: "Fernanda Costa", idade: 34, programa: "Apolônias do Bem", cidade: "São Paulo", status: "Concluído" },
];

const statusColor: Record<StatusPaciente, string> = {
  "Em atendimento": "bg-green-100 text-green-800",
  "Concluído": "bg-blue-100 text-blue-800",
  "Aguardando": "bg-yellow-100 text-yellow-800",
};


export default function Pacientes() {
  useDocumentTitle("Pacientes");

  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    // Quando a API Java estiver pronta, troca o mock por:
    // const res = await fetch("https://SUA_API/pacientes");
    // const data = await res.json();
    // setPacientes(data);
    const carregar = async () => {
      await new Promise((r) => setTimeout(r, 600));
      setPacientes(MOCK_PACIENTES);
      setLoading(false);
    };
    carregar();
  }, []);

  const filtrados = pacientes.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) ||
    p.cidade.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Layout>
      <section className="bg-white border border-yellow-200 rounded-2xl shadow p-6 mb-6">
        <h2 className="text-3xl font-bold mb-2">Pacientes</h2>
        <p className="text-gray-600">Lista de pacientes atendidos pelos programas da Turma do Bem.</p>
      </section>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por nome ou cidade..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-500 py-10">Carregando pacientes...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtrados.map((paciente) => (
            <article key={paciente.id} className="bg-white border border-yellow-200 rounded-2xl shadow p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{paciente.nome}</h3>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColor[paciente.status]}`}>
                  {paciente.status}
                </span>
              </div>
              <p className="text-sm text-gray-600"><span className="font-semibold">Idade:</span> {paciente.idade} anos</p>
              <p className="text-sm text-gray-600"><span className="font-semibold">Programa:</span> {paciente.programa}</p>
              <p className="text-sm text-gray-600"><span className="font-semibold">Cidade:</span> {paciente.cidade}</p>
            </article>
          ))}
        </div>
      )}
    </Layout>
  );
}
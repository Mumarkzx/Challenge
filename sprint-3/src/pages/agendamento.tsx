import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { AgendamentoFormData, Programa } from "../types";

const programas: { value: Programa; label: string }[] = [
  { value: "Dentista do Bem", label: "Dentista do Bem" },
  { value: "Apolônias do Bem", label: "Apolônias do Bem" },
];

export default function Agendamento() {
  useDocumentTitle("Agendamento");
  const navigate = useNavigate();
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AgendamentoFormData>();

  const onSubmit = async (data: AgendamentoFormData) => {
    // Aqui vai o POST para a API Java quando estiver pronta
    console.log(data);
    await new Promise((r) => setTimeout(r, 500));
    setEnviado(true);
    reset();
  };

  if (enviado) {
    return (
      <Layout>
        <section className="bg-white border border-yellow-200 rounded-2xl shadow p-10 max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3 text-green-700">Agendamento realizado!</h2>
          <p className="text-gray-600 mb-6">Nossa equipe entrará em contato em breve.</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => setEnviado(false)} className="bg-green-400 text-gray-900 px-5 py-2 rounded-xl font-bold border-0 cursor-pointer hover:bg-green-500 transition-colors">
              Novo agendamento
            </button>
            <button onClick={() => navigate("/pacientes")} className="bg-gray-900 text-white px-5 py-2 rounded-xl font-bold border-0 cursor-pointer hover:bg-gray-700 transition-colors">
              Ver pacientes
            </button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-white border border-yellow-200 rounded-2xl shadow p-6 mb-6">
        <h2 className="text-3xl font-bold mb-2">Agendamento</h2>
        <p className="text-gray-600">Solicite um atendimento gratuito pela Turma do Bem.</p>
      </section>

      <section className="bg-white border border-yellow-200 rounded-2xl shadow p-6">
        <form className="grid gap-4 max-w-2xl" onSubmit={handleSubmit(onSubmit)} noValidate>
          
          <div>
            <label className="block font-bold text-gray-900 mb-1" htmlFor="nome">Nome completo</label>
            <input id="nome" type="text" placeholder="Ex: João da Silva"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
              {...register("nome", { required: "Informe seu nome.", minLength: { value: 3, message: "Mínimo 3 caracteres." } })}
            />
            {errors.nome && <p className="text-red-600 text-sm mt-1">{errors.nome.message}</p>}
          </div>

          <div>
            <label className="block font-bold text-gray-900 mb-1" htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="seuemail@exemplo.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
              {...register("email", { required: "Informe seu e-mail.", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "E-mail inválido." } })}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block font-bold text-gray-900 mb-1" htmlFor="telefone">Telefone</label>
            <input id="telefone" type="tel" placeholder="(11) 99999-9999"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
              {...register("telefone", { required: "Informe seu telefone." })}
            />
            {errors.telefone && <p className="text-red-600 text-sm mt-1">{errors.telefone.message}</p>}
          </div>

          <div>
            <label className="block font-bold text-gray-900 mb-1" htmlFor="idade">Idade</label>
            <input id="idade" type="number" placeholder="Ex: 14" min={1} max={120}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
              {...register("idade", { required: "Informe sua idade.", valueAsNumber: true, min: { value: 1, message: "Idade inválida." } })}
            />
            {errors.idade && <p className="text-red-600 text-sm mt-1">{errors.idade.message}</p>}
          </div>

          <div>
            <label className="block font-bold text-gray-900 mb-1" htmlFor="programa">Programa</label>
            <select id="programa"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
              {...register("programa", { required: "Selecione um programa." })}
            >
              <option value="">Selecione...</option>
              {programas.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
            </select>
            {errors.programa && <p className="text-red-600 text-sm mt-1">{errors.programa.message}</p>}
          </div>

          <div>
            <label className="block font-bold text-gray-900 mb-1" htmlFor="data">Data preferida</label>
            <input id="data" type="date" min={new Date().toISOString().split("T")[0]}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
              {...register("data", { required: "Selecione uma data." })}
            />
            {errors.data && <p className="text-red-600 text-sm mt-1">{errors.data.message}</p>}
          </div>

          <button type="submit" disabled={isSubmitting}
            className="w-fit bg-green-400 text-gray-900 border-0 rounded-xl px-6 py-3 font-bold cursor-pointer hover:bg-green-500 transition-colors disabled:opacity-75"
          >
            {isSubmitting ? "Enviando..." : "Solicitar agendamento"}
          </button>

        </form>
      </section>
    </Layout>
  );
}
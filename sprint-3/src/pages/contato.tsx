import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useForm } from "react-hook-form";

type ContatoFormData = {
  nome: string;
  email: string;
  mensagem: string;
};

export default function Contato() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<ContatoFormData>();

  useDocumentTitle("Contato");

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    reset();
  };

  return (
    <Layout>
      <section className="bg-white border border-yellow-200 rounded-2xl shadow p-6 mb-6">
        <h2 className="text-3xl font-bold mb-2">Contato</h2>
        <p className="text-gray-600">
          Quer apoiar a causa ou saber mais sobre os programas? Entre em contato com a equipe.
        </p>
      </section>

      <section className="bg-white border border-yellow-200 rounded-2xl shadow p-6">
        <form className="grid gap-3 max-w-2xl" onSubmit={handleSubmit(onSubmit)} noValidate>
          <label className="font-bold text-gray-900" htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome completo"
            autoComplete="name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 bg-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
            {...register("nome", {
              required: "Informe seu nome.",
              minLength: { value: 3, message: "Digite ao menos 3 caracteres." },
            })}
          />
          {errors.nome && <p className="text-red-600 text-sm -mt-1">{errors.nome.message}</p>}

          <label className="font-bold text-gray-900" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="seuemail@exemplo.com"
            autoComplete="email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 bg-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
            {...register("email", {
              required: "Informe seu email.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Digite um email válido.",
              },
            })}
          />
          {errors.email && <p className="text-red-600 text-sm -mt-1">{errors.email.message}</p>}

          <label className="font-bold text-gray-900" htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            rows={5}
            placeholder="Escreva sua mensagem"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 bg-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200 resize-y"
            {...register("mensagem", {
              required: "Descreva sua mensagem.",
              minLength: { value: 20, message: "A mensagem deve ter no mínimo 20 caracteres." },
            })}
          />
          {errors.mensagem && <p className="text-red-600 text-sm -mt-1">{errors.mensagem.message}</p>}

          <button         
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-fit bg-green-400 text-gray-900 border-0 rounded-xl px-5 py-3 font-bold cursor-pointer hover:bg-green-500 transition-colors duration-200 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
          </button>

          {isSubmitSuccessful && (
            <p className="text-green-700 font-bold mt-1" role="status">
              Mensagem enviada com sucesso.
            </p>
          )}
        </form>
      </section>
    </Layout>
  );
}
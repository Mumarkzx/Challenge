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
      <section className="content-section">
        <h2>Contato</h2>
        <p>
          Quer apoiar a causa ou saber mais sobre os programas? Entre em
          contato com a equipe.
        </p>
      </section>

      <section className="contact-section">
        <form className="form-contato" onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome completo"
            autoComplete="name"
            {...register("nome", {
              required: "Informe seu nome.",
              minLength: {
                value: 3,
                message: "Digite ao menos 3 caracteres.",
              },
            })}
          />
          {errors.nome && <p className="field-error">{errors.nome.message}</p>}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="seuemail@exemplo.com"
            autoComplete="email"
            {...register("email", {
              required: "Informe seu email.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Digite um email valido.",
              },
            })}
          />
          {errors.email && <p className="field-error">{errors.email.message}</p>}

          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            rows={5}
            placeholder="Escreva sua mensagem"
            {...register("mensagem", {
              required: "Descreva sua mensagem.",
              minLength: {
                value: 20,
                message: "A mensagem deve ter no minimo 20 caracteres.",
              },
            })}
          />
          {errors.mensagem && <p className="field-error">{errors.mensagem.message}</p>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
          </button>

          {isSubmitSuccessful && (
            <p className="form-success" role="status">
              Mensagem enviada com sucesso.
            </p>
          )}
        </form>
      </section>
    </Layout>
  );
}
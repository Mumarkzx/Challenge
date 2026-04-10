import { useState } from "react";
import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

const faqItems = [
  {
    question: "O que e a Turma do Bem?",
    answer:
      "E uma ONG que promove saude bucal para criancas e adolescentes em situacao de vulnerabilidade.",
  },
  {
    question: "Como posso ajudar?",
    answer:
      "Voce pode apoiar com voluntariado, doacoes ou divulgacao da causa.",
  },
  {
    question: "Quem pode participar?",
    answer:
      "Dentistas, parceiros e qualquer pessoa interessada em contribuir com o impacto social.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  useDocumentTitle("FAQ");

  const toggle = (index: number) => {
    setOpen((current) => (current === index ? null : index));
  };

  return (
    <Layout>
      <section className="content-section">
        <h2>Perguntas frequentes</h2>
        <p>Tire as principais duvidas sobre o projeto e como contribuir.</p>
      </section>

      <section className="faq-list">
        {faqItems.map((item, index) => (
          <article className={`faq-item ${open === index ? "open" : ""}`} key={item.question}>
            <button
              className="faq-question"
              onClick={() => toggle(index)}
              aria-expanded={open === index}
              aria-controls={`faq-answer-${index}`}
            >
              {item.question}
            </button>
            {open === index && (
              <p className="faq-answer" id={`faq-answer-${index}`}>
                {item.answer}
              </p>
            )}
          </article>
        ))}
      </section>
    </Layout>
  );
}
import { useState } from "react";
import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

const faqItems = [
  {
    question: "O que é a Turma do Bem?",
    answer: "É uma ONG que promove saúde bucal para crianças e adolescentes em situação de vulnerabilidade.",
  },
  {
    question: "Como posso ajudar?",
    answer: "Você pode apoiar com voluntariado, doações ou divulgação da causa.",
  },
  {
    question: "Quem pode participar?",
    answer: "Dentistas, parceiros e qualquer pessoa interessada em contribuir com o impacto social.",
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
      <section className="bg-white border border-yellow-200 rounded-2xl shadow p-6 mb-6">
        <h2 className="text-3xl font-bold mb-2">Perguntas frequentes</h2>
        <p className="text-gray-600">Tire as principais dúvidas sobre o projeto e como contribuir.</p>
      </section>

      <div className="grid gap-3">
        {faqItems.map((item, index) => (
          <article key={item.question} className="bg-white border border-yellow-200 rounded-xl overflow-hidden">
            <button
              className="w-full text-left border-0 bg-transparent px-5 py-4 text-base font-bold text-gray-900 cursor-pointer hover:bg-yellow-50 transition-colors duration-150"
              onClick={() => toggle(index)}
              aria-expanded={open === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="flex items-center justify-between">
                {item.question}
                <span className="text-green-500 text-xl">{open === index ? "−" : "+"}</span>
              </span>
            </button>
            {open === index && (
              <p className="px-5 pb-4 m-0 text-gray-600 leading-relaxed" id={`faq-answer-${index}`}>
                {item.answer}
              </p>
            )}
          </article>
        ))}
      </div>
    </Layout>
  );
}
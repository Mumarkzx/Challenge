
import { useState } from "react";
import Layout from "../components/Layout";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <Layout>
      <h2>FAQ</h2>

      <div>
        <h3 onClick={() => toggle(0)}>O que é a Turma do Bem?</h3>
        {open === 0 && <p>É uma ONG que ajuda com saúde bucal.</p>}

        <h3 onClick={() => toggle(1)}>Como posso ajudar?</h3>
        {open === 1 && <p>Você pode doar ou ser voluntário.</p>}

        <h3 onClick={() => toggle(2)}>Quem pode participar?</h3>
        {open === 2 && <p>Qualquer pessoa pode ajudar.</p>}
      </div>
    </Layout>
  );
}
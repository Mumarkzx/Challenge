import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Turma do Bem</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/integrantes">Integrantes</Link>
          </li>
          <li>
            <Link to="/solucao">Solução</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
import { NavLink } from "react-router-dom";

const navigationItems = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
  { to: "/faq", label: "FAQ" },
  { to: "/integrantes", label: "Integrantes" },
  { to: "/solucao", label: "Solução" }, 
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <div className="brand-block">
          <img
            className="brand-logo"
            src="/img/logo-tdb.jpg"
            alt="Logo Turma do Bem"
          />
          <h1 className="brand-title">Turma do Bem</h1>
        </div>

        <nav id="menu" aria-label="Menu principal">
          <ul className="menu-list">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <NavLink
  to={item.to}
  className={({ isActive }) => (isActive ? "active" : "")}
  end={item.to === "/"}
>
  {item.label}
</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
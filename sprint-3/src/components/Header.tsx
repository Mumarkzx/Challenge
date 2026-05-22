import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigationItems = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
  { to: "/faq", label: "FAQ" },
  { to: "/integrantes", label: "Integrantes" },
  { to: "/solucao", label: "Solução" },
  { to: "/agendamento", label: "Agendamento" },
  { to: "/pacientes", label: "Pacientes" },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-yellow-400 shadow">
      <div className="w-full max-w-5xl mx-auto px-4 flex items-center justify-between py-4">

        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 object-contain"
            src="/img/logo-tdb.jpg"
            alt="Logo Turma do Bem"
          />
          <h1 className="m-0 text-xl font-extrabold text-gray-900">Turma do Bem</h1>
        </div>


        <nav aria-label="Menu principal" className="hidden md:block">
          <ul className="m-0 p-0 list-none flex items-center gap-2 flex-wrap">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `no-underline px-3 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 border ${
                      isActive
                        ? "bg-white text-gray-900 border-gray-900"
                        : "bg-gray-900 text-white border-gray-900 hover:bg-white hover:text-gray-900"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden bg-gray-900 text-white border-0 rounded-lg px-3 py-2 font-bold cursor-pointer text-lg"
          onClick={() => setMenuAberto((v) => !v)}
          aria-label="Abrir menu"
        >
          {menuAberto ? "✕" : "☰"}
        </button>
      </div>

      {menuAberto && (
        <nav className="md:hidden bg-yellow-300 px-4 pb-4" aria-label="Menu mobile">
          <ul className="m-0 p-0 list-none flex flex-col gap-2">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setMenuAberto(false)}
                  className={({ isActive }) =>
                    `no-underline block px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 border ${
                      isActive
                        ? "bg-white text-gray-900 border-gray-900"
                        : "bg-gray-900 text-white border-gray-900"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
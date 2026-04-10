export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <nav aria-label="Redes sociais">
          <ul className="social-list">
          <li>
            <a
              href="https://www.facebook.com/turmadobem/?locale=pt_BR"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ongturmadobem/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/F%C3%A1bioBibancos"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          </li>
          </ul>
        </nav>

        <p>&copy; {currentYear} Turma do Bem. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
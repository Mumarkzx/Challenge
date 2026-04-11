export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-yellow-400 text-gray-900 mt-auto">
      <div className="w-full max-w-5xl mx-auto px-4 min-h-16 flex items-center justify-between gap-3 py-4 flex-wrap">
        <nav aria-label="Redes sociais">
          <ul className="m-0 p-0 list-none flex gap-3 flex-wrap">
            <li>
              <a href="https://www.facebook.com/turmadobem/?locale=pt_BR" target="_blank" rel="noreferrer" className="no-underline px-3 py-2 rounded-lg border border-gray-900 text-gray-900 bg-yellow-50 text-sm hover:bg-gray-900 hover:text-white transition-colors duration-200">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ongturmadobem/" target="_blank" rel="noreferrer" className="no-underline px-3 py-2 rounded-lg border border-gray-900 text-gray-900 bg-yellow-50 text-sm hover:bg-gray-900 hover:text-white transition-colors duration-200">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/c/F%C3%A1bioBibancos" target="_blank" rel="noreferrer" className="no-underline px-3 py-2 rounded-lg border border-gray-900 text-gray-900 bg-yellow-50 text-sm hover:bg-gray-900 hover:text-white transition-colors duration-200">
                YouTube
              </a>
            </li>
          </ul>
        </nav>
        <p className="m-0 text-sm">© {currentYear} Turma do Bem. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
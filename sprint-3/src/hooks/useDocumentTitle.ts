import { useEffect } from "react";

const BASE_TITLE = "Turma do Bem";

export default function useDocumentTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${BASE_TITLE}` : BASE_TITLE;
  }, [pageTitle]);
}

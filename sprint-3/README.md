# Turma do Bem - Sprint 3

Aplicacao React + TypeScript para apresentar a iniciativa Turma do Bem, com paginas institucionais, FAQ interativo, contato com validacao e area de integrantes com detalhes individuais.

## Stack

- React 19
- TypeScript
- Vite
- React Router
- React Hook Form
- ESLint

## Como executar

```bash
npm install
npm run dev
```

A aplicacao sobe em `http://localhost:5173`.

## Scripts disponiveis

- `npm run dev`: ambiente local com hot reload
- `npm run build`: validacao TypeScript + build de producao
- `npm run preview`: executa build localmente
- `npm run lint`: analise estatica com ESLint

## Estrutura principal

- `src/components`: layout, header e footer
- `src/pages`: paginas e rotas de conteudo
- `src/routes`: definicao central das rotas
- `src/data`: dados estaticos de integrantes
- `src/hooks`: hooks reutilizaveis (ex.: titulo da pagina)
- `src/css`: estilos globais

## Boas praticas adotadas

- Navegacao com rota 404 para paths invalidos
- Titulo de pagina dinamico por rota
- Formulario de contato com validacao de campos
- FAQ com atributos de acessibilidade (`aria-expanded` e `aria-controls`)
- Remocao de arquivos duplicados para manter o repositorio limpo

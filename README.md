# Dashboard Administrativo — React + TypeScript

Projeto da Semana 2 do plano de estudos focado em React + TS, com ênfase em formulários, validação, consumo de dados e arquitetura de componentes.

## Tech Stack

- React + TypeScript
- Tailwind CSS (dark mode)
- React Hook Form + Zod
- TanStack React Query
- MSW (mock API) ou JSON Server
- Jest + Testing Library

## Scripts

- `dev`: inicia o projeto em modo desenvolvimento
- `build`: build de produção
- `test`: roda testes
- `lint`: valida estilo de código

## Setup

1. Clonar o repositório
2. Instalar dependências: `npm install` ou `pnpm install`
3. Rodar dev: `npm run dev`
4. Mock API:
   - MSW: inicializar o worker no `main.tsx`
   - ou JSON Server: `json-server --watch db.json --port 3001`

## Features da Semana 2

- Formulário de criação de usuário com validação (RHF + Zod)
- Listagem de usuários com paginação e filtros (React Query)
- CRUD completo (create, update, delete) com optimistic update
- UI responsiva com dark mode
- Testes de componentes e forms com MSW

## Estrutura de Pastas (proposta)

```
src/
  app/
    providers/QueryClientProvider.tsx
    theme/ThemeProvider.tsx
  features/users/
    components/
    hooks/
    services/
    types/
  shared/
    components/
    hooks/
    utils/
```

## Decisões Técnicas

- Tipagem de DTOs e filtros com Utility Types
- Separação de `services` e `hooks` de dados com React Query
- Componentização de inputs e tabelas com Tailwind

## Roadmap

- Semana 3: testes de integração, arquitetura de hooks e services
- Semana 4: começar backend .NET para integrar

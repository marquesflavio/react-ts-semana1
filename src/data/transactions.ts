import type { TransactionProps } from "../components/ui/TransactionItem";

export const transactions: TransactionProps[] = [
  { id: 1, date: new Date("2026-01-05"), description: "Salário", amount: 5000, flow: "receita" },
  { id: 2, date: new Date("2026-01-06"), description: "Aluguel", amount: 1800, flow: "despesa" },
  { id: 3, date: new Date("2026-01-06"), description: "Supermercado", amount: 420.75, flow: "despesa" },
  { id: 4, date: new Date("2026-01-07"), description: "Internet", amount: 120, flow: "despesa" },
  { id: 5, date: new Date("2026-01-08"), description: "Energia elétrica", amount: 230.4, flow: "despesa" },
  { id: 6, date: new Date("2026-01-09"), description: "Freelance", amount: 950, flow: "receita" },
  { id: 7, date: new Date("2026-01-10"), description: "Restaurante", amount: 150.9, flow: "despesa" },
  { id: 8, date: new Date("2026-01-11"), description: "Assinatura Spotify", amount: 21.9, flow: "despesa" },
  { id: 9, date: new Date("2026-01-12"), description: "Venda equipamento", amount: 1200, flow: "receita" },
  { id: 10, date: new Date("2026-01-13"), description: "Transporte", amount: 85.5, flow: "despesa" },
];

export type TransactionFlow = "receita" | "despesa";

export interface TransactionProps {
  id: number;
  date: Date;
  description: string;
  amount: number;
  flow: TransactionFlow;
}

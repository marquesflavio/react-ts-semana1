import { transactions } from "../../data/transactions";
import { EmptyState } from "../ui/EmptyState";
import { TransactionItem } from "../ui/TransactionItem";

export const Transactions = () => {
  const transacoes = transactions;
  const hasTransactions = transacoes.length > 0;

  return (
    <div className="flex-col flex w-full gap-4 justify-between">
      <div className="flex gap-4 flex-col">
        {hasTransactions ? (
          transacoes.map((transacao) => (
            <TransactionItem
              key={transacao.id}
              amount={transacao.amount}
              date={transacao.date}
              description={transacao.description}
              flow={transacao.flow}
              id={transacao.id}
            />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

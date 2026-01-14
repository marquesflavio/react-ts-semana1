import { transactions } from "../../data/transactions";
import { TransactionItem } from "../ui/TransactionItem";

export const Transactions = () => {
  const transacoes = transactions;
  return (
    <div className="flex-col flex w-full gap-4 justify-between">
      <div className="flex gap-4 flex-col">
        {transacoes.map((transacao) => (
          <TransactionItem
            key={transacao.id}
            amount={transacao.amount}
            date={transacao.date}
            description={transacao.description}
            flow={transacao.flow}
            id={transacao.id}
          />
        ))}
      </div>
    </div>
  );
};

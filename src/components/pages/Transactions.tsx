import { EmptyState } from "../ui/EmptyState";
import { Filter } from "../ui/Filter";
import { TransactionItem } from "../ui/TransactionItem";
import { useTransactions } from "../../hooks/useTransactions";

export const Transactions = () => {
  const { filter, setFilter, filterOptions, filteredTransactions } = useTransactions();
  
  return (
    <div className="flex-col flex w-full gap-4 justify-between">
      <div className="flex gap-4 flex-col">
        <Filter
          label={"Filtrar transação"}
          value={filter}
          options={filterOptions}
          onChange={setFilter}
        />
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transacao) => (
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

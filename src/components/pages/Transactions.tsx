import { EmptyState } from "../ui/EmptyState";
import { Filter } from "../ui/Filter";
import { TransactionItem } from "../ui/TransactionItem";
import { useTransactions } from "../../hooks/useTransactions";

export const Transactions = () => {
  const { filter, setFilter, filterOptions, filteredTransactions, hasTransactionToShow } =
    useTransactions();

  return (
    <div className="flex-col flex w-full gap-4 justify-between">
      <div className="flex gap-4 flex-col">
        {hasTransactionToShow && (
          <div className="rounded-lg border bg-white dark:bg-gray-800 p-4">
          <Filter
            label={"Filtrar transação por tipo"}
            value={filter}
            options={filterOptions}
            onChange={setFilter}
          />
          </div>
        )}
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
          <div className="m-auto flex flex-col items-center justify-center">
            <EmptyState />
          </div>
        )}
      </div>
    </div>
  );
};

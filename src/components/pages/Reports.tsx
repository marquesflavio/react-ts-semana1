import { dashboardSummary } from "../../data/dashboard";
import { transactions } from "../../data/transactions";
import { formatToBRL } from "../../utils/formatToBRL";
import { EmptyState } from "../ui/EmptyState";
import { 
  StatCard, 
  StatCardHeader,
  StatCardTitle,
  StatCardValue 
} from "../ui/StatCard";

export const Reports = () => {
  const hasTransactionToShow = transactions.length > 0;

  return (
    <div className="flex flex-col gap-6 w-full">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Reports
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Veja sua atividade financeira
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard>
          <StatCardHeader>
            <StatCardTitle>Income</StatCardTitle>
          </StatCardHeader>

          <StatCardValue variant="positive">
            {formatToBRL(dashboardSummary.income)}
          </StatCardValue>
        </StatCard>

        <StatCard>
          <StatCardHeader>
            <StatCardTitle>Expense</StatCardTitle>
          </StatCardHeader>

          <StatCardValue variant="negative">
            {formatToBRL(dashboardSummary.expenses)}
          </StatCardValue>
        </StatCard>

        <StatCard>
          <StatCardHeader>
            <StatCardTitle>Balance</StatCardTitle>
          </StatCardHeader>

          <StatCardValue>
            {formatToBRL(dashboardSummary.monthResult)}
          </StatCardValue>
        </StatCard>
      </section>

      <section className="flex flex-col gap-4">
        {hasTransactionToShow ? (
          <div className="h-64 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
            <span className="text-sm text-zinc-500">
              Chart placeholder
            </span>
          </div>
        ) : (
          <EmptyState
            title="No reports available"
            description="Add transactions to generate reports."
          />
        )}
      </section>
    </div>
  );
};

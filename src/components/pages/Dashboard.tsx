import { PiggyBank } from "lucide-react";
import { dashboardSummary } from "../../data/dashboard";
import { formatToBRL } from "../../utils/formatToBRL";
import { StatCard } from "../ui/StatCard/StatCard";
import { StatCardHeader } from "../ui/StatCard/StatCard.Header";
import { StatCardTitle } from "../ui/StatCard/StatCard.Title";
import { StatCardValue } from "../ui/StatCard/StatCard.Value";
import { StatCardDescription } from "../ui/StatCard/StatCard.Description";
import { StatCardIcon } from "../ui/StatCard/StatCard.Icon";


export const Dashboard = () => {
  return (
      <div className="flex-col md:flex-row flex w-full gap-4 justify-between">
        <div className="flex gap-4 flex-col md:flex-row">

          <StatCard>
            <StatCardHeader>
              <StatCardTitle>Ganhos</StatCardTitle>
            </StatCardHeader>

            <StatCardValue variant="positive">
              {formatToBRL(dashboardSummary.income)}
            </StatCardValue>

            <StatCardDescription>
              Total de receitas no mês
            </StatCardDescription>
          </StatCard>

          <StatCard>
            <StatCardHeader>
              <StatCardTitle>Despesas</StatCardTitle>
            </StatCardHeader>

            <StatCardValue variant="negative">
              {formatToBRL(dashboardSummary.expenses)}
            </StatCardValue>

            <StatCardDescription>
              Total de despesas no mês
            </StatCardDescription>
          </StatCard>

          <StatCard>
            <StatCardHeader>
              <StatCardTitle>Total do mês</StatCardTitle>
            </StatCardHeader>

            <StatCardValue variant="neutral">
              {formatToBRL(dashboardSummary.expenses)}
            </StatCardValue>

            <StatCardDescription>
              Total deo mês
            </StatCardDescription>
          </StatCard>
        </div>

        <div>
          <StatCard>
            <StatCardHeader>
              <StatCardTitle>Total do mês</StatCardTitle>
              <StatCardIcon><PiggyBank /></StatCardIcon>
            </StatCardHeader>

            <StatCardValue variant="neutral">
              {formatToBRL(dashboardSummary.totalBalance)}
            </StatCardValue>

            <StatCardDescription>
              Saldo
            </StatCardDescription>
          </StatCard>
        </div>
      </div>
  );
};

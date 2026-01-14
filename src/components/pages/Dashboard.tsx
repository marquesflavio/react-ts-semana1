import { PiggyBank } from "lucide-react";
import { dashboardSummary } from "../../data/dashboard";
import { StatCard } from "../ui/StatCard";

export const Dashboard = () => {
  return (
      <div className="flex-col md:flex-row flex w-full gap-4 justify-between">
        <div className="flex gap-4 flex-col md:flex-row">
          <StatCard title="Ganhos" value={dashboardSummary.income} variant="positive" />
          <StatCard title="Despesas" value={dashboardSummary.expenses} variant="negative" />
          <StatCard title="Total do mês" value={dashboardSummary.monthResult} />
        </div>
        <div>
          <StatCard icon={<PiggyBank />} title="Saldo" value={dashboardSummary.totalBalance} />
        </div>
      </div>
  );
};

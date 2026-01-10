import { Layout } from "../layout/Layout";
import { StatCard } from "../StatCard";

export const Dashboard = () => {
  return (
    <Layout>
      <div>
        <StatCard title="Saldo" value={12345} />
        <StatCard title="Ganhos" value={4500} variant="positive" />
        <StatCard title="Despesas" value={2300} variant="negative" />
      </div>
    </Layout>
  );
};

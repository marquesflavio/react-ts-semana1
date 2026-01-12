import { NavLink } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle";
import { ROUTES } from "../../routes/routes";
import { DollarSign } from "lucide-react";
import { dashboardSummary } from "../../data/dashboard";
import { formatToBRL } from "../../utils/formatToBRL";

export const Header = () => {

  const valorSaldo = dashboardSummary.totalBalance;

  return (
    <header className="w-full p-4 flex justify-between items-center border-b">
      <NavLink to={ROUTES.DASHBOARD}>
        <h1>
          <DollarSign size={40} />
        </h1>
      </NavLink>

      <div className="text-md text-muted-foreground">Saldo: {formatToBRL(valorSaldo)}</div>

      <div className="flex items-center gap-4">
        <span>Flávio Marques</span>
        <ThemeToggle />
      </div>
    </header>
  );
};

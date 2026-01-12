import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export const Sidebar = () => {
  return (
    <aside className="w-60 dark:bg-gray-900 bg-gray-200 flex flex-col p-6 space-y-4 min-h-[calc(100vh-64px)]">
      <h1 className="text-xl font-bold mb-6">FinanceDash</h1>

      <nav className="flex flex-col gap-2">
        <NavLink to={ROUTES.DASHBOARD}>
          <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 cursor-pointer">
            📊 <span>Dashboard</span>
          </div>
        </NavLink>
        <NavLink to={ROUTES.TRANSACTIONS}>
          <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 cursor-pointer">
            💸 <span>Transactions</span>
          </div>
        </NavLink>
        <NavLink to={ROUTES.CATEGORIES}>
          <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 cursor-pointer">
            🏷️ <span>Categories</span>
          </div>
        </NavLink>
        <NavLink to={ROUTES.REPORTS}>
          <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 cursor-pointer">
            📈 <span>Reports</span>
          </div>
        </NavLink>
        <NavLink to={ROUTES.SETTINGS}>
          <div className="flex items-center gap-2 p-2 mt-auto rounded hover:bg-gray-700 cursor-pointer">
            ⚙️ <span>Settings</span>
          </div>
        </NavLink>
      </nav>
    </aside>
  );
};

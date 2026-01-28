import { NavLink } from "react-router-dom";
import { ROUTES_MENU } from "../../routes/routes";

export const Sidebar = () => {
  return (
    <aside className="w-60 dark:bg-gray-900 bg-gray-200 flex flex-col p-6 space-y-4 min-h-[calc(100vh-64px)]">
      <h1 className="text-xl font-bold mb-6">FinanceDash</h1>

      <nav className="flex flex-col gap-2">
        {ROUTES_MENU.map((menu) => {
          return (
            <NavLink to={menu.route} key={menu.route}>
          <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 cursor-pointer">
            <span>{menu.icon}</span> 
            <span>{menu.name}</span>
          </div>
        </NavLink>
          )
        })}
        
      </nav>
    </aside>
  );
};

import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/pages/Dashboard"
import { Transactions } from "../components/pages/Transactions"
import { Categories } from "../components/pages/Categories"
import { Layout } from "../components/layout/Layout"
import { ROUTES } from "./routes"
import { Reports } from "../components/pages/Reports"
import { Settings } from "../components/pages/Settings"

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path={ROUTES.TRANSACTIONS} element={<Transactions />} />
        <Route path={ROUTES.CATEGORIES} element={<Categories />} />
        <Route path={ROUTES.REPORTS} element={<Reports />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
      </Route>
    </Routes>
  )
}

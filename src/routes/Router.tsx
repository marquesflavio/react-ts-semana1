import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/pages/Dashboard"
import { Transactions } from "../components/pages/Transactions"
import { Layout } from "../components/layout/Layout"
import { ROUTES } from "./routes"
import { Reports } from "../components/pages/Reports"

export const Router = () => {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path={ROUTES.TRANSACTIONS} element={<Transactions />} />
        <Route path={ROUTES.REPORTS} element={<Reports />} />
      </Route>
    </Routes>
  )
}

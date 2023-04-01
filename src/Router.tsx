import { Route, Routes } from "react-router"
import { BankAdmin } from "./banks/BankAdmin"
import { Dashboard } from "./dashboard/Dashboard"

export const Router = () => {
    return <>
    <Routes>
      <Route path={'/bank-admin'} element={<BankAdmin/>}/>
      <Route path={'/dashboard'} element={<Dashboard/>}/>
    </Routes>

    </>
}
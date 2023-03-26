import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/Client/Login"

export function Router(){
 return (
  <Routes>
    <Route path="/login" element={<Login/>}/>
  </Routes>
 )
}
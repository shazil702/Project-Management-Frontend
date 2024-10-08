import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Common/Login";
import AdminRoutes from "./routes/AdminRoutes";
import HrRoutes from "./routes/HrRoutes";
import EmployeeRoutes from "./routes/EmployeeRoutes";
import TLRoutes from "./routes/TLRoutes";


function App() {
   return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/admin/*" element={<AdminRoutes/>}/>
    <Route path="/hr/*" element={<HrRoutes/>}/>
    <Route path="/employee/*" element={<EmployeeRoutes/>}/>
    <Route path="/tl/*" element={<TLRoutes/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

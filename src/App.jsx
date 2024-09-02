import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import AdminRoutes from "./routes/AdminRoutes";
import HrRoutes from "./routes/HrRoutes";


function App() {
 

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/admin/*" element={<AdminRoutes/>}/>
    <Route path="/hr/*" element={<HrRoutes/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

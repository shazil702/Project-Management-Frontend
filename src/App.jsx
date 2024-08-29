import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./Components/AdminLayout";
import AdminPanel from "./Components/AdminPanel";
import Login from "./Components/Login";
import AdminRoutes from "./routes/AdminRoutes";


function App() {
 

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/admin" element={<AdminRoutes/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

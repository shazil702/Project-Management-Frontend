import { Route, Routes } from "react-router-dom"
import AdminLogin from "../Components/AdminLogin"
import AdminPanel from "../Components/AdminPanel"
const AdminRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<AdminLogin/>}/>
            <Route path="/dashboard" element={<AdminPanel/>}/>
        </Routes>
    )
}
export default AdminRoutes
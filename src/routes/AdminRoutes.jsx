import { Route, Routes } from "react-router-dom"
import AdminLogin from "../Components/AdminLogin"
const AdminRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<AdminLogin/>}/>
        </Routes>
    )
}
export default AdminRoutes
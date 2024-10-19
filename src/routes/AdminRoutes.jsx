import { Route, Routes } from "react-router-dom"
import AdminLogin from "../Components/Admin/AdminLogin"
import AdminPanel from "../Components/Admin/AdminPanel"
import AdminLayout from "../layouts/AdminLayout"
import AdminMessage from "../Components/Admin/AdminMessage"
import ClientView from "../Components/Admin/ClientView"

const AdminRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/admin-message" element={<AdminMessage/>}/>
          <Route path="/clients" element={<ClientView/>} />
        </Route>
      </Routes>
    );
  };
  export default AdminRoutes;
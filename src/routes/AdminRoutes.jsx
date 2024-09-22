import { Route, Routes } from "react-router-dom"
import AdminLogin from "../Components/AdminLogin"
import AdminPanel from "../Components/AdminPanel"
import AdminLayout from "../layouts/AdminLayout"
import AdminMessage from "../Components/AdminMessage"

const AdminRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/admin-message" element={<AdminMessage/>}/>
        </Route>
      </Routes>
    );
  };
  export default AdminRoutes;
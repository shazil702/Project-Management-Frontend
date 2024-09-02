import AdminSidebar from "../Components/AdminSidebar";
import NavBar from "../Components/Nav";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return(
    <div className="">
      <NavBar/>
      <AdminSidebar/>
    </div>
  );
};
export default AdminLayout;
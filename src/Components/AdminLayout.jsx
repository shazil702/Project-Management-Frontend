import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminPanel from "./AdminPanel";

const AdminLayout = () => {
    const [sidebar, setSidebar] = useState(true);
  const updateSidebar = () => {
    setSidebar(!sidebar);
  }
  return(
    <div className="">
        <AdminSidebar sidebar={sidebar} updateSidebar={updateSidebar}/>
        <AdminPanel sidebar={sidebar} updateSidebar={updateSidebar}/>
    </div>
  );
};
export default AdminLayout;
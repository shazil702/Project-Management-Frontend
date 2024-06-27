import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminPanel from "./AdminPanel";
import NavBar from "./Nav";
import ClientView from "./ClientView";

const AdminLayout = () => {
    const [sidebar, setSidebar] = useState(true);
  const updateSidebar = () => {
    setSidebar(!sidebar);
  }
  return(
    <div className="">
        {/* <AdminSidebar sidebar={sidebar} updateSidebar={updateSidebar}/>
        <NavBar sidebar={sidebar}/> */}
        {/* <AdminPanel sidebar={sidebar}/> */}
        <ClientView />
    </div>
  );
};
export default AdminLayout;
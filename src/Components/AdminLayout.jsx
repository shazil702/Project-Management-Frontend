import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminPanel from "./AdminPanel";
import NavBar from "./Nav";
import ClientView from "./ClientView";
import ProjectView from "./ProjectView";
import ClientDetail from "./ClientDetail";
import AdminMessage from "./AdminMessage";

const AdminLayout = () => {
    const [sidebar, setSidebar] = useState(true);
  const updateSidebar = () => {
    setSidebar(!sidebar);
  }
  return(
    <div className="">
        {/* <AdminSidebar sidebar={sidebar} updateSidebar={updateSidebar}/>
        <NavBar sidebar={sidebar}/>  */}
         {/* <AdminPanel sidebar={sidebar}/> */}
        {/* <ClientView sidebar={sidebar}/> */}
        {/* <ProjectView/> */}
        {/* <ClientDetail/> */}
        {<AdminMessage/>}
    </div>
  );
};
export default AdminLayout;
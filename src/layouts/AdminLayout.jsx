import AdminSidebar from "../Components/AdminSidebar";
import NavBar from "../Components/Nav";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const AdminLayout = () => {
  const [sidebar, setSidebar] = useState(true);

  const updateSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar sidebar={sidebar} updateSidebar={updateSidebar} />
            <div className={`flex-1 transition-all duration-300 ease-in-out ${sidebar ? 'ml-64' : 'ml-16'}`}>
        <NavBar sidebar={sidebar} />
                <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default AdminLayout;
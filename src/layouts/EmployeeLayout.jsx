import { Outlet } from "react-router-dom"
import EmployeeNav from "../Components/Employee/EmployeeNav"
import EmployeeSidebar from "../Components/Employee/EmployeeSidebar"

const EmployeeLayout = ()=>{
    return(
        <div className="flex h-screen bg-gray-100">
            <EmployeeSidebar/>
            <div className={`flex-1 transition-all duration-300 ease-in-out`}>
                <EmployeeNav/>
                <div className="p-4">
                    <Outlet />
            </div>
     </div>
        </div>
    )
}

export default EmployeeLayout;
import HrNav from "../Components/Hr/HrNav"
import HrSidebar from "../Components/Hr/HrSidebar"
import { Outlet } from "react-router-dom";


const HrLayout = ()=>{
    return(
   <div className="flex h-screen bg-gray-100">
    <HrSidebar/>
    <div className={`flex-1 transition-all duration-300 ease-in-out`}>
        <HrNav/>
                <div className="p-4">
          <Outlet />
        </div>
      </div>
   </div>
    )
}

export default HrLayout
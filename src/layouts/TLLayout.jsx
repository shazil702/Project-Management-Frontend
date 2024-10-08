import { Outlet } from "react-router-dom"
import TLNav from "../Components/TL/TLNav"
import TLSidebar from "../Components/TL/TLSidebar"

const TLLayout = ()=>{
    return(
    <div className="flex h-screen bg-gray-100">
        <TLSidebar/>
        <div className={`flex-1 transition-all duration-300 ease-in-out`}>
            <TLNav/>
            <div className="p-4">
                <Outlet/>
    </div>
        </div>
    </div>
    )
}

export default TLLayout;
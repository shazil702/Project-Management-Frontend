import { Route, Routes } from "react-router-dom"
import HrLayout from "../layouts/HrLayout"
import HrDashboard from "../Components/Hr/HrDashboard"

const HrRoutes = ()=>{
    return(
        <Routes>
            <Route element={<HrLayout/>}>
            <Route path="/" element={<HrDashboard/>}/>
            </Route>
        </Routes>
    )
}

export default HrRoutes
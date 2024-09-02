import { Route, Routes } from "react-router-dom"
import HrLayout from "../layouts/HrLayout"

const HrRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<HrLayout/>}/>
        </Routes>
    )
}

export default HrRoutes
import { Route, Routes } from "react-router-dom"
import TLLayout from "../layouts/TLLayout"
import ProjectDetail from "../Components/TL/ProjectDetail"

const TLRoutes = ()=>{
    return(
        <Routes>
            <Route element={<TLLayout/>}>
            <Route path="/" element={<ProjectDetail/>}/>
            </Route>
        </Routes>
    )
}

export default TLRoutes
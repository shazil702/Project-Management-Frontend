import { Route, Routes } from "react-router-dom"
import TLLayout from "../layouts/TLLayout"
import ProjectDetail from "../Components/TL/ProjectDetail"
import ProjectViewTable from "../Components/Employee/ProjectViewTable"

const TLRoutes = ()=>{
    return(
        <Routes>
            <Route element={<TLLayout/>}>
            <Route path="/" element={<ProjectViewTable nextpage={'projectDetails'}/>}/>
            <Route path="/projectDetails" element={<ProjectDetail/>}/>
            </Route>
        </Routes>
    )
}

export default TLRoutes
import { Route, Routes } from "react-router-dom";
import EmployeeLayout from "../layouts/EmployeeLayout";
import {TaskDetail} from "../Components/Employee/TaskDetail";
import EmployeeProfile from "../Components/Employee/EmployeeProfile";

const EmployeeRoutes = ()=>{
    return(
        <Routes>
            <Route element={<EmployeeLayout/>}>
            <Route path="/" element={<TaskDetail/>}/>
            <Route path="/profile" element={<EmployeeProfile/>}/>
            </Route>
        </Routes>
    )
}

export default EmployeeRoutes
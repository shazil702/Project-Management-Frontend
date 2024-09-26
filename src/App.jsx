import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Common/Login";
import AdminRoutes from "./routes/AdminRoutes";
import HrRoutes from "./routes/HrRoutes";
import ProjectDetail from "./Components/TL/ProjectDetail";
import TaskDetail from "./Components/Employee/TaskDetail";
import EmployeeProfile from "./Components/Employee/EmployeeProfile";


function App() {
 

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/admin/*" element={<AdminRoutes/>}/>
    <Route path="/hr/*" element={<HrRoutes/>}/>
    <Route path='/project' element={<ProjectDetail/>}/>
    <Route path="/task" element={<TaskDetail/>}/>
    <Route path='/employeeProfile' element={<EmployeeProfile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

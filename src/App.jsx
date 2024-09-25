import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import AdminRoutes from "./routes/AdminRoutes";
import HrRoutes from "./routes/HrRoutes";
import ProjectDetail from "./Components/ProjectDetail";
import TaskDetail from "./Components/TaskDetail";
import EmployeeProfile from "./Components/EmployeeProfile";


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

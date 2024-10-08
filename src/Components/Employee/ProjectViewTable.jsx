import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

const ProjectViewTable = ({nextpage}) => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const {data} = await axios.get(`${baseUrl}/project/userProjects/`,{
                    headers:{
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                    }
                });
                setProjects(data);
                console.log(data);
            }catch(e){
                console.log(e);
            }
        }
        fetchData();
    },[]);
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-4xl mt-8">
        <h2 className="text-2xl text-center mb-4">Projects</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-2 border">Id</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Started</th>
              <th className="p-2 border">Finished</th>
              <th className="p-2 border">Client Name</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="text-center cursor-pointer" onClick={()=> navigate(`${nextpage}?id=${project.id}`)}>
                <td className="p-2 border">{project.id}</td>
                <td className="p-2 border">{project.projectName}</td>
                <td className="p-2 border">{project.status}</td>
                <td className="p-2 border">{project.startDate}</td>
                <td className="p-2 border">{project.dueDate}</td>
                <td className="p-2 border">{project.client}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectViewTable;

import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/constants";

const ProjectDetail = () => {
  const [project, setProject] = useState();
  const [statusColor, setStatusColor] = useState('');
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await axios.get(`${baseUrl}/project/projectDetail/1/`)
        setProject(response.data);
        console.log(response.data);
        
  }catch(e){
    console.log(e);
  }
}
  fetchData()
},[]);
useEffect(()=>{
  const getProjectStatusColor = () => {
    switch (project?.status) {
      case 'completed':
        setStatusColor('bg-green-500 text-white');
        break;
      case 'inProgress':
        setStatusColor('bg-yellow-500 text-white');
        break;
      case 'notStarted':
        setStatusColor('bg-red-500 text-white');
        break;
      default:
        setStatusColor('bg-gray-200 text-gray-600');
        break;
    }
  }
  getProjectStatusColor();
},[project])
  return (
    <div className="flex h-screen">
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">{project?.projectName}</h1>
        <div className="grid grid-cols-2 gap-6">
          <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Project Description</h2>
            <p className="mb-4">
              {project?.description}
            </p>
            <h3 className="text-lg font-semibold mb-2">Requirements</h3>
            <ul className="list-disc ml-5">
              <li>Login Page</li>
              <li>Login Page</li>
              <li>Login Page</li>
              <li>Login Page</li>
              <li>Login Page</li>
            </ul>
            <p className="mt-4">(Responsive Login Page with Google authentication)</p>
          </section>
          <section className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Status</h2>
                <div className={`${statusColor} rounded-lg h-12`}>{project?.status}</div>
                <h2 className="text-xl font-semibold mb-4">Start Date</h2>
                <div className="bg-gray-200 rounded-lg h-12">{project?.startDate}</div>
                <h2 className="text-xl font-semibold mb-4">Due Date</h2>
                <div className="bg-gray-200 rounded-lg h-12">{project?.dueDate}</div>
              </div>
            </div>
            {/* <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Calendar</h2>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full text-center ${
                      i === 12 ? "bg-white text-black" : "bg-black text-white"
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <p className="mt-4">13. Started Project</p>
            </div> */}
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;

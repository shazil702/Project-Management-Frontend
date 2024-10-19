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
    <div className="bg-gray-100 flex h-screen">
    <main className="flex-1 p-10">
      <h1 className="text-3xl font-bold mb-8">{project?.projectName}</h1>
      <div className="grid grid-cols-2 gap-6">
        <section className="p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Project Description</h2>
          <p className="mb-4">
            {project?.description}
          </p>
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
          <div className="bg-blue-100 p-4 rounded-lg flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Client</h2>
            <img className="w-32 h-32 rounded-full mb-4" src={`${baseUrl}${project?.client?.clientImage}`} />
            <div className="text-lg font-bold my-1">{project?.client?.clientName}</div>
            <div className="text-gray-700 my-1">{project?.client?.clientEmail}</div>
            <div className="text-gray-700">{project?.client?.clientPhone}</div>
          </div>
        </section>
      </div>
        <section className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Team Members</h2>
        <div className="flex">
        {project?.team?.teamMembers?.map(member =>{
          return (
            <div key={member.id} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center mx-2 w-64">
              <img className="w-28 h-28 rounded-full mb-4" src={`${baseUrl}${member.img}`} />
              <h3 className="text-lg font-bold">{member.username}</h3>
              <p className="text-gray-600">{member.email}</p>
            </div>
          )
        })}
        </div>
      </section>
      <div className="w-full max-w-4xl mt-8">
        <h2 className="text-2xl text-center mb-4">Tasks</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-2 border">Id</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">User</th>
            </tr>
          </thead>
          <tbody>
            {project?.tasks.map((task) => (
              <tr key={task.id} className="text-center cursor-pointer">
                <td className="p-2 border">{task.id}</td>
                <td className="p-2 border">{task.taskName}</td>
                <td className="p-2 border">{task.status}</td>
                <td className="p-2 border">{task.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  </div>
  
  );
};

export default ProjectDetail;

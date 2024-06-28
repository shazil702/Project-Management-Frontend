const ProjectView = () => {
    const projects = [
      { name: "Project Name", members: 5, duration: "2 Months", status: "Completed" },
      { name: "Project Name", members: 5, duration: "2 Months", status: "On Progress" },
      { name: "Project Name", members: 5, duration: "2 Months", status: "On Progress" },
      { name: "Project Name", members: 5, duration: "2 Months", status: "Completed" },
      { name: "Project Name", members: 5, duration: "2 Months", status: "Completed" },
      { name: "Project Name", members: 5, duration: "2 Months", status: "On Progress" },
    ];
  
    return (
      <div className="flex min-h-screen">
        <div className="w-full p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            <div className="flex">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg mr-4">ALL</button>
              <button className="px-4 py-2 bg-gray-200 text-black rounded-lg mr-4">Completed</button>
              <button className="px-4 py-2 bg-gray-200 text-black rounded-lg">On Progress</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-blue-100 p-4 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-bold mb-2">{project.name}</h2>
                <p className="mb-1">5 Members</p>
                <p className="mb-1">2 Months</p>
                <span
                  className={`px-2 py-1 rounded ${
                    project.status === 'Completed'
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-500 text-white'
                  }`}
                >
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectView;
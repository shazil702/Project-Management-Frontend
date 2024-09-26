import React from "react";

const ProjectDetail = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-black text-white w-1/4 h-full p-5">
        <div className="flex flex-col items-center">
          <div className="bg-gray-400 rounded-full w-20 h-20 mb-6"></div>
          <nav>
            <ul className="space-y-4 text-lg">
              <li className="hover:text-gray-400">Dashboard</li>
              <li className="hover:text-gray-400">Team Members</li>
              <li className="hover:text-gray-400">Tasks</li>
              <li className="hover:text-gray-400">Meetings</li>
              <li className="hover:text-gray-400">Messages</li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
          <div className="relative">
            <input
              type="text"
              className="border-2 rounded-full p-2 px-4"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center">
            <span className="mr-4 text-lg">Team Lead</span>
            <div className="bg-gray-300 rounded-full w-12 h-12"></div>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-8">Project Name</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Project Description */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Project Description</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet. Rem nobis consequatur sit quasi
              possimus non galisum ipsa. Qui velit laboriosam id rerum ipsam nam
              reiciendis voluptate.
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

          {/* Recent Activities and Calendar */}
          <section className="grid grid-cols-2 gap-6">
            {/* Recent Activities */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
              <div className="space-y-4">
                <div className="bg-gray-200 rounded-lg h-12"></div>
                <div className="bg-gray-200 rounded-lg h-12"></div>
                <div className="bg-gray-200 rounded-lg h-12"></div>
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
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
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;

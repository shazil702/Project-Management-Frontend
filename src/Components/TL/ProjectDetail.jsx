import React from "react";

const ProjectDetail = () => {
  return (
    <div className="flex h-screen">
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Project Name</h1>
        <div className="grid grid-cols-2 gap-6">
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
          <section className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
              <div className="space-y-4">
                <div className="bg-gray-200 rounded-lg h-12"></div>
                <div className="bg-gray-200 rounded-lg h-12"></div>
                <div className="bg-gray-200 rounded-lg h-12"></div>
              </div>
            </div>
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

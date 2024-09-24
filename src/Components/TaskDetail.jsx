import React from "react";

const TaskDetail = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-black text-white w-1/4 h-full p-5 flex flex-col items-center">
        <div className="bg-gray-400 rounded-full w-16 h-16 mb-6"></div>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-200 p-2 rounded-full text-black placeholder-gray-500"
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Task Detail</h1>
          <div className="flex items-center">
            <span className="mr-4 text-lg">Team Lead</span>
            <div className="bg-gray-300 rounded-full w-12 h-12"></div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* To Do Section */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">To DO</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>ToDo task</li>
              <li>ToDo task</li>
              <li>ToDo task</li>
              <li>ToDo task</li>
            </ul>
          </section>

          {/* On Progress Section */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">On Progress</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>On Progress Task</li>
              <li>On Progress Task</li>
              <li>On Progress Task</li>
            </ul>
          </section>

          {/* Completed Section */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Completed</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>Completed Task</li>
              <li>Completed Task</li>
            </ul>
          </section>
        </div>

        {/* Project Description */}
        <section className="mt-10 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Project Description</h2>
          <p>
            Lorem ipsum dolor sit amet, id consequuntur laboriosam aut incidunt
            assumenda nam esse aliquam non nesciunt iste et dicta consequuntur
            qui architecto soluta.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TaskDetail;

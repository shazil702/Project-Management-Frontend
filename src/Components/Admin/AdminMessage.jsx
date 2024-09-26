import User1 from '../../assets/images/User1.jpeg';

const AdminMessage = () => {
  return (
    <div className="flex h-screen">
      {/* <aside className="w-1/4 bg-blue-500 text-white p-4">
        <div className="flex items-center justify-center mb-8">
          <img src="/path/to/logo.png" alt="Logo" className="w-16 h-16" />
        </div>
        <nav>
          <ul>
            <li className="mb-4">Dashboard</li>
            <li className="mb-4">Project</li>
            <li className="mb-4">Client</li>
            <li className="mb-4">Product Owner</li>
            <li className="font-bold">Messages</li>
          </ul>
        </nav>
      </aside> */}

      <div className="flex-1 flex flex-col">
        {/* <div className="flex items-center justify-between bg-gray-100 p-4">
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md w-2/3">
            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M4 10a6 6 0 1112 0 6 6 0 01-12 0z" />
            </svg>
            <input type="text" placeholder="Search" className="ml-4 outline-none w-full" />
          </div>
          <img src="/path/to/user-avatar.jpg" alt="User Avatar" className="w-12 h-12 rounded-full" />
        </div> */}

        <div className="flex flex-1">
          <div className="w-1/3 border-r border-gray-200">
            <div className="bg-blue-500 text-white text-center p-2">Inbox</div>
            <ul className="overflow-y-auto h-full">
              {Array.from({ length: 6 }).map((_, index) => (
                <li key={index} className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                  <img src={User1} alt="User" className="w-12 h-12 rounded-full mr-4" />
                  <div className="flex-1">
                    <div className="font-bold">Name</div>
                    <div className="text-sm text-gray-500">2 new messages</div>
                  </div>
                  <div className="text-sm text-gray-500">2m</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between bg-gray-100 p-4 border-b border-gray-200">
              <div className="flex items-center">
                <img src={User1} alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div className="font-bold text-lg">Name</div>
              </div>
              <div className="flex space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-200">
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55-4.55a2 2 0 112.9 2.9L18 12.75m-6-6v6.75m0 0l-2.5-2.5m0 0H3m0 0a2 2 0 012-2m16 12H5a2 2 0 01-2-2v-3.55a2 2 0 011.27-1.85M15 10l4.55-4.55a2 2 0 112.9 2.9L18 12.75m-6-6v6.75m0 0l-2.5-2.5m0 0H3m0 0a2 2 0 012-2" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-200">
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55-4.55a2 2 0 112.9 2.9L18 12.75m-6-6v6.75m0 0l-2.5-2.5m0 0H3m0 0a2 2 0 012-2m16 12H5a2 2 0 01-2-2v-3.55a2 2 0 011.27-1.85M15 10l4.55-4.55a2 2 0 112.9 2.9L18 12.75m-6-6v6.75m0 0l-2.5-2.5m0 0H3m0 0a2 2 0 012-2" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-200">
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55-4.55a2 2 0 112.9 2.9L18 12.75m-6-6v6.75m0 0l-2.5-2.5m0 0H3m0 0a2 2 0 012-2m16 12H5a2 2 0 01-2-2v-3.55a2 2 0 011.27-1.85M15 10l4.55-4.55a2 2 0 112.9 2.9L18 12.75m-6-6v6.75m0 0l-2.5-2.5m0 0H3m0 0a2 2 0 012-2" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 p-4">
              <div className="bg-gray-100 p-4 rounded-lg flex-1">
                {/* Message area */}
              </div>
            </div>

            <div className="p-4 bg-gray-100">
              <input type="text" placeholder="Message" className="w-full p-2 rounded-lg outline-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMessage;

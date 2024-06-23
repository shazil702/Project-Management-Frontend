import Logo from '../assets/images/Logo.jpg';
import Admin from '../assets/images/Admin.jpeg';
import User1 from '../assets/images/User1.jpeg';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";


const AdminPanel = () => {
  const [sidebar, setSidebar] = useState(true);
  const updateSidebar = () => {
    setSidebar(!sidebar);
  }
  return (
    <div className="flex h-full bg-gray-100">
    {/* Sidebar */}
    <div className={`h-full fixed top-0 left-0 z-50 ${sidebar ? 'w-64 bg-blue-500' : 'bg-gray-100 w-8'} text-white`}>
      <button onClick={updateSidebar} className={`${sidebar ? 'float-right text-4xl mt-4 mr-2' : 'float-left text-3xl text-black mt-6 ml-4'}`}>
        <IoMenu />
      </button>
      {sidebar && (
        <div>
          <div className="mb-8 mt-4">
            <img src={Logo} alt="Logo" className="rounded-full w-20 h-20 mx-auto" />
          </div>
          <nav>
            <ul>
              <li className="mb-4"><a href="#" className="hover:text-gray-300">Dashboard</a></li>
              <li className="mb-4"><a href="#" className="hover:text-gray-300">Project</a></li>
              <li className="mb-4"><a href="#" className="hover:text-gray-300">Client</a></li>
              <li className="mb-4"><a href="#" className="hover:text-gray-300">Product Owner</a></li>
              <li className="mb-4"><a href="#" className="hover:text-gray-300">Messages</a></li>
              <li className="mb-4"><a href="#" className="hover:text-gray-300">Meetings</a></li>
            </ul>
          </nav>
        </div>
      )}
    </div>

    {/* Main Content */}
    <div className={`flex-1 ${sidebar ? 'ml-64' : 'ml-8'}`}>
      {/* Fixed Header */}
      <div className={`fixed top-0 left-0 flex justify-between items-center p-8 bg-gray-100 z-40 ${sidebar ? 'ml-64 w-full' : 'ml-8 w-full'}`}>
        <div className="relative">
          <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 rounded-full border" />
          <svg className="w-6 h-6 absolute left-3 top-2.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.9 14.32A8 8 0 112.68 4.1a8 8 0 0110.22 10.23zM9 11a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex items-center">
          <div className="mr-4 text-right">
            <div className="font-semibold">Admin</div>
            <div className="text-sm text-gray-600">Admin Profile</div>
          </div>
          <img src={Admin} alt="Admin" className="w-12 h-12 rounded-full" />
        </div>
      </div>

      {/* Statistics */}
      <div className="pt-24 p-8">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl mb-4">Total Employees</h3>
            <div className="flex items-center">
              <div className="w-32 h-32 bg-pink-200 rounded-full relative">
                <div className="w-16 h-16 bg-blue-500 rounded-full absolute top-8 left-8"></div>
              </div>
              <div className="ml-4 text-3xl font-semibold">452</div>
            </div>
            <div className="mt-4 flex justify-between">
              <span className="text-blue-500">Male</span>
              <span className="text-pink-500">Female</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl mb-4">Projects</h3>
            <div className="flex items-center">
              <div className="flex-1">
                <div className="h-6 bg-blue-500 mb-2"></div>
                <div className="h-6 bg-green-500 mb-2"></div>
                <div className="h-6 bg-orange-500"></div>
              </div>
              <div className="ml-4">
                <div>Total: 35</div>
                <div>Completed: 20</div>
                <div>On Progress: 15</div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl mb-4">Employees</h3>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">ID</th>
                <th className="py-2">IMAGE</th>
                <th className="py-2">NAME</th>
                <th className="py-2">MAIL</th>
                <th className="py-2">TEAM</th>
                <th className="py-2">ROLE</th>
                <th className="py-2">JOINED DATE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center py-2">1</td>
                <td className="text-center py-2"><img src={User1} alt="User" className="w-10 h-10 rounded-full mx-auto" /></td>
                <td className="text-center py-2">User</td>
                <td className="text-center py-2">user@gmail.com</td>
                <td className="text-center py-2">Team 1</td>
                <td className="text-center py-2">Backend Developer</td>
                <td className="text-center py-2">29/10/2005</td>
              </tr>
              <tr>
                <td className="text-center py-2">1</td>
                <td className="text-center py-2"><img src={User1} alt="User" className="w-10 h-10 rounded-full mx-auto" /></td>
                <td className="text-center py-2">User</td>
                <td className="text-center py-2">user@gmail.com</td>
                <td className="text-center py-2">Team 1</td>
                <td className="text-center py-2">Backend Developer</td>
                <td className="text-center py-2">29/10/2005</td>
              </tr>
              <tr>
                <td className="text-center py-2">1</td>
                <td className="text-center py-2"><img src={User1} alt="User" className="w-10 h-10 rounded-full mx-auto" /></td>
                <td className="text-center py-2">User</td>
                <td className="text-center py-2">user@gmail.com</td>
                <td className="text-center py-2">Team 1</td>
                <td className="text-center py-2">Backend Developer</td>
                <td className="text-center py-2">29/10/2005</td>
              </tr>
              <tr>
                <td className="text-center py-2">1</td>
                <td className="text-center py-2"><img src={User1} alt="User" className="w-10 h-10 rounded-full mx-auto" /></td>
                <td className="text-center py-2">User</td>
                <td className="text-center py-2">user@gmail.com</td>
                <td className="text-center py-2">Team 1</td>
                <td className="text-center py-2">Backend Developer</td>
                <td className="text-center py-2">29/10/2005</td>
              </tr>
              <tr>
                <td className="text-center py-2">1</td>
                <td className="text-center py-2"><img src={User1} alt="User" className="w-10 h-10 rounded-full mx-auto" /></td>
                <td className="text-center py-2">User</td>
                <td className="text-center py-2">user@gmail.com</td>
                <td className="text-center py-2">Team 1</td>
                <td className="text-center py-2">Backend Developer</td>
                <td className="text-center py-2">29/10/2005</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AdminPanel;

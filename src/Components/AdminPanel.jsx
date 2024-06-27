import User1 from '../assets/images/User1.jpeg';
import { PieChart, Pie, Tooltip, BarChart,Bar} from "recharts";

const AdminPanel = ({sidebar}) => {
  const data = [
    { name: "Male", employee: 400, fill:"blue" },
    { name: "Female", employee: 700, fill:'pink' },
];
const barData = [
  { name: "Technical scripter", students: 700,fill:'blue' },
  { name: "Geek-i-knack", students: 400,fill:'green' },
  { name: "Geek-o-mania", students: 1000,fill:'orange' },
];
  return (
    <div className="flex h-full bg-gray-100">
    <div className={`flex-1 ${sidebar ? 'ml-64' : 'ml-8'}`}>
      {/* Statistics */}
      <div className="pt-24 p-">
        <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow relative">
    <div className='flex justify-between items-center mb-4'>
        <h3 className="text-xl">Total Employees</h3>
        <h1 className={`text-2xl ${sidebar ? 'pl-8' : 'pl-4'} mt-2`}>450</h1>
    </div>
    <div className={`flex ${sidebar ? 'flex-col' : 'flex-col md:flex-row'} items-center justify-center`}>
        <div
            style={{
                textAlign: "center",
                height: 250,
                width: 250,
                marginRight: "auto"
            }}>
            <PieChart width={250} height={250}>
                <Tooltip />
                <Pie
                    data={data}
                    dataKey="employee"
                    innerRadius={70}
                    outerRadius={90}
                    fill="#8884d8"
                />
            </PieChart>
        </div>
        <div className={`flex flex-col justify-center mt-4 md:mt-0 ${sidebar ? '' : 'md:absolute md:right-8 md:top-0 md:bottom-0'}`}>
            <div className='flex space-x-3 items-center mb-2'>
                <div className='rounded-full bg-pink-500 w-2 h-2'></div>
                <span className="text-pink-500">Female</span>
            </div>
            <div className='flex space-x-3 items-center mt-2'>
                <div className='rounded-full bg-blue-500 w-2 h-2'></div>
                <span className="text-blue-500">Male</span>
            </div>
        </div>
    </div>
</div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl mb-4">Projects</h3>
            <div className='space-x-4'>
            <BarChart width={350} height={250} data={barData}  barCategoryGap='20%' barGap={30}>
            <Bar dataKey="students"/>
        </BarChart>
        <div className="absolute right-36 top-0 bottom-44 flex flex-col justify-center">
      <div className='flex space-x-3 items-center mb-2'>
              <div className='rounded-sm bg-blue-700 w-3 h-3'></div>
              <span className="">Female</span>
              </div>
              <div className='flex space-x-3 items-center mb-2'>
              <div className='bg-green-700 w-3 h-3 rounded-sm'></div>
              <span className="">Male</span>
              </div>
              <div className='flex space-x-3 items-center'>
              <div className='bg-orange-400 w-3 h-3 rounded-sm'></div>
              <span className="">Male</span>
              </div>
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

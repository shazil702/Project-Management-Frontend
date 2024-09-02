const HrDashboard = () => {
    return (
      <div className="flex-grow p-6">
        <div className="flex space-x-6">
          <div className="w-1/2 bg-white shadow-lg p-4">
            <h2 className="text-xl font-bold">Total Employees</h2>
            {/* Replace this with your Pie Chart */}
            <div className="w-32 h-32 mx-auto">[Pie Chart Placeholder]</div>
            <div className="flex justify-between mt-4">
              <span>Male</span>
              <span>Female</span>
            </div>
          </div>
          <div className="w-1/2 bg-white shadow-lg p-4">
            <h2 className="text-xl font-bold">Weekly Attendance</h2>
            {/* Replace this with your Bar Chart */}
            <div className="w-full h-32">[Bar Chart Placeholder]</div>
            <span className="block text-right mt-2">June 14 - June 19</span>
          </div>
        </div>
  
        <div className="mt-6 bg-white shadow-lg">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Mail</th>
                <th>Team</th>
                <th>Joined Date</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace this with mapped data */}
              <tr>
                <td>1</td>
                <td><img src="profile_image_url" alt="Name" className="w-10 h-10 rounded-full" /></td>
                <td>Name</td>
                <td>name@mail.com</td>
                <td>team 1</td>
                <td>14/6/2024</td>
              </tr>
              {/* Repeat similar rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default HrDashboard
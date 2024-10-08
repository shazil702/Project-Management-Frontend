const TLSidebar = ()=>{
    return (
        <div className="bg-purple-900 w-1/6 h-screen flex flex-col items-center py-4">
          <div className="rounded-full bg-gray-200 p-4 w-20 h-20 flex items-center justify-center">
            <span className="text-xl font-bold">Logo</span>
          </div>
          <ul className="mt-10 space-y-4">
            <li className="text-white">Dashboard</li>
            <li className="text-white">Employees</li>
          </ul>
        </div>
      );
}

export default TLSidebar;
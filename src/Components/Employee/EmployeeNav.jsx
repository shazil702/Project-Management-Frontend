import { Link } from "react-router-dom";

const EmployeeNav = ()=>{
    return(
        <div className="bg-purple-800 flex justify-between items-center px-4 py-2">
        <input
          type="text"
          placeholder="Search"
          className="bg-white px-4 py-2 rounded-full w-1/3"
        />
        <Link to={'profile'}>
        <div className="flex items-center space-x-4">
          <span className="text-white">HR Name</span>
          <img
            src="profile_image_url"
            alt="HR Name"
            className="w-10 h-10 rounded-full"
          />
        </div>
        </Link>
      </div>
    )
}

export default EmployeeNav;
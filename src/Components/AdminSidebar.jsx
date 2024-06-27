import Logo from '../assets/images/Logo.jpg';
import { IoMenu } from "react-icons/io5";

const AdminSidebar = ({sidebar,updateSidebar}) => {
     return(
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
    )
}
export default AdminSidebar
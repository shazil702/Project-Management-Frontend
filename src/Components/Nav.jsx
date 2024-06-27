import Admin from '../assets/images/Admin.jpeg';

const NavBar = ({sidebar}) => {
    return(
        <div className={`fixed top-0 left-0 flex justify-between items-center py-2 px-8 bg-gray-100 z-40 ${sidebar ? 'ml-64 w-full' : 'ml-8 w-full'}`}>
        <div className="relative">
          <input type="text" placeholder="Search" className="pl-4 pr-4 py-2 rounded-full border" />
          
        </div>
        <div className={`flex ${sidebar && 'mr-60'}`}>
          <div className="mr-4 text-right">
            <div className="font-semibold">Admin</div>
            <div className="text-sm text-gray-600">Admin Profile</div>
          </div>
          <img src={Admin} alt="Admin" className="w-12 h-12 rounded-full" />
        </div>
      </div>
    )
}
export default NavBar;
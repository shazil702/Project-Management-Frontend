import User3 from '../assets/images/User 3.jpeg';

const ClientDetail = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gray-100 p-6">    
        {/* Client Profile */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="flex items-center mb-4">
            <img src={User3} alt="Client Profile" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <div className="text-xl font-bold">Client Name</div>
              <div className="text-gray-600">Company Name</div>
            </div>
            <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-full">Edit Profile</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-gray-600">Projects</div>
              <div className="font-bold">6</div>
            </div>
            <div>
              <div className="text-gray-600">Date</div>
              <div className="font-bold">01/01/2024</div>
            </div>
            <div>
              <div className="text-gray-600">Contact</div>
              <div className="font-bold">name@mail.com</div>
            </div>
            <div>
              <div className="text-gray-600">Phone</div>
              <div className="font-bold">5768374589</div>
            </div>
            <div>
              <div className="text-gray-600">Address</div>
              <div className="font-bold">Address</div>
            </div>
          </div>
        </div>
        
        {/* Projects */}
        <div>
          <div className="text-2xl font-bold mb-4">Projects</div>
          <div className="grid grid-cols-3 gap-4">
            {Array(6).fill().map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center font-bold">Project Details</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;

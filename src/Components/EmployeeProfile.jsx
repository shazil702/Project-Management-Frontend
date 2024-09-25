import Admin from '../assets/images/Admin.jpeg';

const EmployeeProfile = () => {
    return (
        <div className="min-h-screen bg-purple-900 text-white">
            <div className="flex justify-center">
                <div className="bg-gray-100 rounded-full p-2 mt-4">
                    <img
                        src={Admin}
                        alt="Employee"
                        className="h-32 w-32 rounded-full"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="p-6 grid grid-cols-2 gap-4">
                {/* Employee Info */}
                <div className="bg-purple-700 p-6 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4">Employee Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label>Full Name</label>
                            <p className="bg-purple-600 p-2 rounded-md">John Doe</p>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <p className="bg-purple-600 p-2 rounded-md">123-456-7890</p>
                        </div>
                        <div>
                            <label>Email</label>
                            <p className="bg-purple-600 p-2 rounded-md">johndoe@example.com</p>
                        </div>
                        <div>
                            <label>Joining Date</label>
                            <p className="bg-purple-600 p-2 rounded-md">01/01/2020</p>
                        </div>
                        <div>
                            <label>Team</label>
                            <p className="bg-purple-600 p-2 rounded-md">Development</p>
                        </div>
                        <div>
                            <label>Role</label>
                            <p className="bg-purple-600 p-2 rounded-md">Software Engineer</p>
                        </div>
                    </div>

                    {/* Personal Info */}
                    <h3 className="text-lg font-semibold mt-6">Personal Info</h3>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <label>ID Number</label>
                            <p className="bg-purple-600 p-2 rounded-md">ID12345</p>
                        </div>
                        <div>
                            <label>PAN Number</label>
                            <p className="bg-purple-600 p-2 rounded-md">ABCP1234D</p>
                        </div>
                        <div>
                            <label>Birthday</label>
                            <p className="bg-purple-600 p-2 rounded-md">01/01/1990</p>
                        </div>
                    </div>
                </div>

                {/* Banking and Salary Details */}
                <div className="bg-purple-700 p-6 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4">Banking & Salary Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label>Account Number</label>
                            <p className="bg-purple-600 p-2 rounded-md">123456789</p>
                        </div>
                        <div>
                            <label>IFSC</label>
                            <p className="bg-purple-600 p-2 rounded-md">ABC123456</p>
                        </div>
                        <div>
                            <label>Branch</label>
                            <p className="bg-purple-600 p-2 rounded-md">XYZ Branch</p>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mt-6">Salary Details</h3>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <label>Salary Basis</label>
                            <p className="bg-purple-600 p-2 rounded-md">Monthly</p>
                        </div>
                        <div>
                            <label>Salary Amount</label>
                            <p className="bg-purple-600 p-2 rounded-md">$5000</p>
                        </div>
                        <div>
                            <label>Payment Date</label>
                            <p className="bg-purple-600 p-2 rounded-md">01/01/2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeProfile;

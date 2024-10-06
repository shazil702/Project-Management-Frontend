import { useEffect, useState } from 'react';
import Admin from '../../assets/images/Admin.jpeg'
import { baseUrl } from '../../constants/constants';
import axios from 'axios';

const EmployeeProfile = () => {
    const [employee, setEmployee] = useState([]);
    useEffect(()=>{
        const fetchdata = async ()=>{
            try{
                const response = await axios.get(`${baseUrl}/employee/profile/`,{
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                    }
                })
                setEmployee(response.data);
                console.log(response.data);
                
        }catch(error){
            console.log(error);
        }
    }
    fetchdata()
    },[]);    
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
                        <input
                            type="text"
                            value={employee?.profile?.employee?.username}
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input
                            type="text"
                            value={employee?.profile?.employee?.phone}
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            value={employee?.profile?.employee?.email}
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Joining Date</label>
                        <input
                            type="text"
                            value={employee?.profile?.joined_date}
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Team</label>
                        <input
                            type="text"
                            value={employee?.profile?.team}
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Role</label>
                        <input
                            type="text"
                            value={employee?.profile?.department}
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                </div>
    
                {/* Personal Info */}
                <h3 className="text-lg font-semibold mt-6">Personal Info</h3>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                        <label>ID Number</label>
                        <input
                            type="text"
                            value={employee?.personal_info?.idNumber}
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                    <div>
                        <label>PAN Number</label>
                        <input
                            type="text"
                            value={employee?.personal_info?.pan}
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Birthday</label>
                        <input
                            type="text"
                            value={employee?.personal_info?.dob}
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                </div>
            </div>
    
            {/* Banking and Salary Details */}
            <div className="bg-purple-700 p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Banking & Salary Details</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label>Account Number</label>
                        <input
                            type="text"
                            value={employee?.personal_info?.bankAccountNumber}
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                    <div>
                        <label>IFSC</label>
                        <input
                            type="text"
                            value={employee?.personal_info?.bankIFSC}
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Branch</label>
                        <input
                            type="text"
                            value={employee?.personal_info?.bankBranch}
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                </div>
    
                <h3 className="text-lg font-semibold mt-6">Salary Details</h3>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                        <label>Salary Basis</label>
                        <input
                            type="text"
                            value="Monthly"
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Salary Amount</label>
                        <input
                            type="text"
                            value={employee?.personal_info?.salaryAmount}
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Payment Date</label>
                        <input
                            type="text"
                            value="01/01/2024"
                            className="bg-purple-600 p-2 rounded-md text-white"
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default EmployeeProfile;

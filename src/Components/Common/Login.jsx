import React, { useState } from 'react';
import LoginImage from '../../assets/images/Login.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../constants/constants';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [otpToken, setOtpToken] = useState('');
    const [isOtp, setIsOtp]= useState(false);
    const getOtp = async e => {
        e.preventDefault();
        const mail = {
            email: email
        };
        try{
            const {data} = await axios.post(`${baseUrl}/authentication/sendOTP/`,mail);
            console.log(data);
            setIsOtp(true);
            setOtpToken(data.otp_token)
        }
        catch(error){
            console.log(error);
        }
    }
    const login = async e => {
        e.preventDefault();
        const user = {
            otp_token : otpToken,
            otp : otp
        };
        try{
            const {data} = await axios.post(`${baseUrl}/authentication/verifyOTP/`,user);
            localStorage.clear();
            console.log(data);
            localStorage.setItem('access_token',data.access_token);
            localStorage.setItem('refresh_token',data.refresh_token);
            localStorage.setItem('name',data.name);
            if(data.role === 'HR'){
                navigate('/hr/')
            }
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <div className="min-h-full h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-loginBackground">
            <div className='mb-6'>
                <img src='' alt="Logo" className="h-16 w-auto rounded-full"/>
            </div>
            <div className="text-center mb-8">
                <h1 className="text-4xl font-semibold">Welcome Dev</h1>
            </div>
            <div className="flex flex-col md:flex-row max-w-6xl w-full h-auto md:h-auto lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <div className="flex-1 h-64 md:h-80 lg:h-full">
                    <img src={LoginImage} alt="Login" className="h-full w-full object-cover"/>
                </div>
                <div className="flex-1 h-full p-8 flex flex-col justify-center bg-white mt-4 md:mt-0 md:ml-4 rounded-lg">
                    <div className="mb-10 text-center">
                        <h1 className="text-4xl font-semibold">Login</h1>
                    </div>
                    {isOtp ?  <form className="space-y-6" onSubmit={login} method="POST">
                        <div className="rounded-md shadow-sm space-y-4">
                             <div>
                                <label htmlFor="otp" className="sr-only">OTP</label>
                                <input
                                    id="otp"
                                    name="otp"
                                    type="text"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                         
                        </div>
                        <div className="mt-6">
                              <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >  Login
                            </button>  
                        </div>
                    </form> : <form className="space-y-6" onSubmit={getOtp} method="POST">
                        <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        </div>
                        <div className="mt-6">
                        <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >  Genereate OTP
                            </button>
                        </div>
                    </form>}
                </div>
            </div>
        </div>
    );
}

export default Login;

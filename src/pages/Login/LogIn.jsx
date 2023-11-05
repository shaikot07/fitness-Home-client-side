import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { FaGoogle } from "react-icons/fa6";

const LogIn = () => {

      const {logIn} = useContext(AuthContext)
      const [showError, setShowError] = useState('')
      const [success,setSuccess] = useState('')
      const location = useLocation()
      const navigate = useNavigate()
      const googleProvider = new GoogleAuthProvider()
      const auth = getAuth(app)
      const handleLogIn = e =>{
            e.preventDefault();
            const form = new FormData(e.currentTarget)
            const email = form.get("email");
            const password = form.get("password")
            console.log(email,password);
            
            logIn(email,password) 
                  .then(res =>{
                        toast.success('Log in Successfully!',)
                        setSuccess('Log in Successfully!',)
                        navigate(location?.state ? location.state : '/')
                  })
                  .catch(error =>{
                        setShowError('Invalid email or Password')
                        toast.error('Invalid email or Password')
                  })

      }
      const googleLogIn = () => {
            signInWithPopup(auth, googleProvider)
                  .then(res => {
                        toast.success('Log in success')
                        navigate("/")

                  })
                  .catch(error => {
                        toast.error('something Rowing')
                  })
      }
      return (
            <div className=''>
            <div className="flex flex-col max-w-[400px]  p-4 rounded-md sm:p-6 bg-gray-900 text-gray-100 mx-auto mt-12">
                  <div className="mb-8 text-center">
                        <h1 className="my-2 text-4xl font-bold text-[#E31C25]">Sign in</h1>
                        <p className="text-sm text-gray-400">Sign in to access your account</p>
                  </div>
                  <form onSubmit={ handleLogIn} className="space-y-6">
                        <div className="space-y-4">
                              
                              <div>
                                    <label className="block mb-2 text-sm">Email address</label>
                                    <input type="email" name="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                              </div>
                              <div>

                                    <input type="password" name="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                                    <div className="flex justify-between mb-2">
                                          <label className="text-sm">Password</label>
                                          <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-[#E31C25]">Forgot password?</a>
                                    </div>
                              </div>
                              <p className='text-red-700'>{showError} </p>
                              <p className='text-green-600'> {success}</p>
                        </div>
                        <div className="space-y-1">
                              <div>
                                    <button type="submit" className="w-full px-6 py-2 font-semibold rounded-md bg-[#E31C25] text-white"> Sign in</button>
                              </div>
                              <p className="px-1 text-sm text-center text-gray-400">Don't have an account ? 

                                    <Link to='/register'><button rel="noopener noreferrer" className="hover:underline text-[#E31C25]">Sign in</button></Link>
                              </p>
                              
                              <div className='text-center mb-0 pb-0'>
                              <p className="px-3 text-sm text-center mt-4 mb-4 dark:text-gray-400">---- Login with social accounts ----</p> 
                                    <button onClick={googleLogIn} className=''><FaGoogle className='text-3xl text-[#EC4899]'></FaGoogle>
                                    </button></div>
                        </div>
                        
                  </form>
            </div>
      </div>
      );
};

export default LogIn;
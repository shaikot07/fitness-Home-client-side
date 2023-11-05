import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

import toast from 'react-hot-toast';


const Register = () => {
      const { createUser } = useContext(AuthContext)
      const [showError, setShowError] = useState('')
      const [success, setSuccess] = useState('')
      const navigate = useNavigate()
      

      const handleRegister = (e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget)
            const name = form.get("name");
            const photo = form.get("photo");
            const email = form.get("email");
            const password = form.get("password")
            console.log(name, photo, email, password);
            const info = {photoUrl:photo}

            if (password.length < 6) {
                  return setShowError('password should be at lest 6 charters');
            }
            else if (!/[A-Z]/.test(password)) {
                  return setShowError('password should be at lest 1 Upper case letter');
            }
            else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
                  return setShowError('password should be at lest 1 special charters');
            }
            createUser(email, password,info)
                  .then(res => {
                        setSuccess('Account Create Successfully!',)
                        navigate('/')
                  })
                  .catch(error => {
                        setShowError('Already Have Account')
                  })

      }
      
      return (
            <div className=''>
                  <div className="flex flex-col max-w-[400px] h-[600px] p-4 rounded-md sm:p-6 bg-gray-900 text-gray-100 mx-auto mt-12">
                        <div className="mb-8 text-center">
                              <h1 className="my-2 text-4xl font-bold text-[#E31C25]">Sign in</h1>
                              <p className="text-sm text-gray-400">Sign in to access your account</p>
                        </div>
                        <form onSubmit={handleRegister} className="space-y-6">
                              <div className="space-y-4">
                                    <div>
                                          <label className="block mb-2 text-sm">Name</label>
                                          <input type="text" name="name" placeholder="Enter your Name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                                    </div>
                                    <div>
                                          <label className="block mb-2 text-sm">Photo URL</label>
                                          <input type="text" name="photo" placeholder="Photo URl" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                                    </div>
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
                                          <button type="submit" className="w-full px-6 py-2 font-semibold rounded-md bg-[#E31C25] text-white"> Sign In</button>
                                    </div>
                                    <p className="px-1 text-sm text-center text-gray-400"> have an account ?

                                          <Link to='/login'><button rel="noopener noreferrer" className="hover:underline text-[#E31C25]">Log IN</button></Link>
                                    </p>
                                   
                              </div>
                              
                        </form>
                  </div>
            </div>
      );
};

export default Register;
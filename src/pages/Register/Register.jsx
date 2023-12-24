import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import Lottie from 'lottie-react';
import loginAnimetion from '../../assets/login-animetion.json'
import { FaGoogle } from 'react-icons/fa6';


const Register = () => {
      const { createUser } = useContext(AuthContext)
      const [showError, setShowError] = useState('')
      const [success, setSuccess] = useState('')
      const navigate = useNavigate()
      const auth = getAuth(app)
      const googleProvider = new GoogleAuthProvider()
      

      const handleRegister = (e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget)
            const name = form.get("name");
            const photo = form.get("photo");
            const email = form.get("email");
            const password = form.get("password")
            console.log(name, photo, email, password);


            if (password.length < 6) {
                  return setShowError('password should be at lest 6 charters');
            }
            else if (!/[A-Z]/.test(password)) {
                  return setShowError('password should be at lest 1 Upper case letter');
            }
            else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
                  return setShowError('password should be at lest 1 special charters');
            }
            createUser(email, password,)
                  .then(res => {

                        updateProfile(auth.currentUser, {
                              displayName: name,
                              photoURL: photo
                        })
                        setSuccess('Account Create Successfully!',)
                        navigate('/')
                  })
                  .catch(error => {
                        setShowError('Already Have Account')
                  })

      }

      // const googleLogIn= () =>{
      //       signInWithPopup(auth,googleProvider)
      //             .then(res =>{
      //                   console.log('log in sussccess');
      //                   toast.success('Log in success')
      //                   navigate("/")
                       
      //             })
      //             .catch(error =>{
      //                   toast.error('something Rowing')
      //             })
      // }
      return (
            <div className=''>
                  <Helmet>
                        <title>FH || register</title>
                  </Helmet>
                  <div className='flex justify-center items-center'>
                        <div className='w-[400px]'>
                              <Lottie animationData={loginAnimetion}></Lottie>
                        </div>
                        <div className="flex flex-col max-w-[400px] h-[600px] p-4 rounded-md sm:p-6 bg-gray-900 text-gray-100 mx-auto mt-12">
                              <div className="mb-8 text-center">
                                    <h1 className="my-2 text-4xl font-bold text-[#E31C25]">Register</h1>
                                    <p className="text-sm text-gray-400">Register to access your account</p>
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

                                                
                                                <div className="block mb-2 text-sm">
                                                      <label className="text-sm">Password</label>
                                                      <input type="password" name="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                                                      
                                                </div>
                                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-[#E31C25]">Forgot password?</a>
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
                                    {/* <div className='text-center mb-0 pb-0'>
                                                <p className="px-3 text-sm text-center mt-4 mb-4 dark:text-gray-400">---- Login with social accounts ----</p>
                                                <button onClick={googleLogIn} className=''><FaGoogle className='text-3xl text-[#EC4899]'></FaGoogle>
                                                </button>
                                          </div> */}
                                          

                              </form>
                        </div>
                  </div>

            </div>
      );
};

export default Register;
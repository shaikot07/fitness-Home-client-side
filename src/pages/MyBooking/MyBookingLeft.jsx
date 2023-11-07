import React from 'react';
import toast from 'react-hot-toast';
import { FaLocationDot } from 'react-icons/fa6';

const MyBookingLeft = ({ booking,handleBookingUpdate }) => {
      const { _id, img, name, gym_owner_name, price, gym_location,status } = booking || {}

      return (
            <div>
                  <div className="max-w-[550px] p-8 sm:flex sm:space-x-6 bg-gray-900 text-gray-100 mb-5">
                        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                              <img src={img} alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
                        </div>
                        <div className="flex flex-col space-y-4">
                              <div>
                                    <h2 className="text-2xl font-semibold">{name}</h2>
                                    <span className="text-sm text-gray-400">General manager</span>
                              </div>
                              <div className="space-y-1">
                                    <span className="flex items-center space-x-2">
                                          <FaLocationDot></FaLocationDot>
                                          <span className="text-gray-400">leroy.jenkins@company.com</span>
                                    </span>
                                    <span className="flex items-center space-x-2">
                                          <h2 className='text-2xl'>$</h2>
                                          <span className="text-gray-400">{price}</span>
                                          {/* <span className="text-gray-400">+25 381 77 983</span> */}
                                    </span>

                              </div>
                        </div>
                        <div>
                              {
                                    status === 'Pending' && ' In Progress'&& 'Completed' ? <span className='font-bold text-green-600'>Pending</span>
                                          :
                                          <button onClick={() => handleBookingUpdate(_id)} className="btn bg-red-700 text-white  hover:bg-slate-600">In progress</button>
                              }
                        </div>
                  </div>
            </div>
      );
};

export default MyBookingLeft;
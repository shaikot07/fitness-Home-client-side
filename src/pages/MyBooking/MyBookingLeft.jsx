import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const MyBookingLeft = ({ booking }) => {
      const { _id, img, name, gym_owner_name, price, gym_location } = booking || {}
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
                              <details className="dropdown">
                                    <summary className="m-1 btn bg-[#E31C25]">Pending</summary>
                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-red-400 rounded-box w-[120px]  hover:text-white">
                                          <li><a>In Progress</a></li>
                                          <li><a>Completed</a></li>
                                    </ul>
                              </details>
                        </div>
                  </div>
            </div>
      );
};

export default MyBookingLeft;
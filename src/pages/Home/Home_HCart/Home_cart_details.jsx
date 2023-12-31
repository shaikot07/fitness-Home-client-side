import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Home_cart_details = ({ data }) => {
      const { _id, img, name, description, gym_location, gym_owner_img, gym_owner_name,price } = data || {}
      return (
            <div>
                  <div className="relative flex max-w-[450px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                              <img className='rounded-lg'
                                    src={img}
                                    alt="ui/ux review check"
                              />
                        </div>
                        <div className="px-6">
                              <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-[#E31C25] ">
                                    {name}
                              </h4>
                              
                              <p className="block  font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                                    {description}
                              </p>
                              <h2 className='text-2xl text-[#E31C25]'>$ {price}</h2>
                        </div>
                        <div className="flex items-center justify-between p-6">
                              <div className="flex items-center gap-4">
                                    <img alt="" className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri" src={gym_owner_img} />
                                    <h2 className='text-2xl font-bold text-[#E31C25] '>{gym_owner_name}</h2>

                              </div>
                              
                        </div>
                        <div className=' ml-5'>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    <FaLocationDot className='inline text-[#E31C25]'></FaLocationDot> {gym_location}
                                    </p>
                        </div>
                        <div className='w-1/2 mx-auto mt-5 mb-5'>
                        <Link to="/services"><button className='bg-[#E31C25] text-white p-2  rounded-lg hover:bg-black'>Show All button</button></Link>
                        </div>
                  </div>
            </div>
      );
};

export default Home_cart_details;
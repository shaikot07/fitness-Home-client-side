import React, { useContext, useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ServiceDetails = () => {
      const {user}=useContext(AuthContext)
      const { id } = useParams()
      const convertId = parseInt(id)
      //      console.log(convertId);
      const [detelesData, setDetelesData] = useState([])
      const [useData, setUseData] = useState({})
      const { img, name, description, price, gym_owner_name, gym_owner_img, gym_location } = useData || {}
      console.log(useData);
      useEffect(() => {
            fetch('/public/data.json')
                  .then((res) => res.json())
                  .then((data) => {
                        setDetelesData(data);
                        const foundData = data.find((item) => item.id === convertId);
                        setUseData(foundData)
                  })
                  .catch((error) => console.error('Error fetching data:', error));
      }, [id]);
      return (
            // show details page 
            <div className='flex justify-center mt-16 mb-16'>
                  <div className="relative flex max-w-[550px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                              <img className='rounded-lg'
                                    src={img}
                                    alt="ui/ux review check"
                              />
                        </div>
                        <div className="p-6">
                              <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-[#E31C25] ">
                                    {name}
                              </h4>

                              <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
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
                        {/* modal part start here  */}
                        <div className='w-full mx-auto mt-5 mb-0 text-center'>
                              {/* Open the modal using document.getElementById('ID').showModal() method */}
                              <button className="btn bg-[#E31C25] text-white  hover:bg-slate-950" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                          <h3 className="font-bold text-lg">Hello!</h3>
                                          {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                                          <div className="flex">
                                                <form method="dialog">

                                                      <div className='grid grid-cols-2 gap-2'>
                                                            <div>
                                                                  <label className="label">
                                                                        <span className="label-text">Service name</span>
                                                                  </label>
                                                                  <label className="input-group input-group-vertical">

                                                                        <input type="text" placeholder="" value={name} className="input input-bordered" />
                                                                  </label>
                                                            </div>
                                                            <div>
                                                                  <label className="label">
                                                                        <span className="label-text">User Email</span>
                                                                  </label>
                                                                  <label className="input-group input-group-vertical">

                                                                        <input type="text" placeholder="" value={user?.email} className="input input-bordered" />
                                                                  </label>
                                                            </div>
                                                            <div>
                                                                  <label className="label">
                                                                        <span className="label-text">Service Taking Date</span>
                                                                  </label>
                                                                  <label className="input-group input-group-vertical">

                                                                        <input type="date" placeholder="" value="" className="input input-bordered" />
                                                                  </label>
                                                            </div>
                                                            <div>
                                                                  <label className="label">
                                                                        <span className="label-text">Special instruction</span>
                                                                  </label>
                                                                  <label className="input-group input-group-vertical">

                                                                        <input type="text" placeholder="Instruction" value="" className="input input-bordered" />
                                                                  </label>
                                                            </div>
                                                            <div>
                                                                  <label className="label">
                                                                        <span className="label-text">Price</span>
                                                                  </label>
                                                                  <label className="input-group input-group-vertical">

                                                                        <input type="text" placeholder="" value={'$'+price} className="input input-bordered" />
                                                                  </label>
                                                            </div>
                                                            <div>
                                                                  <label className="label">
                                                                        <span className="label-text">Service Provider email</span>
                                                                  </label>
                                                                  <label className="input-group input-group-vertical">

                                                                        <input type="text" placeholder="provider@gmail.com" value="" className="input input-bordered" />
                                                                  </label>
                                                            </div>
                                                      </div>

                                                      {/* if there is a button in form, it will close the modal */}
                                                      <div className='flex gap-6 mt-3 justify-center'>
                                                      <button className="btn btn-outline">Close</button>
                                                      <button  className='bg-[#E31C25] py-2 px-3 text-white rounded-lg hover:bg-slate-950'>Purchase this Service</button>
                                                      </div>
                                                </form>
                                          </div>
                                    </div>
                              </dialog>
                        </div>
                  </div>
            </div>
      );
};

export default ServiceDetails;
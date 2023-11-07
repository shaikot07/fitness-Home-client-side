import React from 'react';
import { Link } from 'react-router-dom';

const NewHomeCard = ({ data }) => {
      const { _id, img, name, description, gym_location, gym_owner_img, gym_owner_name, price } = data || {}
      return (
            <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
                  <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                  <div className="flex flex-col justify-between p-3 space-y-4">
                        <div className="space-y-2">
                              <h2 className="text-3xl font-semibold tracki">{name}</h2>
                              <p className="text-gray-100">{description}</p>
                              <h2 className="text-2xl font-semibold tracki">${price}</h2>
                        </div>
                        <div>
                              <div className="flex items-center space-x-2">
                                    <img src={gym_owner_img} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                                    <div className="-space-y-1">
                                          <h2 className="text-sm font-semibold leadi">{gym_owner_name}</h2>
                                          
                                    </div>
                              </div>
                        </div>
                        
                        <Link to={`/servicesditels/${_id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-[#E31C25] hover:bg-slate-800 text-white">View Detail</button></Link>
                  </div>
            </div>
      );
};

export default NewHomeCard;
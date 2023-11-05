import React from 'react';

const Services = () => {

      const handelSearch=()=>{
            
      }
      return (
            <div className='max-w-6xl mx-auto h-[400px] bg-green-500 pt-9 '>
                  <div className='max-w-[400px] mx-auto'>
                        <fieldset className="w-full space-y-1 dark:text-gray-100">
                              
                              <div className="flex ">
                                    <span className="flex items-center py-3 px-3 bg-[#E31C25] pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-700 text-white font-bold hover:bg-slate-950">Search</span>
                                    <input onClick={ handelSearch} type="text" name="url" id="url" placeholder="Type here something" className="flex flex-1 border sm:text-sm rounded-r-md focus:ri dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ri" />
                              </div>
                        </fieldset>
                  </div>
                  
            </div>
      );
};

export default Services;
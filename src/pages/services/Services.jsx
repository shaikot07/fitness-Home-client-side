import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
      const [searchInput, setSearchInput]=useState("")
      console.log(searchInput);
      const [data,setData]=useState([])
      const [isShow, setIsShow] = useState(false)
      // console.log(data);
      useEffect(()=>{
            fetch('http://localhost:5000/services')
            .then(res =>res.json())
            .then(data =>setData(data))
      },[])
      return (
            <div className='max-w-6xl mx-auto  pt-9 '>
                  <div className='max-w-[400px] mx-auto'>
                        <fieldset className="w-full space-y-1 dark:text-gray-100">
                              
                              <div className="flex ">
                                    <span className="flex items-center py-3 px-3 bg-[#E31C25] pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-700 text-white font-bold hover:bg-slate-950">Search</span>
                                    <input onChange={(e) => setSearchInput(e.target.value)} type="text" name="url" id="url" placeholder="Type here something" className="flex flex-1 border sm:text-sm rounded-r-md focus:ri dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ri" />
                              </div>
                        </fieldset>
                  </div>
                  <div>
                        <h2 className='text-center text-4xl text-[#E31C25] font-semibold mt-12' >All Services</h2>
                  </div>
                  <div className=''>
                        {   
                              isShow ? data.filter(df=>!searchInput?true:df.name.toUpperCase()=== searchInput.toUpperCase()).map(data =><ServicesCard key={data._id} data={data}></ServicesCard>)
                              : data.slice(0,4).filter(df=>!searchInput?true:df.name.toUpperCase()=== searchInput.toUpperCase()).map(data =><ServicesCard key={data._id} data={data}></ServicesCard>)
                        }
                  </div>
                  <div>
                  {data.length >= 4 && !isShow ? (
                                    <div className="text-center mt-12">
                                          <button
                                                onClick={() => setIsShow(true)}
                                                className="bg-green-700 text-white px-5 py-2"
                                          >
                                                See All
                                          </button>
                                    </div>
                              ) : (
                                    ''
                              )}
                  </div>
                  
            </div>
      );
};

export default Services;
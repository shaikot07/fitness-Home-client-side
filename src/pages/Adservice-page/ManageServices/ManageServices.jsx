import React, { useContext, useEffect, useState } from 'react';
import ManageServicCard from './ManageServiceCard';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import axios from 'axios';

const ManageServices = () => {
      const { user}=useContext(AuthContext)
      // console.log(user);
      const [loading,setLoading]=useState(true)
      const [servicess,setServicess] = useState([]);
      const [control,setControl]=useState(true)
      const url = `http://localhost:5000/newservices?email=${user.email}`;
      useEffect(() => {
            axios.get(url,{withCredentials:true})
              .then(res =>{
                  setServicess(res.data);
                  setLoading(false)
              })
            
                  
                 
      }, [url,control])
      console.log(servicess);
      if (loading) {
            return <div className='max-w-6xl mx-[300px] mt-10 mb-10'><div className="w-16 h-16  border-4 border-dashed rounded-full animate-spin border-violet-400"></div></div>
      }
      return (
            <div className='max-w-6xl mx-auto'>
                  {/* <h2>Your Bookings: {bookings.length}</h2> */}

                  <div className="overflow-x-auto">
                        <table className="table">
                              {/* head */}
                              <thead>
                                    <tr>
                                          <th>
                                                {/* <label>
                                                      <input type="checkbox" className="checkbox" />
                                                </label> */}
                                          </th>
                                          <th>image</th>
                                          <th>Service Name</th>
                                          <th>Description</th>
                                          <th>Price</th>
                                          <th></th>
                                    </tr>
                              </thead>
                              <tbody className='mb-5'>
                                   
                              
                              {
                                    servicess.map(service =><ManageServicCard 
                                          key={service._id}
                                          service={service}
                                          setControl={setControl}
                                          control={control}
                                    ></ManageServicCard>)
                              }
                              
                              </tbody>
                              {/* foot */}
                              

                        </table>
                  </div>
            </div>
      );
};

export default ManageServices;
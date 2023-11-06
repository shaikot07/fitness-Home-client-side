import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const Ser_provider_info = () => {
      return (
            <div >
                  <section className="my-8 bg-gray-800   w-[400px] text-gray-100">
                        <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-2">
                              
                             <h2 className='text-2xl '>Provider Name: <span >Emma Davis</span> </h2>
                             <h2 className='text-2xl '> <FaLocationDot className='inline'></FaLocationDot> 789 Oak Lane, Fitnessburg</h2>
                              <div className='p-4'>
                                    <p>A gym is a dedicated facility or space designed for physical fitness and exercise. It provides a controlled environment with a variety of exercise equipment and
                                           amenities to help individuals achieve their fitness goals. Gyms are equipped with a wide range of exercise machines, free weights, cardio equipment, and functional training areas to cater to different workout preferences and fitness levels.</p>
                              </div>
                                    
                        </div>
                  </section>
            </div>
      );
};

export default Ser_provider_info;
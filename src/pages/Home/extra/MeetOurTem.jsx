import React from 'react';

const MeetOurTem = () => {
      return (
            <div className=" max-w-6xl mx-auto mt-20">
                    <h2 className='text-2xl font-semibold text-center'>EXPERT TRAINER</h2>
                        <div className='w-[200px] mt-5 mb-5 mx-auto h-[5px] bg-red-600'></div>
                        <h2 className='text-5xl font-semibold text-center'>Meet Our Expert Team Member</h2>
                  <div className="lg:flex max-w-6xl mx-auto mt-20">
                        {/* start  */}
                      
                        <div className="flex flex-col max-w-md p-6 bg-gray-900 text-gray-100">
                              <img src="/src/assets/member-1.png" alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square" />
                              <div>
                                    <h2 className="text-xl font-semibold">Leroy Jenkins</h2>
                                    <span className="block text-sm text-gray-400">CTO of Company Inc.</span>

                              </div>
                        </div>
                        <div className="flex flex-col max-w-md p-6 bg-gray-900 text-gray-100">
                              <img src="/src/assets/member-2.png" alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square" />
                              <div>
                                    <h2 className="text-xl font-semibold">Leroy Jenkins</h2>
                                    <span className="block text-sm text-gray-400">CTO of Company Inc.</span>

                              </div>
                        </div>
                        <div className="flex flex-col max-w-md p-6 bg-gray-900 text-gray-100">
                              <img src="/src/assets/member-3.png" alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square" />
                              <div>
                                    <h2 className="text-xl font-semibold">Leroy Jenkins</h2>
                                    <span className="block  text-sm text-gray-400">CTO of Company Inc.</span>

                              </div>
                        </div>
                        {/* end  */}
                  </div>
            </div>
      );
};

export default MeetOurTem;
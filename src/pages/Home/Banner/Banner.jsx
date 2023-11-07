import React from 'react';

const Banner = () => {
      return (
            <div className="carousel w-full h-[600px] ">
                  <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/sRSgzfS/banner-3.jpg" className="w-full" />
                        <div className='sm:w-[500px] md:w-[700px] h-[400px] absolute sm:ml-5 md:ml-20 md:mt-28 py-6  flex-1 justify-center items-center space-y6'>
                              <div className='mt-12 ml-5'>
                              <h1 className='text-6xl font-extrabold text-white'>OUTDOR GYM NOW OPEN <br /> WITH 15% DISCOUNT </h1>
                              </div>
                              <div className='mt-16'>
                                    <button className='btn bg-[#E31C25] ml-3 border-0 text-white hover:bg-slate-900'>Claim New Offer</button>
                                    <button className="btn btn-outline btn-error ml-12">Contact Us Now</button>
                              </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide4" className="btn btn-circle">❮</a>
                              <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/QYxLRLw/banner-2.jpg" className="w-full" />
                        <div className='sm:w-[500px] md:w-[700px] h-[400px] absolute sm:ml-5 md:ml-20 md:mt-28 py-6  flex-1 justify-center items-center space-y6'>
                              <div className='mt-12 ml-5'>
                              <h1 className='text-6xl font-extrabold text-white'>OUTDOR GYM NOW OPEN <br /> WITH 15% DISCOUNT </h1>
                              </div>
                              <div className='mt-16'>
                                    <button className='btn bg-[#E31C25] ml-3 border-0 text-white hover:bg-slate-900'>Claim New Offer</button>
                                    <button className="btn btn-outline btn-error ml-12">Contact Us Now</button>
                              </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide1" className="btn btn-circle">❮</a>
                              <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/C8YPYnW/5.jpg" className="w-full" />
                        <div className='sm:w-[500px] md:w-[700px] h-[400px] absolute sm:ml-5 md:ml-20 md:mt-28 py-6  flex-1 justify-center items-center space-y6'>
                              <div className='mt-12 ml-5'>
                              <h1 className='text-6xl font-extrabold text-white'>OUTDOR GYM NOW OPEN <br /> WITH 15% DISCOUNT </h1>
                              </div>
                              <div className='mt-16'>
                                    <button className='btn bg-[#E31C25] ml-3 border-0 text-white hover:bg-slate-900'>Claim New Offer</button>
                                    <button className="btn btn-outline btn-error ml-12">Contact Us Now</button>
                              </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="btn btn-circle">❮</a>
                              <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                  </div>
                  <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/frgscpw/banner-1.png" className="w-full" />
                        <div className='sm:w-[500px] md:w-[700px] h-[400px] absolute sm:ml-5 md:ml-20 md:mt-28 py-6  flex-1 justify-center items-center space-y6'>
                              <div className='mt-12 ml-5'>
                              <h1 className='text-6xl font-extrabold text-white'>OUTDOR GYM NOW OPEN <br /> WITH 15% DISCOUNT </h1>
                              </div>
                              <div className='mt-16'>
                                    <button className='btn bg-[#E31C25] ml-3 border-0 text-white hover:bg-slate-900'>Claim New Offer</button>
                                    <button className="btn btn-outline btn-error ml-12">Contact Us Now</button>
                              </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide3" className="btn btn-circle">❮</a>
                              <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;
import React, { } from 'react';
import Banner from './Banner/Banner';
import Home_HCart from './Home_HCart/Home_HCart';


const Home = () => {

      return (
            <div>
                  <Banner></Banner>
                  <div className='max-w-6xl mx-auto'>
                        <div>
                              <h2 className='text-5xl font-semibold text-[#E31C25] text-center mt-16'>Popular Services</h2>
                              <hr className='w-1/2 mx-auto bg-black mt-2' />
                        </div>
                        <Home_HCart></Home_HCart>
                  </div>
            </div>
      );
};

export default Home;
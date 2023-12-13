import React, { } from 'react';
import Banner from './Banner/Banner';
import Home_HCart from './Home_HCart/Home_HCart';
import { Helmet } from 'react-helmet-async';
import MeetOurTem from './extra/MeetOurTem';
import HomeFitures from './extra/HomeFitures';
import HomePrice from './extra/HomePrice';
import TestContact from './extra/TestContact';


const Home = () => {

      return (
            <div>
                  <Helmet>
                        <title>FH ||home</title>
                  </Helmet>
                  <Banner></Banner>
                  <div className='max-w-6xl mx-auto'>
                        <div className='bg-[#1F2937] py-4'>
                              <h2 className='text-5xl font-semibold text-[#E31C25] text-center mt-16'>Popular Services</h2>
                              <hr className='w-1/2 mx-auto bg-black mt-2' />
                        </div>
                        <Home_HCart></Home_HCart>
                        <MeetOurTem></MeetOurTem>
                        <HomeFitures></HomeFitures>
                        <HomePrice></HomePrice>
                        <TestContact></TestContact>
                  </div>
                  
            </div>
      );
};

export default Home;
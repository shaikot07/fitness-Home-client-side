import React, { } from 'react';
import Banner from './Banner/Banner';
import Home_HCart from './Home_HCart/Home_HCart';


const Home = () => {
      
      return (
            <div>
                  <Banner></Banner>
                  <div className='max-w-6xl mx-auto'>
                  <Home_HCart></Home_HCart>
                  </div>
            </div>
      );
};

export default Home;
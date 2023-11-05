import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Sheard/Navbar';
import Banner from '../pages/Home/Banner/Banner';
import Footer from '../pages/Sheard/Footer';

const Main = () => {
      return (
            <div>
                 <div className=' bg-red-700 z-50'>
                 <Navbar></Navbar>
                 </div>
                 
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Main;
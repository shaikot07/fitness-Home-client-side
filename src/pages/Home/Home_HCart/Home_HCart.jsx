import React, { useEffect, useState } from 'react';
import Home_cart_details from './Home_cart_details';
import NewHomeCard from './NewHomeCard';
import { Link } from 'react-router-dom';

const Home_HCart = () => {

      const [data, setData] = useState([])
      // console.log(data);
      useEffect(() => {
            fetch('http://localhost:5000/services')
                  .then(res => res.json())
                  .then(data => setData(data))
      }, [])
      return (

            <div className='max-w-6xl  mx-auto bg-[#1F2937] py-6'>
                  <div className='grid md:grid-cols-3 gap-6 mt-20 mb-20 justify-center'>
                        {
                              data.slice(0, 6).map(data => <NewHomeCard key={data.id} data={data}></NewHomeCard>)
                        }
                  </div>
                  <div className='flex justify-center'>
                  <Link to='/services'><button className='bg-red-600 text-white px-5 py-2 rounded-md mt-5 hover:bg-white hover:text-black'>Show All</button></Link>
                  </div>
            </div>
      );
};

export default Home_HCart;
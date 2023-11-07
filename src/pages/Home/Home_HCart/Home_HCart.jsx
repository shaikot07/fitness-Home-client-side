import React, { useEffect, useState } from 'react';
import Home_cart_details from './Home_cart_details';
import NewHomeCard from './NewHomeCard';

const Home_HCart = () => {

      const [data, setData] = useState([])
      // console.log(data);
      useEffect(() => { 
            fetch('http://localhost:5000/services')
                  .then(res => res.json())
                  .then(data => setData(data))
      }, [])
      return (
            
            <div className='max-w-6xl  mx-auto'>
                  <div className='grid md:grid-cols-3 gap-6 mt-20 mb-20 justify-center'>
                 {
                  data.slice(0,6).map(data =><NewHomeCard key={data.id} data={data}></NewHomeCard>)
                 }
            </div>
            </div>
      );
};

export default Home_HCart;
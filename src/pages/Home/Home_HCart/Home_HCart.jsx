import React, { useEffect, useState } from 'react';
import Home_cart_details from './Home_cart_details';

const Home_HCart = () => {

      const [data, setData] = useState([])
      // console.log(data);
      useEffect(() => { 
            fetch('/public/H_data.json')
                  .then(res => res.json())
                  .then(data => setData(data))
      }, [])
      return (
            <div className='grid grid-cols-2 gap-6'>
                 {
                  data.map(data =><Home_cart_details key={data.id} data={data}></Home_cart_details>)
                 }
            </div>
      );
};

export default Home_HCart;
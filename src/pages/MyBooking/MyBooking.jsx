import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyBookingLeft from './MyBookingLeft';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const MyBooking = () => {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            // Define the URL you want to fetch data from
            const apiUrl = ' https://assignment-11-server-side-jet.vercel.app/bookings';

            axios.get(apiUrl)
                  .then(res => {
                        
                        setData(res.data);
                        setLoading(false);
                  })
                  .catch(error => {
                        console.error('Error fetching data:', error);
                        setLoading(false);
                  });
      }, []);
      const handleBookingUpdate = id =>{
            fetch(` https://assignment-11-server-side-jet.vercel.app/bookings/${id}`,{
                  method:'PATCH',
                  headers:{
                        'content-type': 'application/json'
                  },
                  body:JSON.stringify({status:'Pending'},{status:'In Progress'},{status:' Completed'})
            })
                  .then(res =>res.json())
                  .then(data =>{
                        console.log(data);
                        if(data.modifiedCount > 0){
                              toast.success('Pending')
                              // update state 
                              const remaining = data.filter(booking => booking._id !== id);
                              const updated = data.find(booking => booking._id === id);
                              updated.status='Pending'
                              const newBooking = [updated, ...remaining];
                              setData(newBooking)
                        }
                  })
      }
      if(loading){
            return <div className="w-16 h-16 md:ml-[500px] mt-4 mb-4 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
      }
      return (
            <div className='max-w-6xl mx-auto flex justify-center mt-20'>
                  <Helmet>
                        <title>FH || MyBooking</title>
                  </Helmet>
                  <div className=''>

                   {
                        data.length === 0 ? <h2 className='text-3xl text-yellow-400 mt-10 mb-28'>Not Booking data available</h2>:
                        data.map(booking =><MyBookingLeft key={booking._id} 
                              booking={booking}
                              handleBookingUpdate={handleBookingUpdate}
                              ></MyBookingLeft>)
                   }
                  </div>
                  
            </div>
      );
};

export default MyBooking;
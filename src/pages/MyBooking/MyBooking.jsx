import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyBookingLeft from './MyBookingLeft';

const MyBooking = () => {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            // Define the URL you want to fetch data from
            const apiUrl = 'http://localhost:5000/bookings';

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
      return (
            <div>
                  <div>
                  <h1>{data.length}</h1>
                   {
                        data.map(booking =><MyBookingLeft key={booking._id} booking={booking}></MyBookingLeft>)
                   }
                  </div>
                  <div>this is for right side </div>
            </div>
      );
};

export default MyBooking;
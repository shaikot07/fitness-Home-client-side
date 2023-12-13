import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const TestContact = () => {
      const form = useRef();

      const sendEmail = (e) => {
            e.preventDefault();
            console.log(e);
            emailjs.sendForm('service_w1ylpqe', 'template_8pxe57h', form.current, 'EP3hBlHhMwS79VTB2')
                  //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
                  .then((result) => {
                        console.log(result.text);
                        Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "Message send successfully",
                              showConfirmButton: false,
                              timer: 1500
                        })
                  }, (error) => {
                        console.log(error.text);
                  });
      };
      return (
            <div className="my-container overflow-x-hidden mt-12 py-4" id="contact">
                  <div className="max-w-2xl mx-auto mb-16 text-center">
                        {/* <span className="font-bold tracki uppercase text-red-700">Pricing</span> */}
                        <h2 className="text-4xl font-bold lg:text-5xl">Contact With Us</h2>
                  </div>
                  <form ref={form} onSubmit={sendEmail} className='space-y-4 my-6'>
                        <div className='space-y-2'>
                              <label className='text-slate-300 font-semibold'>Name</label>
                              <input className='my-inp' type="text" name="user_name" placeholder='Your name' />
                        </div>
                        <div className='space-y-2'>
                              <label className='text-slate-300 font-semibold'>Email</label>
                              <input className='my-inp' type="email" name="user_email" placeholder='Your email' required />
                        </div>
                        <div className='space-y-2'>
                              <label className='text-slate-300 font-semibold'>Message</label>
                              <textarea className='my-inp' name="message" placeholder='Your message' required />
                        </div>
                        <button type='submit' className='cmn-btn-one'>Send</button>
                  </form>

            </div>
      );
};

export default TestContact;
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ManageServicCard = ({service,setControl,control}) => {
      const {user}=useContext(AuthContext)
      const {_id,img,area,description,email,price,providerName,serviceName}=service ||{}


      const handleDelete = (_id) => {
            console.log(_id);
            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                  if (result.isConfirmed) {

                        console.log('delete confrm');
                        fetch(`http://localhost:5000/newservices/${_id}`, {
                              method: 'DELETE'
                        })
                              .then(res => res.json())
                              .then(data => {
                                    if (data.deletedCount > 0) {
                                          Swal.fire(
                                                'Deleted!',
                                                'service has been deleted.',
                                                'success'
                                          )
                                          
                                          // const remaining =products.filter(item =>item._id !== _id);
                                          // // console.log(remaining);
                                          // setProducts(remaining)
                                    }
                                    setControl(!control)
                              }).catch(error => {
                                    console.log(error);
                              })
                  }
            })
      }
      return (
            
                  <tr className=''>
                        <th>
                              <button onClick={()=>handleDelete(_id)} className="btn btn-circle  btn-sm btn-outline">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                              <button>delete</button>
                        </th>
                        <td>
                              <div className="avatar">
                                    <div className="w-24 rounded">
                                         <img src={img} alt="" />
                                    </div>
                              </div>
                              

                        </td>
                        <td>
                             {serviceName}
                        </td>
                        <td>{description}</td>
                        <td>${price}</td>
                        <th>
                        <div className='w-full mx-auto mt-5 mb-0 text-center'>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn bg-[#E31C25] text-white  hover:bg-slate-950" onClick={() => document.getElementById('my_modal_5').showModal()}>Edit Info</button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                          <div className="modal-box">
                                                <h3 className="font-bold text-lg">Hello!</h3>
                                                {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                                                <div className="flex">
                                                      <form  method="dialog">

                                                            <div className='grid grid-cols-2 gap-2'>
                                                                  <div>
                                                                        <label className="label">
                                                                              <span className="label-text">Service Image Url</span>
                                                                        </label>
                                                                        <label className="input-group input-group-vertical">

                                                                              <input type="text" placeholder="" defaultValue={img} name='img' className="input input-bordered" />
                                                                        </label>
                                                                  </div>
                                                                  <div>
                                                                        <label className="label">
                                                                              <span className="label-text">Service name</span>
                                                                        </label>
                                                                        <label className="input-group input-group-vertical">

                                                                              <input type="text" placeholder="" defaultValue={serviceName} name='serviceName' className="input input-bordered" />
                                                                        </label>
                                                                  </div>
                                                                  <div>
                                                                        <label className="label">
                                                                              <span className="label-text">User Email</span>
                                                                        </label>
                                                                        <label className="input-group input-group-vertical">

                                                                              <input type="text" placeholder="" readOnly value={user?.email} name='email' className="input input-bordered" />
                                                                        </label>
                                                                  </div>
                                                                  <div>
                                                                        <label className="label">
                                                                              <span className="label-text">Area</span>
                                                                        </label>
                                                                        <label className="input-group input-group-vertical">

                                                                              <input type="area" placeholder=""
                                                                                    name='area' defaultValue={area} className="input input-bordered" />
                                                                        </label>
                                                                  </div>
                                                                  <div>
                                                                        <label className="label">
                                                                              <span className="label-text">Description</span>
                                                                        </label>
                                                                        <label className="input-group input-group-vertical">

                                                                              <input type="text"
                                                                                    name='description' defaultValue={description} placeholder="Description" className="input input-bordered" />
                                                                        </label>
                                                                  </div>
                                                                  <div>
                                                                        <label className="label">
                                                                              <span className="label-text">Price</span>
                                                                        </label>
                                                                        <label className="input-group input-group-vertical">

                                                                              <input type="text" placeholder="" defaultValue={`$${price}`} name='price' className="input input-bordered" />
                                                                        </label>
                                                                  </div>
                                                                  
                                                            </div>

                                                            {/* if there is a button in form, it will close the modal */}
                                                            <div className='flex gap-6 mt-3 justify-center'>
                                                                  <button className="btn btn-outline">Close</button>
                                                                  <button type='submit' className='bg-[#E31C25] py-2 px-3 text-white rounded-lg hover:bg-slate-950'>Update</button>
                                                            </div>
                                                      </form>
                                                </div>
                                          </div>
                                    </dialog>
                              </div>
                              
                        </th>
                  </tr>
            
      );
};

export default ManageServicCard;
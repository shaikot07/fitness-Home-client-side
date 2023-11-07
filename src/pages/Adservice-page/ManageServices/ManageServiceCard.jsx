import React from 'react';

const ManageServicCard = ({service}) => {
      const {_id,img,area,description,email,price,providerName,serviceName}=service ||{}
      return (
            
                  <tr>
                        <th>
                              {/* <button onClick={()=>handleDelete(_id)} className="btn btn-circle  btn-sm btn-outline">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button> */}
                              <button>delete</button>
                        </th>
                        <td>
                              <div className="avatar">
                                    <div className="w-24 rounded">
                                         <img src={img} alt="" />
                                    </div>
                              </div>
                              <div>
                                    <div className="font-bold">email</div>
                                    <div className="text-sm opacity-50">United States</div>
                              </div>

                        </td>
                        <td>
                             {serviceName}
                        </td>
                        <td>{description}</td>
                        <td>$</td>
                        <th>
                              <button>Update</button>
                        </th>
                  </tr>
            
      );
};

export default ManageServicCard;
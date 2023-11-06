import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddService_page = () => {
      const { user } = useContext(AuthContext)

      const handleAddButton = (event) => {
            event.preventDefault()
            const form = event.target
            const img = form.img.value;
            const serviceName = form.serviceName.value;
            const email = form.email.value;
            const providerName = form.providerName.value;
            const price = form.price.value;
            const area = form.area.value;
            const description = form.description.value;
            const addNewProduct = { img, serviceName, email, providerName, price, area, description, }
            console.log(addNewProduct);
            fetch('http://localhost:5000/newservices', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(addNewProduct)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                              Swal.fire({
                                    title: "Good job!",
                                    text: "Product added SuccessFully",
                                    icon: "success"
                              });
                        }

                  }).catch(error => console.log(error))

      }
      return (
            <div>
                  <section className="p-6 text-gray-50">
                        <form onSubmit={handleAddButton} className="container flex flex-col mx-auto space-y-12">
                              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                                    <div className="space-y-2 col-span-full lg:col-span-1">
                                          <p className="font-medium">Added Your New Service</p>
                                          <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                                    </div>
                                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                          <div className="col-span-full sm:col-span-3">
                                                <label className="text-sm">Image URL</label>
                                                <input type="text" name='img' placeholder="Photo Url" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                                          </div>
                                          <div className="col-span-full sm:col-span-3">
                                                <label className="text-sm"> Service Name</label>
                                                <input type="text" name='serviceName' placeholder=" Service Name" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                                          </div>
                                          <div className="col-span-full sm:col-span-3">
                                                <label className="text-sm">Email</label>
                                                <input type="email" name='email' placeholder="Email" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                                          </div>
                                          <div className="col-span-full">
                                                <label className="text-sm">provider name</label>
                                                <input type="text" name='providerName' placeholder="provider name" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                                          </div>
                                          <div className="col-span-full sm:col-span-2">
                                                <label className="text-sm"> Price</label>
                                                <input type='number' name='price' placeholder="price" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                                          </div>
                                          <div className="col-span-full sm:col-span-2">
                                                <label className="text-sm"> Service Area</label>
                                                <input type="text" name='area' placeholder="Service Area" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                                          </div>
                                          <div className="col-span-full sm:col-span-2">
                                                <label className="text-sm">Description</label>
                                                <input type="text" name='description' placeholder="Description" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                                          </div>
                                    </div>
                                    <button type="submit" className="px-4 py-2 border bg-red-700 hover:bg-slate-900 rounded-md dark:border-gray-100">Added Service</button>
                              </fieldset>

                        </form>
                  </section>
            </div>
      );
};

export default AddService_page;
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Rouites/Routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <ToastContainer/>
  </React.StrictMode>,
)

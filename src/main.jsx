import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Rouites/Routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>

    <ToastContainer />
  </React.StrictMode>,
)

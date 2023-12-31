import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";
import Services from "../pages/services/Services";
import ServiceDetails from "../pages/services/ServiceDetails";
import AddService_page from "../pages/Adservice-page/AddService_page";
import ManageServices from "../pages/Adservice-page/ManageServices/ManageServices";
import PrivateRoute from "./PrivateRoute";
import MyBooking from "../pages/MyBooking/MyBooking";
import ErrorPage from "../pages/Sheard/ErrorPage";



const router = createBrowserRouter([
      {
            path:"/",
            element:<Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                  {
                        path:'/',
                        element:<Home></Home>
                  },
                  {
                        path:'login',
                        element:<LogIn></LogIn>
                  },
                  {
                        path:'register',
                        element:<Register></Register>
                  },
                  {
                        path:'services',
                        element:<Services></Services>
                  },
                  {
                        path:'servicesditels/:id',
                        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
                  },
                  {
                        path:'addservices',
                        element:<PrivateRoute><AddService_page></AddService_page></PrivateRoute>
                  },
                  {
                        path:'manageservices',
                        element:<PrivateRoute><ManageServices></ManageServices></PrivateRoute>
                  },
                  {
                        path:'mybookings',
                        element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>
                  },
            ]
      }
])

export default router;
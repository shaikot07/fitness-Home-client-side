import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";
import Services from "../pages/services/Services";
import ServiceDetails from "../pages/services/ServiceDetails";



const router = createBrowserRouter([
      {
            path:"/",
            element:<Main></Main>,
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
                        element:<ServiceDetails></ServiceDetails>
                  },
            ]
      }
])

export default router;
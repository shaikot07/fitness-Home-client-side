import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";



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
            ]
      }
])

export default router;
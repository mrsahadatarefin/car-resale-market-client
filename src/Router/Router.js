import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout"
import Main from "../Layout/main"
import Admin from "../Pages/Admin/Admin"
import DashBoard from "../Pages/DashBoard/DashBoard"
import MyProduct from "../Pages/DashBoard/MyProduct/MyProduct"


import Fore from "../Pages/ForeOFore/Fore"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import PrivateRoute from "./PriveteRoute/PriveteRoute"

 const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[

            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/admin",
                element:<Admin></Admin>
            },
            




        ],
       
        
    },

    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<MyProduct></MyProduct>
            }
        ]
    },
    {path:'*',element:<Fore></Fore>}
])
export default router
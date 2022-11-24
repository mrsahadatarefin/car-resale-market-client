import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/main"
import Fore from "../Pages/ForeOFore/Fore"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"

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
            }
        ],
       
        
    },
    {path:'*',element:<Fore></Fore>}
])
export default router
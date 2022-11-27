import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navber = () => {
const {user,logOut }=useContext(AuthContext)
   
   const handelLogOut= ()=>{
    logOut()
    .then (()=>{

    })
    .catch (err => console.log(err));
   }

   console.log(user)
   
   const menuItems =<React.Fragment>
        <li><Link  to =''>Home</Link ></li>
        <li><Link to ='' >Products</Link ></li>
        
       
        {
            user?.uid ?<li><button onClick={handelLogOut}>Log out</button ></li>
            :
           <>
           <li><Link to ='register' >Register</Link ></li>
           <li><Link to ='/login'>Login</Link ></li>
           </>            
        }

         
        <li><Link to ='/dashboard' >Dashboard</Link ></li>
        <li><Link to =''>Want ot know</Link ></li>
        {user?.admin && <li><Link to ='/admin'>Admin Dashboard</Link ></li>}
    </React.Fragment>
    
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}

      </ul>
    </div>
    <Link to ='/' className="btn btn-ghost normal-case text-xl "><span className='text-3xl text-red-700'> Car</span>    <span className='italic text-2xl'>bazar</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    {menuItems}
    </ul>
  </div>
  <label   htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  
</div>
        </div>
    );
};

export default Navber;
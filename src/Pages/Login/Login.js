import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const {register, formState: {errors}, handleSubmit} = useForm();
  
  const {signIn,signINWithGoogle} =useContext (AuthContext)
  const [loginError,setLoginError]=useState('')
 const location =useLocation();
 const navigate = useNavigate();
 const from = location.state?.from?.pathname || "/"
  const handleLogin = data =>{
  
    signIn(data.email,data.password,)
    .then(result =>{
        const user = result.user;
        console.log(user)
       navigate (from,{replace:true})
       setLoginError('');
    })
    .catch (error => {
        console.log(error.message)
        setLoginError(error.message)
    }
    );
  }
  const handleGoogleSingIn =()=>{
    signINWithGoogle()
    .then(result =>{
        const user = result.user
        console.log(user);
    })
    .catch(error => console.error(error))

  }




  return (
    <div className=" h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-center">Login</h2>


        <form onSubmit={handleSubmit(handleLogin)}>
      
     
      
      <div className="form-control w-full max-w-xs">
  <label className="label"> <span className="label-text">Email</span></label>
  <input  type="text" className="input input-bordered w-full max-w-xs" {...register("email",{required:'Email Address is required'})} />
{errors.email && <p className="text-red-600">{errors.email?.message}</p>}
</div>
      <div className="form-control w-full max-w-xs">
  <label className="label"> <span className="label-text">password</span></label>
  <input  type="password" className="input input-bordered w-full max-w-xs" {...register("password",{required:'password Address is required'})} />
  <label className="label"> <span className="label-text">Forget password</span></label>
  {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
</div>
     
     
     
     
     
<input type="submit"  className=" btn btn-black w-full" value='login'/>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
{/* <select {...register("category", { required: true })}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select> */}
     
      <div>
{loginError&&<p>{loginError}</p>
 }

      </div>
    </form>
    <p className="p-5">New to car bazar? <Link  className="text-secondary" to="/register">create a new account</Link></p>
    <div className="flex flex-col w-full border-opacity-50">
  
  <div className="divider">OR</div>

  <button className="btn btn-outline w-full" onClick={handleGoogleSingIn}> Continue with GooGle</button>
  
</div>
      
      </div>

    </div>
  );
};

export default Login;

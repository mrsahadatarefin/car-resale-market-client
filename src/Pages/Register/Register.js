
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    
const {register, formState: {errors}, handleSubmit} = useForm();
  const {createUser,updateUser,signINWithGoogle}=useContext(AuthContext)
const [signupError,setSingupError]=useState('')

const location =useLocation();
const navigate = useNavigate();
const from = location.state?.from?.pathname || "/"
const handleRegister = data =>{
    console.log(data)
    setSingupError('')
    createUser(data.email,data.password)
    .then(result=>{
        const user = result.user;
        console.log(user)
        navigate (from,{replace:true})
        const userInfo ={displayName:data.name

        }
        updateUser(userInfo)
        .then(() =>{})
        .catch(err => console.log(err))
    })
    .catch(error =>{
        console.log(error)
        setSingupError(error.message)
    })
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
          <h2 className="text-2xl text-center">Sign up</h2>
  
  
          <form onSubmit={handleSubmit(handleRegister)}>
        
       
        
        <div className="form-control w-full max-w-xs">
    <label className="label"> <span className="label-text">Name</span></label>
    <input  type="text" className="input input-bordered w-full max-w-xs" {...register("name",{required:'name  is required'})} />
  {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
  </div>
        <div className="form-control w-full max-w-xs">
    <label className="label"> <span className="label-text">Email</span></label>
    <input  type="text" className="input input-bordered w-full max-w-xs" {...register("email",{required:'Email Address is required'})} />
  {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
  </div>
        <div className="form-control w-full max-w-xs">
    <label className="label"> <span className="label-text">password</span></label>
    <input  type="password" className="input input-bordered w-full max-w-xs" {...register("password",{required:'password  is required'})} />
    <label className="label"> <span className="label-text">Forget password</span></label>
    {errors.password && <p className="text-red-600">{errors.password?.message}</p>}


<div className="form-control w-full max-w-xs mb-5 " >
<select {...register("category", { required: 'required'})}>
          <option value="">are you buyer or seller</option>
          <option value="buyer">buyer</option>
          <option value="seller">seller</option>
        </select>
        {errors.category && <p className="text-red-600">{errors.category?.message}</p>}
</div>
    
  </div>
       
       
       
       
       
  <input type="submit"  className=" btn btn-black w-full" value='Sign up'/>
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
  
       {
        signupError && <p className='text-secondary-600'>{signupError}</p>
       }
        
      </form>
      <p className="p-5">All ready have an account <Link  className="text-secondary" to="/login">please login</Link></p>
      <div className="flex flex-col w-full border-opacity-50">
    
    <div className="divider">OR</div>
  
    <button className="btn btn-outline w-full" onClick={handleGoogleSingIn}> Continue with GooGle</button>
    
  </div>
        
        </div>
  
      </div>
    );
};

export default Register;
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const BookingModal = ({product,setProduct}) => {
    const {user}=useContext(AuthContext)
    console.log("user 33 ==> ", user);
    const { name,price,}=product
  
  const handleBooking =event =>{
    event.preventDefault();
    const form = event.target;
    const names = form.name.value;
    const email = form.email.value;
    const number =form.number.value;
    const location = form.location.value

const booking = {
    name:names, 
    email:email,
    number:number,
    location:location,
   product:name,
   price:price

}
fetch("https://products-resale-server-mrsahadatarefin.vercel.app/bookings",{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(booking)
})
.then(res => res.json())
.then(data => {
    // console.log(data)
    setProduct(null);
    
})


  }
  
  
    return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
           {name}
          </h3>
          <p className="mt-5"> <span className="font-bold">Price :</span>{price}$</p>
          <form  onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10 ">

          <input  name="name"  defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input input-bordered w-full " />
          <input name="email"  defaultValue={user?.email} 

 type="email" placeholder="Email " className="input input-bordered w-full " />
          <input name="number" type="text" placeholder="number" className="input input-bordered w-full " />
           
          <input name="location"  type="text" placeholder="location" className="input input-bordered w-full " />
          
          <br />
          
          <input className="btn btn=accent w-full max-w-xs " type='submit'value='Submit'/>

          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

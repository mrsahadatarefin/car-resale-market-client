import React from "react";

const BookingModal = ({product}) => {
    const { name,description,image,price,originalPrice,useTime,date,}=product
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
          <p> Price :{price}$</p>
          <form  className="grid grid-cols-1 gap-3 mt-6 ">

          <input type="text" placeholder="Type here" className="input w-full " />
          <input type="text" placeholder="Type here" className="input w-full " />
          <input type="text" placeholder="Type here" className="input w-full " />
          
          <input type="text" placeholder="Type here" className="input w-full " />
          <br />
          
          <input className="btn btn=accent w-full max-w-xs " type='submit'value='Submit'/>

          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

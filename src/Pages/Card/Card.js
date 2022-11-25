import React from 'react';

const Card = ({product}) => {
    const { name,description,image,price,originalPrice,useTime,date,} = product 

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description.slice(0,100)}....</p>
    <div className='flex p-2 font-bold'><p> Original Price : {originalPrice}$</p>
    <p> Price :{price}$</p></div>
   <div className='flex p-2 '>
   <p> <span  className='font-bold'>use time</span> :{useTime} year</p>
    <p><span className='font-bold'>publish date</span> :{date} </p>
   </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Card;
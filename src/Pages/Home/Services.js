import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import Card from "../Card/Card";
import Service from "./service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
const [product,setProduct]=useState({})
  useEffect(() => {
    fetch(`http://localhost:5000/categoryName`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const handleSelectCategory = (categoryId) => {
    fetch(`http://localhost:5000/services/${categoryId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data ==> ", data);
        if (data?.length > 0) {
          setProducts(data);
        }
      });
  };

  return (
    <div>
      <div>
        <h3 className="text-3xl font-bold text-rose-700 text-center mt-6">
          Services
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center mt-10">
        {services.map((service) => (
          <Service
            kay={service._id}
            service={service}
            onClick={handleSelectCategory}
          ></Service>
        ))}
      </div>
<div className="grid   grid-cols-1  grid-gap-5 md:grid-cols-2 lg:grid-cols-3    mt-10">
{products.map((product) => (
        <Card key={product._id} product={product} setProduct={setProduct}>

        </Card>
      ))}
</div>
{
   product&& 
    <BookingModal
product={product}

></BookingModal>}
      
    </div>
  );
};

export default Services;

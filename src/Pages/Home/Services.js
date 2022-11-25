import React, { useEffect, useState } from 'react';
import Service from './service/Service';

const Services = () => {

    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/categoryName`)
        .then(res =>res.json()) 
        .then(data =>setServices(data))
       
        
    }, [])
    return (
        <div>
            <div><h3 className='text-3xl font-bold text-rose-700 text-center mt-6'>Services</h3></div>
            <div className='grid   grid-cols-1  md:grid-cols-2 lg:grid-cols-3  mt-10'>

{
    services.map(service=><Service  kay={service._id} service={service}>

    </Service>)
}


            </div>
            
        </div>
    );
};

export default Services;
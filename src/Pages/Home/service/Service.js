import React from 'react';

const Service = ({service}) => {
    console.log(service)
    return (
        <div>
           
            <button className="btn btn-outline m-3">{service.category}</button>
            
        </div>
    );
};

export default Service;
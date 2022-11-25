import React from 'react';

const Service = ({service, onClick}) => {
    console.log(service);
    const {category_id, category} = service || {};

    return (
        <div>
           
            <button className="btn btn-outline m-3" onClick={() => onClick(category_id)}>{category}</button>
            
        </div>
    );
};

export default Service;
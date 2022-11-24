import React from 'react';
import { Link } from 'react-router-dom';
import img from '../ForeOFore/930-9306658_404-png.png'

const Fore = () => {
    return (
        <div className='   p=10 m-10 lg:flex justify-center items-center mt-10 '>
            <img src={img} alt="" srcset="" />
            <Link to ="/" className='text-2xl  ml-5 text-blue-500'> Go to Home</Link>
        </div>
    );
};

export default Fore;
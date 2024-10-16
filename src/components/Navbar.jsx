import React from 'react';
import { assets } from '../assets/assets'; // Ensure the path is correct

const Navbar = () => {
    return (
        <div>
            <img src={assets.logo} className='w-2836' alt="Logo" />
            <img src="https://via.placeholder.com/150" alt="Logo" />
        </div>
    );
};

export default Navbar;

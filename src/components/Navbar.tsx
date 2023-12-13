import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 w-screen mx-auto px-4 text-white shadow-3 ">
      <img
        className="lg:h-22 lg:w-65 h-22 w-60  ml-20"
        src="src\images\logo\malcider_lightlogo.png"
        alt="Logo"
      />

      <ul className="hidden md:flex text-black font-medium items-center mr-20">
        <li className="p-4 ">Home</li>
        <li className="p-4">Newsletter</li>

        <Link to="/auth/signin">
          <button className="bg-meta-4 text-white w-[100px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Sign In
          </button>
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

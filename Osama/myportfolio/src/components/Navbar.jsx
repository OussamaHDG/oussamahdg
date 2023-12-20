import React, { useState } from 'react';
import oh from '../assets/img/oh.png';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#0A1920] fixed">
      <div>
        <img src={oh} className="w-[5rem]" alt="Logo" />
      </div>

      <ul className="hidden md:flex">
        <Link to="Home" smooth={true} duration={500}>
      <li className='px-4 cursor-pointer capitalize font-medium text-yellow-400 hover:scale-105 duration-200 hover:border-black hover:bg-white hover:text-yellow-700 hover:rounded'>
      Home
    </li>
    </Link>
    <Link to="Home" smooth={true} duration={500}>
        <li className='px-4 cursor-pointer capitalize font-medium text-yellow-400 hover:scale-105 duration-200  hover:border-black hover:bg-white hover:text-yellow-700 hover:rounded'>About</li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
        <li className='px-4 cursor-pointer capitalize font-medium text-yellow-400 hover:scale-105 duration-200  hover:border-black hover:bg-white hover:text-yellow-700 hover:rounded'>Skills</li>
        </Link>
        <Link to="Projects" smooth={true} duration={500}>
        <li className='px-4 cursor-pointer capitalize font-medium text-yellow-400 hover:scale-105 duration-200  hover:border-black hover:bg-white hover:text-yellow-700 hover:rounded'>Projects</li>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
        <li className='px-4 cursor-pointer capitalize font-medium text-yellow-400 hover:scale-105 duration-200  hover:border-black hover:bg-white hover:text-yellow-700 hover:rounded'>Contact</li>
      </Link>
      </ul>
      <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer pr-4 z-10 text-yellow-400">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-yellow-500">
          <li className='text-2xl px-4 cursor-pointer capitalize font-medium text-yellow-400 hover:scale-105 duration-200 '>Home</li>
          <li className='text-2xl px-4 cursor-pointer capitalize font-medium text-yellow-400 hover:scale-105 duration-200 '>About</li>
          <li className='text-2xl px-4 cursor-pointer capitalize font-medium text-yellow-400 hover:scale-105 duration-200 '>Skills</li>
          <li className='text-2xl px-4 cursor-pointer capitalize font-medium text-yellow-400 hover:scale-105 duration-200 '>Projects</li>
          <li className='text-2xl px-4 cursor-pointer capitalize font-medium text-yellow-400 hover:scale-105 duration-200 '>Contact</li>
        </ul>
      )}
       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-around m-4 items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/oussama-haddougui-68b378181/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-around m-4 items-center w-full text-gray-300'
              href='https://github.com/OussamaHDG'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-around m-4 items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1kZAorx6MoUFr6_Us5lDDSlXOYaKzXW81/view?usp=sharing'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

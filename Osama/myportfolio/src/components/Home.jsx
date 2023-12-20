import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import HeroImage from "../assets/img/Hero.jpg";
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='Home' className=" w-full pt-24 bg-gradient-to-b from-[#0A1920] via-[#0A1920] to-black">
      
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-2">
      <div className="flex-1 md:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full w-80 mx-auto bg-gradient-to-r p-[5px] from-yellow-500 to-yellow-800 max-w-40 h-auto md:max-w-md lg:max-w-xl"
            />
        </div>
        <div className="flex-1 text-center md:text-left md:pr-8">
          <p className='text-yellow-400'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Oussama Haddougui
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm a MERN Stack Developer.
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I’m a full-stack developer specializing in building and
            designing digital experiences. Currently, I’m focused on
            building responsive full-stack web applications.
          </p>
          <div className='flex space-x-3'>
          <Link to="Projects" smooth={true} duration={500}>

            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-gray-500'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
            </Link>
            <a
              href="https://drive.google.com/file/d/1kZAorx6MoUFr6_Us5lDDSlXOYaKzXW81/view?usp=sharing"  // Replace with the actual URL to your resume
              target="_blank"  // Opens the link in a new tab
              rel="noopener noreferrer"  // Recommended for security reasons
              className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-gray-500'
            >
              Grab My Resume
            </a>
          </div>
          
        </div>
     
       
      </div>
    </div>
  );
};

export default Home;

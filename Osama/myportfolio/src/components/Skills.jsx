import React from 'react';

import HTML from '../assets/img/html.png';
import CSS from '../assets/img/css.png';
import JavaScript from '../assets/img/javascript.png';
import ReactImg from '../assets/img/react.png';
import Node from '../assets/img/node.png';
import GitHub from '../assets/img/github.png';
import Tailwind from '../assets/img/tailwind.png';
import Mongo from '../assets/img/mongo.png';

const Skills = () => {
  return (
    <div name='skills'      className="bg-gradient-to-b from-black to-[#0A1920] w-full py-16"
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col  w-full '>
          <div>
              <p className='text-4xl text-white font-bold inline border-b-4 border-yellow-500 '>Skills</p>
              <p className='py-4 text-white'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
              <div className='shadow-md shadow-[#FFD700] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4 text-white'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#FFD700] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4 text-white'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#FFD700] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4 text-white'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#FFD700] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4 text-white'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#FFD700] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4 text-white'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#FFD700] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4 text-white'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#FFD700] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4 text-white'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#FFD700] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4 text-white'>TAILWIND</p>
              </div>
           
          </div>
      </div>
    </div>
  );
};

export default Skills;
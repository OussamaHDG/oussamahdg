import React from 'react';
import { data } from "../assets/data/data"


const Work = () => {

    const project = data;
  
  return (
    <div name='Projects' className=" bg-gradient-to-b from-[#0A1920] via-[#0A1920] to-black py-16">
      <div className='max-w-[1000px] mx-auto flex flex-col w-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-500'>
            Work
          </p>
          <p className='py-6 text-white'>// Check out some of my recent work</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* Gird Item */}
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg h-[25rem] bg-cover shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto bg-transparent content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-black text-white font-bold text-lg"
          >
            Code
          </button>
        </a>
        {/* eslint-disable-next-line */}
       
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};

export default Work;
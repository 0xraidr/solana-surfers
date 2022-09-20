import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {

  const [ nav, setNav ] = useState(false);

  const links = [
    {
      id: 1,
      link: 'Home'
    },
    {
      id: 2,
      link: 'About'
    },
    {
      id: 3,
      link: 'Staking'
    },
    {
      id: 3,
      link: 'Surf Dao'
    },
    {
      id: 4,
      link: 'Magic Eden'
    },
  ]


  return (
    <div className='flex text-sm justify-between items-center w-full h-10 text-white bg-water-blue relative px-3'>
      <div>
        <h1 className='ml-2'>Welcome Surfers!</h1>
      </div>

      <ul className='hidden md:flex'>

      {links.map(({id, link}) => (
        <li key={id} className='px-4 cursor-pointer hover:text-pink-200'>
          {link}
        </li>
      ))}
      </ul>

      <div onClick={() => setNav (!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (

        <ul className='flex z-[9] flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-water-blue to-sand'>

          {links.map(({id, link}) => (
          <li key={id} className='px-4 cursor-pointer capitalize py-6 text-3xl'>
            {link}
          </li>
        ))}
        </ul>
              )}


    </div>
  );
};

export default Navbar
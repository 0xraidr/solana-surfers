import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {

  const [ nav, setNav ] = useState(false);

  const links = [

    {
      id: 1,
      link: 'Staking',
      ext: 'https://www.gigadao.io/staking'
    },
    {
      id: 2,
      link: 'Surf Dao',
      ext: 'https://app.realms.today/dao/2hQoMkXSaxhZdPMsA7mRAtNub3ErVv1i2ZppKC2cgna3'
    },
    {
      id: 3,
      link: 'Rarity',
      ext: 'https://howrare.is/solanasurfers'
    },
    {
      id: 4,
      link: 'Magic Eden',
      ext: 'https://magiceden.io/creators/surfers'
    },
  ]


  return (
    <div className='flex text-sm justify-between items-center w-full h-10 text-white bg-water-blue relative px-3'>
      <div>
        <h1 className='ml-2'>Welcome Surfers!</h1>
      </div>

      <ul className='hidden md:flex'>

      {links.map(({id, link, ext}) => (
            <div key={id}>
            <a className='flex text-xs justify-between px-6 cursor-pointer hover:text-pink-200' href={ext} target='_blank' rel='noreferrer'>
                <button className=' px-6 py-3 m-4 duration-200
                hover:scale-105'>{link}</button>
            
            </a>
        </div>
      ))}
      </ul>

      <div onClick={() => setNav (!nav)} className='flex cursor-pointer pr-4 z-10 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (

        <ul className='flex w-full z-[9] flex-col justify-center absolute top-0 left-0 h-screen bg-gradient-to-b from-water-blue to-sand'>

          {links.map(({id, link, ext}) => (
            <div key={id}>
                <a className='flex justify-center text-2xl' href={ext} target='_blank' rel='noreferrer'>
                    <button className='px-6 py-3 m-4 duration-200
                    hover:scale-105'>{link}</button>
                
                </a>
            </div>
        ))}
        </ul>
              )}


    </div>
  );
};

export default Navbar
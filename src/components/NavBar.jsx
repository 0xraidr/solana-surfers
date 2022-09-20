import React from 'react'

const NavBar = () => {
  return (
    <div className='fixed z-[900] md:hidden w-full md:px-10 p-3 bg-gradient-to-br from-surf-blue to-blue-400'>
            <ul className='flex justify-between text-sm text-white'>
                <li className='cursor-pointer hover:text-pink-600'>Home</li>
                <li className='cursor-pointer hover:text-pink-600'>About</li>
                <li className='cursor-pointer hover:text-orange-500'>Roadmap</li>
                <li className='cursor-pointer hover:text-orange-500'>Magic Eden</li>
            </ul>
    </div>
  )
}

export default NavBar
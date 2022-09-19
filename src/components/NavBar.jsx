import React from 'react'

const NavBar = () => {
  return (
    <div className='fixed z-[900] w-full md:px-10 p-3 bg-gradient-to-br from-blue-600 to-blue-400'>
            <ul className='flex justify-between text-sm text-white'>
                <li>Home</li>
                <li>About</li>
                <li>Roadmap</li>
                <li>Magic Eden</li>
            </ul>

    </div>
  )
}

export default NavBar
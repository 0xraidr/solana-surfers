import React from 'react'
import Fade from 'react-reveal/Fade';
import Background from '../images/surferbg.png';



const Home = () => {
  return (
  <div className='grid place-items-center pb-10 h-screen grayscale-0'>
<img className='w-full h-screen object-cover absolute' src={Background} alt="" />
    <div className='backdrop-blur-[2px] bg-water-blue/25'>
      <Fade left>
        <h1 className='text-3xl pt-10 text-center md:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-amber-200 to-purple-400'>
                Solana Surfers
        </h1>
        </Fade>
          <Fade bottom>
          <p className='pt-10 px-15 text-center md:text-3xl text-white'>We are an OG collection of 4,444 generative surfers inspired by Solana beach and pixel art. 
          </p>
        </Fade>
      </div>
    </div>
  )
}


export default Home



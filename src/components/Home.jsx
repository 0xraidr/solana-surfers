import React from 'react'
import Typewriter from 'typewriter-effect';
import Surfer from '../images/mysurfer.png';
import Fade from 'react-reveal/Fade';



const Home = () => {
  return (
    <div className='h-screen'>
      <Fade left>
        <h1 className='text-5xl pt-20 text-center md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-400 to-white'>
            Solana Surfers
          </h1>
        </Fade>
        <Fade bottom>
            <p className='p-10 text-center md:text-4xl text-white'>We are an OG collection of 4444 generative surfers inspired by Solana beach and pixel art. 
            </p>
            </Fade>
   <div className='Pitted p-5 text-2xl md:text-4xl text-center text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-400 to-white'>
   <Typewriter 
          options={{
              loop: true,
          }}
              onInit={(typewriter) => {
                  typewriter
                  .changeDelay(100)
                  .changeDeleteSpeed(10)
                  .typeString("GET PITTED!")
                  .pauseFor(1000)        
                  .start();
              }}
          />
   </div>
   <div className='flex justify-center py-10'>
   <Fade bottom>
    <img src={Surfer} alt='' className='rounded-lg'/>
    </Fade>
   </div>
    </div>
  )
}

export default Home

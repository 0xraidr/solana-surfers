import React from 'react'
import Typewriter from 'typewriter-effect';
import Surfer from '../images/mysurfer.png';
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';



const Home = () => {
  return (
    <div className='h-screen'>
      <Bounce bottom>
        <h1 className='text-5xl pt-20 text-center md:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-400 to-white'>
            Solana Surfers
          </h1>
        </Bounce>
        <Bounce left>
            <p className='p-10 text-center text-white'>We are an OG collection of 4444 generative surfers inspired by Solana beach and pixel art. 
            </p>
            </Bounce>
   <div className='Pitted p-5 text-2xl text-center text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-400 to-white'>
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
   <RubberBand>
    <img src={Surfer} alt='' className='rounded-lg'/>
    </RubberBand>
   </div>
    </div>
  )
}

export default Home

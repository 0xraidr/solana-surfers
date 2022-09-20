import React from 'react'
import Typewriter from 'typewriter-effect';
import Surfer from '../images/mysurfer.png';
import Fade from 'react-reveal/Fade';
import Background from '../images/surferbg.png';



const Home = () => {
  return (
  <div className='grid place-items-center pb-10 h-screen grayscale-0'>
    <img className='w-full h-screen object-cover absolute' src={Background} alt="" />
    <div className='backdrop-blur-[2px] bg-black/25 box-content'>
      <Fade left>
        <h1 className='text-3xl pt-20 text-center md:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-amber-200 to-purple-400'>
                Solana Surfers
        </h1>
        </Fade>
          <Fade bottom>
          <p className='p-10 text-center md:text-4xl text-white'>We are an OG collection of 4444 generative surfers inspired by Solana beach and pixel art. 
          </p>
        </Fade>
      </div>
    </div>
  )
}
/*   <div className='Pitted p-5 text-2xl md:text-4xl text-center text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-400 to-white'>
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
</div> */

export default Home



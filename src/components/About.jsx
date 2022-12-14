import React from 'react'
import surfbackground from '../images/bgsurfer.jpeg';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div className='mt-10'>
        <div>
            <Fade left>
             <h1 className='pt-5 text-center text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-amber-200 to-purple-400'>
                    About
             </h1>
            </Fade>
         </div>
     <div className=''>
             <div className=''>
                 <div className='text-white font-sans'>
                    <Fade bottom>
                          <p className='p-5 text-center md:text-3xl'>With over 130+ attributes your Solana Surfer will be one of a kind.
                            No two Surfers are the same. Each surfer is generated with attributes based on rarity. From hair, glasses, hats, wetsuits, backgrounds and shirts, 
                            your Surfer is completely unique.
                         </p>
                    </Fade>
                 </div>
             </div>
        </div>
        <div className=''>

        <Fade bottom>
            <img className='w-full' src={surfbackground} alt='' />
        </Fade>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import { inertia, motion } from 'framer-motion'

const Intro = () => {
  return (
    <>
      <div className="intro w-full h-fit font-mono bg-black md:text-[1vw] text-[2vw] py-[2rem] px-[3vw]">
        <h1 className='text-white text-[5vw]'>New Genration</h1>
        <h3 className='text-white text-[2vw]'>New Changes with AI</h3>
        <div className="introNew w-full h-[50vh] text-white py-[4vh] mt-[2vw] flex">
        <motion.div initial={{ y: "0" }} animate={{ y: "-10%" }} transition={{ duration: 2, repeatType: inertia, repeat: Infinity, ease: 'linear',  repeatType:"reverse" }} className="introImg w-1/2 flex items-center justify-center overflow-hidden"><img className='h-full' src="https://bsimg.nl/images/samsung-galaxy-s24-ultra-512gb-s928-grijs-eu_1.png/ziFgOSRhckSpvPLKfUcoPg09HUs%3D/fit-in/0x0/filters:upscale()" alt="img" /></motion.div>
            <div className=" text-wrap introText w-1/2 flex items-center justify-center px-[4vw]"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod incidunt similique laudantium commodi aperiam, facilis repudiandae sed, officiis cum doloribus eaque sapiente earum nam quibusdam blanditiis eius! Nisi veritatis molestias dicta enim, laboriosam quis!</p></div>
        </div>
        <div className="introNew w-full h-[50vh] text-white py-[4vw] flex flex-row-reverse">
            <motion.div initial={{ y: "0" }} animate={{ y: "-10%" }} transition={{ duration: 3, repeatType: inertia, repeat: Infinity, ease: 'linear',  repeatType:"reverse" }} className="introImg w-1/2 flex items-center justify-center overflow-hidden"><img className='h-full' src="https://purepng.com/public/uploads/large/purepng.com-penpenapply-inksurfacewritingdrawingspecialized-uses-1421526587758pugnl.png" alt="img" /></motion.div>
            <div className="introText w-1/2 flex items-center justify-center px-[4vw]"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod incidunt similique laudantium commodi aperiam, facilis repudiandae sed, officiis cum doloribus eaque sapiente earum nam quibusdam blanditiis eius! Nisi veritatis molestias dicta enim, laboriosam quis!</p></div>
        </div> 
        <div className="introNew w-full h-[50vh] text-white py-[4vw] flex">
        <motion.div initial={{ y: "0" }} animate={{ y: "-10%" }} transition={{ duration: 4, repeatType: inertia, repeat: Infinity, ease: 'linear',  repeatType:"reverse" }} className="introImg w-1/2 flex items-center justify-center bg-white rounded-xl overflow-hidden"><img className='w-full' src="https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/01/galaxy-s24-ai-hero.jpg" alt="img" /></motion.div>
            <div className="introText w-1/2 flex flex-col  items-center justify-center px-[4rem] overflow-hidden"><img className='h-[2vw] w-fit bg-white rounded-lg px-2 ' src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-115986-antwerp-logo2-c8e9bc68-0e00-4faf-a6b5-be5a39ae2e3c.png" alt="img" /><p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod incidunt similique laudantium commodi aperiam, facilis repudiandae sed, officiis cum doloribus eaque sapiente earum nam quibusdam blanditiis eius! Nisi veritatis molestias dicta enim, laboriosam quis!</p></div>
        </div>
        <div className="introNew w-full h-[50vh] text-white py-[4rem] flex flex-row-reverse">
        <motion.div initial={{ y: "0" }} animate={{ y: "-10%" }} transition={{ duration: 1.5, repeatType: inertia, repeat: Infinity, ease: 'linear',  repeatType:"reverse" }} className="introImg w-1/2 flex items-center justify-center rounded-xl overflow-hidden"><img className='h-full mix-blend-screen rounded-lg' src="https://i.kym-cdn.com/photos/images/newsfeed/002/116/381/542.png" alt="" /></motion.div>
            <div className="introText w-1/2 flex flex-col  items-center justify-center px-[4rem] overflow-hidden"><img className='h-[2vw] w-fit bg-white rounded-lg px-2 ' src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-115986-antwerp-logo2-c8e9bc68-0e00-4faf-a6b5-be5a39ae2e3c.png" alt="img" /><p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod incidunt similique laudantium commodi aperiam, facilis repudiandae sed, officiis cum doloribus eaque sapiente earum nam quibusdam blanditiis eius! Nisi veritatis molestias dicta enim, laboriosam quis!</p></div>
        </div>
        
      </div>
    </>
  )
}

export default Intro

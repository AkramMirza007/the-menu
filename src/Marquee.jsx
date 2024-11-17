import { easeIn, easeInOut, inertia, motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    return (
        <>
            <div className="marquee-con whitespace-nowrap overflow-hidden ">
                <div className="marquee-text w-fit py-12 flex items-center bg-slate-100 whitespace-nowrap ">
                    <motion.span initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ duration: 8, repeatType: inertia, repeat: Infinity, ease: 'linear' }} className='text-[10vw] pl-[0.5vw] inline-flex leading-none items-center tracking-tight text-black font-mono font-semibold'><h1>Live with AI <span className='bg-black p-5 w-5 h-5 inline-block rounded-full mr-[5vw]'></span></h1></motion.span>
                    <motion.span initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ duration: 8, repeatType: inertia, repeat: Infinity, ease: 'linear' }} className='text-[10vw] pl-[0.5vw] inline-flex leading-none items-center tracking-tight text-black font-mono font-semibold'><h1>Live with AI <span className='bg-black p-5 w-5 h-5 inline-block rounded-full mr-[5vw]'></span></h1></motion.span>
                    <motion.span initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ duration: 8, repeatType: inertia, repeat: Infinity, ease: 'linear' }} className='text-[10vw] pl-[0.5vw] inline-flex leading-none items-center tracking-tight text-black font-mono font-semibold'><h1>Live with AI <span className='bg-black p-5 w-5 h-5 inline-block rounded-full mr-[5vw]'></span></h1></motion.span>
                </div>
            
            </div>
        </>
    )
}

export default Marquee

import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    return (
        <>
            <div className="marquee-con whitespace-nowrap overflow-hidden ">
                <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{ duration: 5 , repeat:"infinity",  ease:"easeInOut" }} className="marquee-text w-fit p-12 flex items-center bg-slate-100 whitespace-nowrap gap-[2vw] overflow-hidden">
                    <h1 className='text-[10vw] tracking-tight spa text-black font-mono font-semibold'>style of class </h1><span className=' p-5 bg-black rounded-full'></span>
                    <h1 className='text-[10vw] tracking-tight spa text-black font-mono font-semibold'>style of class </h1><span className=' p-5 bg-black rounded-full'></span>
                    <h1 className='text-[10vw] tracking-tight spa text-black font-mono font-semibold'>style of class </h1><span className=' p-5 bg-black rounded-full'></span>
                </motion.div>
            </div>
        </>
    )
}

export default Marquee

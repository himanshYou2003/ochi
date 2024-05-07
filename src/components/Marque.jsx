import { motion } from 'framer-motion'
import React from 'react'

function marque() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] '>
        <div className='text border-t-2 border-b-2  border-zinc-200 flex whitespace-nowrap gap-10 overflow-hidden'>
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[27vw] leading-none uppercase -mb-[7vw] pt-16 font-light ' style={{ fontFamily: "FoundersGrotesk, sans-serif" }}>we are ochi</motion.h1>
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[27vw] leading-none uppercase -mb-[7vw] pt-16 font-light ' style={{ fontFamily: "FoundersGrotesk, sans-serif" }}>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default marque
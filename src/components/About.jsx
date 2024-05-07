import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA63] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1  className='font-["Chomsky"] text-[4vw] font-lighter leading-[3.6vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell prodducts, explain commplex ideas, and hire great people.</h1>
        <div className='w-full flex border-t-[1px] pt-10 mt-20 border-[#1a1b18]'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach :</h1>
                <button className='px-10 uppercase font-light gap-6 py-4 bg-zinc-900 flex items-center  mt-10 text-white  text-xl rounded-full'>Read more
                    <div className='w-2 h-2 rounded-full  bg-slate-50 '></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] bg-red-400 overflow-hidden rounded-xl'>
                <img className='w-full h-full object-cover object-top' src="https://images.unsplash.com/photo-1611042553484-d61f84d22784?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
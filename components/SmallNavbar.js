import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import image from '@/public/IMAGE.png'


function Smallnavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (

    <div className='h-[4rem] p-5 shadow-2xl w-[100vw] bg-[#212731] flex flex-row  relative justify-between  '>

      <div className='flex items-center  text-left ' >
      <input
        type="text"
        placeholder=""
        className="visible block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm focus:outline-none focus:bg-white focus:border-blue-500  "
      />
      <div className="absolute inset-y-0 left-5 pl-3 flex items-center pointer-events-none">
        <Image src={image} width={24} height={24} alt="search" className="h-5 w-5 text-gray-400" />
      </div>
      </div>
      <div className='font-medium flex items-center justify-between relative z-10 ' >
        <button className='w-full flex-col justify-center items-center   lg:flex ' onClick={handleClick} >
          <span className={` bg-white/70 block transition-all duration-300 ease-out h-[2.5px] w-7 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
          <span className={` bg-white/70 block transition-all duration-300 ease-out h-[2.5px] w-7  rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
          <span className={` bg-white/70 block transition-all duration-300 ease-out h-[2.5px] w-7 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} `} ></span>
        </button>
      </div>
      {
        isOpen ?
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className='min-w-[100vw] flex flex-col z-30 justify-between  fixed top-[30%] left-1/2 
      bg-black/60 rounded-lg backdrop-blur-md py-0 shadow-lg' >
            <nav className='py-8 px-6 text-left'>
            <div className='my-8' >
        <Link href='/' className="text-white/90  text-xl"  >Categories</Link>
    </div>
    <div className='my-8' >
        <Link href='/' className="text-white/90 text-xl" >Website Builders</Link>
    </div>
    <div className='my-8' >
        <Link href='/' className="text-white/90 text-xl" >Today'sdeals</Link>
    </div>
            </nav>
          </motion.div>

          : null
      }

    </div>
  )
}

export default Smallnavbar
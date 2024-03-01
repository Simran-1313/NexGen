import React from 'react'
import Image from 'next/image'
import image from '@/public/IMAGE.png'
import Link from 'next/link'

const Navbar = () => {
  return (
   <div className=' w-[100%] px-[5rem]  h-[4rem] bg-[#212731] flex justify-center  items-center   ;
   '>
     <div className="relative  m-8">
      <input
        type="text"
        placeholder=""
        className="visible max-w-[200px] block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm focus:outline-none focus:bg-white focus:border-blue-500  "
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Image src={image} width={24} height={24} alt="search" className="h-5 w-5 text-gray-400" />
      </div>
    </div>
    <div className='flex ' >
    <div className='w-[10rem]' >
        <Link href='/' className="text-[#D1D6DA] md:text-base lg:text-lg"  >Categories</Link>
    </div>
    <div className='w-[10rem]' >
        <Link href='/' className="text-[#D1D6DA] md:text-base lg:text-lg" >Website Builders</Link>
    </div>
    <div className='w-[10rem]' >
        <Link href='/' className="text-[#D1D6DA] md:text-base lg:text-lg" >Today'sdeals</Link>
    </div>
    </div>
   </div>


    


  )
}

export default Navbar
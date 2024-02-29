import React from 'react'
import Image from 'next/image'
import image from '@/public/IMAGE.png'
import Link from 'next/link'

const Navbar = () => {
  return (
   <div className=' w-full px-[32%] h-[4rem] bg-[#212731] flex justify-evenly  items-center   ;
   '>
     <div className="relative w-[30%] m-8">
      <input
        type="text"
        placeholder=""
        className="visible block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm focus:outline-none focus:bg-white focus:border-blue-500  "
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Image src={image} width={24} height={24} alt="search" className="h-5 w-5 text-gray-400" />
      </div>
    </div>
    <div>
        <Link href='/' className="text-[#D1D6DA] sm:text-xs md:text-base lg:text-lg"  >Categories</Link>
    </div>
    <div>
        <Link href='/' className="text-[#D1D6DA] sm:text-xs md:text-base lg:text-lg" >Website Builders</Link>
    </div>
    <div>
        <Link href='/' className="text-[#D1D6DA] sm:text-xs md:text-base lg:text-lg" >Today'sdeals</Link>
    </div>
   </div>


    


  )
}

export default Navbar
import React from 'react'
import SmallFooter from '@/components/SmallFooter'

import { useState,useEffect } from 'react';

const Footer = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setIsDesktop(window.innerWidth > 600);
      };

      // Initial check on mount
      handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup event listener on component unmount
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);
    const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  const options = [
    { value: 'India', label: 'India' },
    { value: 'U.S.A', label: 'U.S.A' },
    { value: 'Canada', label: 'Canada' },
  ]
  return (
  <>{
    isDesktop?(
      
    
  
   <div className='flex w-[100vw] justify-center items-center bg-[#212731] text-white h-[24rem] sm:justify-between sm:px-6  '>
    <div className='flex-col justify-around  h-[70%] w-[20%]   '>
        <h2 className='text-lg sm:text-base ' >Categories</h2>
        <ul>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Web Builder </a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Hearing</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Data Center</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Robotic-Automation</a></li>
        </ul>
    </div>
    <div className='flex-col justify-around  h-[70%] w-[20%]   '>
        <h2 className='text-lg sm:text-base ' >Contact</h2>
        <ul>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Contact</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Privacy Policy</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Terms Of Service</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>Categories</a></li>
            <li className='pl-2 my-3 text-sm sm:text-xs ' > <a>About</a></li>
        </ul>
    </div>
    <div className='flex-col justify-around  h-[30%] w-[20%]    '>
    <option value="" className='text-[#D1D6DA] bg-[#212731] text-lg sm:text-base ' >Country</option>
          <select className='bg-[#212731]' value={selectedOption} onChange={handleOptionChange}>
           
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

    </div>
   </div>):(
      <SmallFooter/>
    )
  }
   
  </>
  )
}

export default Footer
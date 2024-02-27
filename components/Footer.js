import React from 'react'
import { useState } from 'react';

const Footer = () => {
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
  <>
   <div className='flex justify-center items-center bg-[#212731] text-white h-[24rem] '>
    <div className='flex-col justify-around h-[70%] w-[20%]'>
        <h2 className='text-lg' >Categories</h2>
        <ul>
            <li className='pl-2 my-3 text-sm ' > <a>Web Builder </a></li>
            <li className='pl-2 my-3 text-sm ' > <a>Hearing</a></li>
            <li className='pl-2 my-3 text-sm ' > <a>Data Center</a></li>
            <li className='pl-2 my-3 text-sm ' > <a>Robotic-Automation</a></li>
        </ul>
    </div>
    <div className='flex-col justify-around h-[70%] w-[20%]'>
        <h2 className='text-lg' >Contact</h2>
        <ul>
            <li className='pl-2 my-3 text-sm ' > <a>Contact</a></li>
            <li className='pl-2 my-3 text-sm ' > <a>Privacy Policy</a></li>
            <li className='pl-2 my-3 text-sm ' > <a>Terms Of Service</a></li>
            <li className='pl-2 my-3 text-sm ' > <a>Categories</a></li>
            <li className='pl-2 my-3 text-sm ' > <a>About</a></li>
        </ul>
    </div>
    <div className='flex-col justify-around h-[30%] w-[20%] '>
    <option value="" className='text-[#D1D6DA] bg-[#212731] text-lg' >Country</option>
          <select className='bg-[#212731]' value={selectedOption} onChange={handleOptionChange}>
           
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

    </div>
   </div>
   
  </>
  )
}

export default Footer
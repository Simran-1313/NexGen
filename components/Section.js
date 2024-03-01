import React from 'react'

const Section = () => {
  return (
    <>
    <div className='flex justify-center mx-auto  sm:flex-col lg:flex-col '>
        <div className='w-[50%] sm:w-[100%] m-20 sm:m-4 box-border sm:mx-0 lg:w-[100%] '>
            <p className='text-[#5C6874]  text-4xl sm:text-2xl  '>
            Sign up and get exclusive special deals
            </p>
        </div>
        <div className='w-[50%] sm:w-[100%] m-20 sm:m-0 lg:w-[100%] '>
            <input type='text' className='h-[3rem] w-[70%] px-5 text-lg rounded-l-lg bg-white'/>
            <button className='h-[3rem] px-5 rounded-r-lg text-[#ffffff] hover:scale-[1.05] bg-[#1B88F4]'>Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default Section
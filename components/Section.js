import React from 'react'

const Section = () => {
  return (
    <>
    <div className='flex justify-center w-[80%] mx-auto '>
        <div className='w-[50%] m-20 box-border'>
            <p className='text-[#5C6874]  text-4xl '>
            Sign up and get exclusive special deals
            </p>
        </div>
        <div className='w-[50%] m-20'>
            <input type='text' className='h-[3rem] w-[70%] px-5 text-lg rounded-l-lg bg-blue-50'/>
            <button className='h-[3rem] px-5 rounded-r-lg text-[#ffffff] bg-[#1B88F4]'>Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default Section
import React, { useContext, useEffect,useState } from 'react'
import { DataContext } from '@/context/DataContext';
import SoloBoxData from './sections/SoloBoxData';
import 'tailwindcss/tailwind.css';
import Section from '@/components/Section';
import Relateddeals from '@/components/Relateddeals';
import tick from '@/public/data-img/tick.png'
import info from '@/public/data-img/info.png'
import Image from 'next/image';
import Link from 'next/link';
import arrow from "@/public/data-img/Vector.png"
function HomePageContainer() {

    const { PageData, data } = useContext(DataContext);

    useEffect(() => {
        PageData();
    }, [])
    const [selectedOption, setSelectedOption] = useState('')

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value)
    }
  
    const options = [
        { value: 'null', label: 'Top Relevent' },
      { value: 'India', label: 'India' },
      { value: 'U.S.A', label: 'U.S.A' },
      { value: 'Canada', label: 'Canada' },
    ]
    
    return (
        <>
        <div className=' overflow-hidden ' >
            <div>
              <h2 className='text-5xl mt-10 my-4 text-black/80 sm:text-xl md:text-3xl lg:text-3xl ' >
              Best Website builders in the US
              </h2>
            <hr/>
            </div>
        <div className='flex w-[100vw] my-4 '>
           <div className='justify-start' >
           <div className=' flex ' >
            <div className='flex items-center '><Image className='h-5 w-5 my-1 mx-2 sm:mx-1   ' src={tick}/><p className='sm:text-xs sm:w-[7rem] lg:w-[16rem] ' >Last Updated - February 22,2020</p></div>
            <div className='flex items-center ml-5 lg:ml-2 sm:ml-0 '><Image className='h-5 w-5 my-1 mx-2 sm:mx-1 ' src={info}/><p className='sm:text-xs sm:w-[4rem] lg:w-[12rem] ' >Advertising Disclosure</p></div>
           </div>
           
           </div>
           <div className= ' bg-white flex lg:pl-0  sm:pl-3 sm:text-xs ' >
          
          <select className=' bg-white ' value={selectedOption} onChange={handleOptionChange}>
           
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
           </div>
          
        </div>
        
        <hr/>
        <nav className='w-[100vw]' >
            <ol className='flex' >
                <li className='mr-6 lg:mr-4 my-4 text-black/70 sm:text-xs sm:mx-2 ' >
                <Link href='/' > Tools</Link>
                </li>
                <li className='mx-6 lg:mx-4 my-4 text-black/70 sm:text-xs sm:mx-2 ' >
                <Link href='/' >AWS Builder </Link>
                </li>
                <li className='mx-6 lg:mx-4 my-4 text-black/70 sm:text-xs sm:mx-2 ' >
                <Link href='/' >Start Builder </Link>
                </li>
                <li className='mx-6 lg:mx-4 my-4 text-black/70 sm:text-xs sm:mx-2 ' >
                <Link href='/' >Build Supplies </Link>
                </li>
                <li className='mx-6 lg:mx-4 my-4 text-black/70 sm:text-xs sm:mx-2 ' >
                <Link href='/' >Tooling </Link>
                </li>
                <li className='mx-6 lg:mx-4 my-4 text-black/70 sm:text-xs sm:mx-2 ' >
                <Link href='/' >BlueHosting </Link>
                </li>
            </ol>
        </nav>
        <div className='flex text-sm text-black/70 mt-4 '>
            <Link href='/' className='flex items-center justify-center sm:text-xs sm:items-baseline' >Home</Link>
            <Image src={arrow} className='h-2 w-2  mx-3 my-[0.6rem] sm:mx-1.5 sm: mt-1.5  ' />
            <Link href='/' className='flex items-center justify-center sm:text-xs sm:items-baseline' >Hosting for all</Link>
            <Image src={arrow} className='h-2 w-2  mx-3 my-[0.6rem] sm:mx-1.5 sm: mt-1.5  ' />
            <Link href='/' className='flex items-center justify-center sm:text-xs sm:items-baseline' >Hosting</Link>
            <Image src={arrow} className='h-2 w-2  mx-3 my-[0.6rem] sm:mx-1.5 sm: mt-1.5  ' />
            <Link href='/' className='flex items-center justify-center sm:text-xs sm:items-baseline' >Hosting6</Link>
            <Image src={arrow} className='h-2 w-2  mx-3 my-[0.6rem] sm:mx-1.5 sm: mt-1.5  ' />
            <Link href='/' className='flex items-center justify-center sm:text-xs sm:items-baseline' >Hosting5</Link>
             
        </div>
        
        </div>
        <div>

{
                data && data.map((item, index) => {
                    return <SoloBoxData
                        item={item}
                        index={index}
                       
                    />
                })
            }
        </div>
        <div>
      <Relateddeals/>
            <Section/>
        </div>
        </>

    )
}

export default HomePageContainer;
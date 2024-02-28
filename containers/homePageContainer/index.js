import React, { useContext, useEffect } from 'react'
import { DataContext } from '@/context/DataContext';
import SoloBoxData from './sections/SoloBoxData';
import 'tailwindcss/tailwind.css';
import Section from '@/components/Section';
import Relateddeals from '@/components/Relateddeals';
import tick from '@/public/data-img/tick.png'
import info from '@/public/data-img/info.png'
import Image from 'next/image';
function HomePageContainer() {

    const { PageData, data } = useContext(DataContext);

    useEffect(() => {
        PageData();
    }, [])

    
    return (
        <>
        <div>
        <div>
        <h2 className='text-5xl ' >
        Best Website builders in the US
        </h2>
        <hr/>
        </div>
        <div>
           <div className='flex' >
           <div className='flex'><Image className='h-5 w-5 my-1 mx-2' src={tick}/><p>Last Updated - February 22,2020</p></div>
           <div className='flex'><Image className='h-5 w-5 my-1 mx-2' src={info}/><p>Advertising Disclosure</p></div>
           </div>
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
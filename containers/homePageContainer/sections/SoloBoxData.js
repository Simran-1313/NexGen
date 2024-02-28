import React, { useState } from 'react'
import Image from 'next/image'
import Rating1 from '../../../public/data-img/rating1.png';
import Rating2 from '../../../public/data-img/rating2.png';
import Tag1 from '../../../public/data-img/tag1.png';
import Tag2 from '../../../public/data-img/tag1.png';


import pcImage from '@/public/data-img/pc.png'
function SoloBoxData({ item }) {

    //  const [imgUrl , setImgUrl ] = useState(Rating1);

    return (
        <>
            <div className='border-2 border-black m-4 p-4' >

                <div className='flex flex-row w-full'>

                    <div className='flex flex-col border-2 border-black p-2 w-1/3'>
                        <div className='bg-red-500'>
                            <img src={item.id == 1 && Tag1.src} alt="" />
                        </div>
                        <div className='bg-red-500'>
                            <img src={item.id == 2 && Tag2.src} alt="" />
                        </div>
                        {item.id}
                        <div>
                            <Image src={pcImage} />
                        </div>
                        {item.image_text}

                    </div>

                    <div className='flex flex-col border-2 border-black p-2 w-1/3'>
                        <div className='p-2'>
                            {item.description}
                        </div>
                        <div className='font-bold'>
                            Main hieghlights
                        </div>
                        <div className='p-2'>
                            {item.main_highlight}
                        </div>
                        <div className='font-bold text-blue-400' > 
                            snow more 
                        </div>
                    </div>

                    <div className='flex flex-col border-2 border-black p-2 w-1/3'>
                        <div>  {item.rating.number}</div>
                        <div> {item.rating.title}</div>
                        <div>
                            <img src={item.id == 2 ? Rating2.src : Rating1.src} alt="" />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default SoloBoxData;
import React from 'react'
import Image from 'next/image'
import img from '@/public/data-img/pc.png'
function SoloBoxData({ item }) {


    return (
        <>
            <div   >
                <Image src={img}  />
                {item.id}
                {item.description}
               
                
            </div>
        </>
    )
}

export default SoloBoxData;
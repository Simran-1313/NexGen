import React from 'react'
import Image from 'next/image'
import img from '@/public/data-img/pc.png'

function SoloBoxData({ item }) {


    return (
        <>
            <div  className='' >
                <Image src={img}  />
                {item.id}
                {item.image_text}
                {item.description}
                {item.main_highlight}
                {item.rating.number}
                {item.rating.title}

               
                
            </div>
        </>
    )
}

export default SoloBoxData;
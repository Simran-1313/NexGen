import React from 'react'
import Image from 'next/image'
import img from '@/public/data-img/pc.png'
import img2 from `@{item.rating.rating_image}` 
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
                <Image src ={img2} width={100} height={100}/>
               
                
            </div>
        </>
    )
}

export default SoloBoxData;
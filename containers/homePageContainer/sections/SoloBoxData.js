import React from 'react'
import ov from '@/public/data-img/pc.png'
import sp from '../../../public/data-img/pc.png'

function SoloBoxData({ item }) {
    console.log(item)

    return (
        <>
            <main className='border-2 border-black p-2 m-4 bg-red-700 w-full h-auto' style={{
                border: "solid 2px black ",  margin:"10px"
            }}  >
                {item.id}
                {item.description}
                {/* <img src={ov.src} alt="" /> */}
                <img src={item && item.image_url.src } alt="not working" />
            </main>
        </>
    )
}

export default SoloBoxData;
import React, { useContext, useEffect } from 'react'
import { DataContext } from '@/context/DataContext';
import SoloBoxData from './sections/SoloBoxData';
import 'tailwindcss/tailwind.css';
function HomePageContainer() {

    const { PageData, data } = useContext(DataContext);

    useEffect(() => {
        PageData();
    }, [])

    
    return (
        <>
            {
                data && data.map((item, index) => {
                    return <SoloBoxData
                        item={item}
                        index={index}
                       
                    />
                })
            }
        </>

    )
}

export default HomePageContainer;
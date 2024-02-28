import React, { useContext, useEffect } from 'react'
import { DataContext } from '@/context/DataContext';
import SoloBoxData from './sections/SoloBoxData';
import 'tailwindcss/tailwind.css';
import Section from '@/components/Section';
import Relateddeals from '@/components/Relateddeals';
function HomePageContainer() {

    const { PageData, data } = useContext(DataContext);

    useEffect(() => {
        PageData();
    }, [])

    
    return (
        <>
        <div>

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
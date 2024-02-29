import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState,useEffect } from "react";
import Smallnavbar from "@/components/SmallNavbar";
import DataContextProvider from "@/context/DataContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 600);
        };

        // Initial check on mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <>{
      isDesktop?(
        <Navbar />
      ):(
        <Smallnavbar/>
      )
    }
    
    
    <DataContextProvider>
      
        <Component {...pageProps} />
        
      </DataContextProvider>
<Footer/>

    </>
  );
}

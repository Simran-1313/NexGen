import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import Smallnavbar from "@/components/SmallNavbar";
import DataContextProvider from "@/context/DataContext";
import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics';

// Define the main App component
export default function App({ Component, pageProps }) {
 // Initialize the state variable 'isDesktop' with a value of 'false'
 const [isDesktop, setIsDesktop] = useState(false);

 // Set up the 'useEffect' hook to handle window resize events
 useEffect(() => {
   // Define a function to handle window resize events
   const handleResize = () => {
     // Set 'isDesktop' based on the current window width
     setIsDesktop(window.innerWidth > 900);
   };

   // Call the handleResize function initially to set the initial state
   handleResize();

   // Add an event listener to handle window resize events
   window.addEventListener('resize', handleResize);

   // Clean up the event listener when the component is unmounted
   return () => {
     window.removeEventListener('resize', handleResize);
   };
 }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

 // Render the appropriate navigation bar based on the 'isDesktop' value
 return (
   <>
     {
       isDesktop // If the screen width is greater than 900 pixels, render the Navbar component
         ? <Navbar />
         : <Smallnavbar /> // Otherwise, render the Smallnavbar component
     }

     {/* Wrap the Component and its children in the DataContextProvider component */}
     <DataContextProvider>
       <Component {...pageProps} />
       
     </DataContextProvider>

     {/* Render the Footer component after the children */}
     <Footer />
   </>
 );
}
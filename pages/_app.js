import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DataContextProvider from "@/context/DataContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <DataContextProvider>
      
        <Component {...pageProps} />
        
      </DataContextProvider>
<Footer/>

    </>
  );
}

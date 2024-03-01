import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

// Import custom components
import Layout from "@/components/Layout";
import HomePageContainer from "@/containers/homePageContainer";

// Initialize the Inter font using the latin subset
const inter = Inter({ subsets: ["latin"] });

/**
* The Home function is the main component for the homepage of the website.
* It sets up the page metadata, imports necessary components, and initializes
* the Inter font.
*
* @return {JSX.Element} The homepage as a JSX element.
*/
export default function Home() {
 return (
   <>
     <Head>
       {/* Set the page title */}
       <title>Welcome to Our Website</title>

       {/* Provide a description for the page */}
       <meta
         name="description"
         content="This is the homepage of our website, featuring the latest updates and information."
       />

       {/* Set the viewport to adapt to different devices */}
       <meta name="viewport" content="width=device-width, initial-scale=1" />

       {/* Set the page icon */}
       <link rel="icon" href="/favicon.ico" />
     </Head>
     <main className={`${inter.className} h-full`}>
       {/* Import the custom Layout component and apply custom classes */}
       <Layout className="px-64 pt-0 pb-8 sm:px-5 md:px-10 lg:px-10 xl:px-24   overflow-hidden  ">
         {/* Import the HomePageContainer component and apply custom classes */}
         <HomePageContainer className="border-solid border-black border-5 " />
       </Layout>
     </main>
   </>
 );
}
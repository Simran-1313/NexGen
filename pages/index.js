import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Layout from "@/components/Layout";
import HomePageContainer from "@/containers/homePageContainer";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>

        <title>Welcome to Our Website</title>
        <meta
          name="description"
          content="This is the homepage of our website, featuring the latest updates and information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} h-full`}>
        <Layout className="px-64 pt-0 pb-8 sm:px-5 md:px-10 lg:px-20  ">
        <HomePageContainer className="border-solid border-black border-5 " />
     
        
          
        </Layout>

        
     
        

      </main>
    </>
  );
}
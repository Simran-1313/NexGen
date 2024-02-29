import React, { useState } from "react";
import Image from "next/image";
import Rating1 from "../../../public/data-img/rating1.png";
import Rating2 from "../../../public/data-img/rating2.png";
import Tag1 from "../../../public/data-img/tag1.png";
import Tag2 from "../../../public/data-img/tag2.png";
import Link from "next/link";
import pcImage from "@/public/data-img/pc.png";
function SoloBoxData({ item }) {


  return (
    <>
      <main className="w-full my-10 mt-10 ">
        <div className="flex flex-row sm:flex-col w-[100%] h-[250px] sm:h-auto">
          <div>
          <div className="flex-col " >
                <div
                    className={
                    item.id == 1 && Tag1.src
                        ? "visible bg-[#ff7724] w-[8rem] h-[2.5rem] sm:w-[5.5rem] sm:h-[2rem] flex justify-center items-center rounded-md rounded-l-none "
                        : "hidden "
                    }
                >
                    <img
                    src={item.id == 1 && Tag1.src}
                    className="  items-center "
                    alt=""
                    />
                    <h2 className="text-white p-1 sm:text-[10px] ">Best Choice </h2>
                </div>
                <div
                    className={
                    item.id == 2 && Tag2.src
                        ? "visible bg-[#ff7724] w-[8rem] h-[2.5rem] sm:w-[5rem] sm:h-[2rem] flex justify-center items-center rounded-md rounded-l-none "
                        : "hidden "
                    }
                >
                    <img src={item.id == 2 && Tag2.src} alt="" />
                    <h2 className="text-white p-1 sm:text-[10px] ">Best Value </h2>
                </div>
                <div
                    className={
                    item.id != 2&& item.id!=1 
                        ? "visible w-[8rem] h-[2.5rem] sm:w-[5rem] sm:h-[2rem] flex justify-center items-center rounded-md"
                        : "hidden "
                    }
                >
                    
               
                </div>
                <div className="pt-4">
                    {item.id}
                </div>
          </div>

          <div className="flex flex-col mt-2  ml-12 sm:ml-2  w-[250px] sm:w-[100%] h-[100%]">
            <div className="flex items-center justify-center" >
              <Image className="w-141 h-103 " src={pcImage} />
            </div>
            <div className=" ml-8 mt-4" >
            {item.image_text}
            </div>
          </div>
          </div>

          <div className="flex flex-col   w-[60%]  mt-12 mb-12 ">
            <div className="p-2 text-[#4B5665] text-lg "> <span className="font-bold " >{item.title}</span>{item.description}</div>
            <div className="font-bold">Main highlights</div>
            <div className="p-2 text-[#4B5665]">{item.main_highlight}</div>
            <div className="font-bold text-blue-400">snow more</div>
          </div>

          <div className="flex flex-col   items-center p-2 w-[300px] ">
            <div className="flex-col p-2 bg-blue-300/30 w-[8rem] h-[7rem] items-center rounded-md  rounded-t-none " >
            <div className="flex justify-center text-4xl " > {item.rating.number}</div>
            <div className="flex justify-center  "> {item.rating.title}</div>
            <div className="flex justify-center  ">
              <img src={item.id == 2 ? Rating2.src : Rating1.src} alt="" />
            </div>
           
            </div>
            <div className=" mt-[5rem] w-[90%] ">
           <button className=" h-[3rem]  text-white w-full bg-blue-700 rounded-lg " >
                    <h2 className="w-full " >
                        <Link href="/" className=" flex items-center justify-center  ">View</Link>
                    </h2>
                </button>
           </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SoloBoxData;

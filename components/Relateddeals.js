import React from "react";
import Image from "next/image";
import img1 from "@/public/data-img/pc.png";
import Link from "next/link";

const Deals = ({
    classname = "",
    time,
    title,
    desc,
    link,
    offer,
    price,
    orgPrice,
    img,
}) => {
    return (
        <>
            <div className={` w-[300]  mx-10 ${classname}`}>
                <div className="  m-[5rem] ">
                    <Image src={img} width={141} height={103} />
                </div>
                <div className="   flex">
                   <div>
                   <h2 className=" w-[5rem] rounded-md flex justify-center bg-[#F2F4F7] text-[#074786]">
                        {offer}%<span> Off </span>
                    </h2>
                   </div>
                    <div className="mx-auto">
                    <h2 className=" w-[10rem]  rounded-md flex justify-center bg-[#F2F4F7] text-[#074786]" >{time}</h2>
                </div>
                </div>
                
                <div className="w-full my-4 " >
                    <h2 className="flex mr-8 justify-center text-lg font-semibold ">{title}</h2>
                </div>
                <div className="my-4" >
                    <p>{desc}</p>
                    <div className="my-4" >
                        <h2>
                            <span className="text-lg  "  >{price} </span><span className=" text-sm line-through mx-4" >{orgPrice}</span> <span className="mx-4"> {offer}% Off</span>
                        </h2>
                    </div>
                </div>
                <button className=" h-[3rem] text-white w-full bg-blue-700 rounded-lg " >
                    <h2 className="w-full " >
                        <Link href="" className="justify-center mr-10 ">ViewDeal</Link>
                    </h2>
                </button>
            </div>
        </>
    );
};
const Relateddeals = () => {
    return (
        <>
        <div className="ml-20 pt-[5rem]">
        <h2 className="text-4xl text-black/70 " >Related deals you might like for</h2>
        </div>
            <div className=" my-16 flex w-[100%] justify-center">
                
                <Deals
                    title="Webbuilder1"
                    desc="Computer Modern classic  with wix support"
                    offer="20"
                    price="$39.96"
                    orgPrice="$49.96"
                    time="Limited time"
                    img={img1}
                    link="/"
                />
                <Deals
                    title="Webbuilder1"
                    desc="Computer Modern classic  with wix support"
                    offer="20"
                    price="$39.96"
                    orgPrice="$49.96"
                    time="Limited time"
                    img={img1}
                    link="/"
                />
                <Deals
                    title="Webbuilder1"
                    desc="Computer Modern classic  with wix support"
                    offer="20"
                    price="$39.96"
                    orgPrice="$49.96"
                    time="Limited time"
                    img={img1}
                    link="/"
                />
            </div>
        </>
    );
};

export default Relateddeals;

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
      <div className={` w-[30%] ${classname}`}>
        <div>
          <Image src={img} width={100} height={100} />
        </div>
        <div>
          <h2>{offer}% Off </h2>
        </div>
        <div>
          <h2>{time}</h2>
        </div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <p>{desc}</p>
          <div>
            <h2>
              {price} <span>{orgPrice}</span> <span>{offer}</span>
            </h2>
          </div>
        </div>
        <button>
          <h2>
            <Link href="">ViewMore</Link>
          </h2>
        </button>
      </div>
    </>
  );
};
const Relateddeals = () => {
  return (
    <>
      <div className="flex w-[75%] mx-auto">
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

import React from "react";
import { Sora } from "next/font/google";

import Image from "next/image";

import ProductOne from "../images/product_one.webp";

const sora = Sora({ subsets: ["latin"] });

const Promotions = () => {
  return (
    <div className="my-10 lg:my-28">
      <div className="text-center ">
        <span
          className={`${sora.className} font-bold uppercase text-center text-xs text-[#0062f5] tracking-wider`}
        >
          promotions
        </span>
        <h2
          className={`${sora.className} font-bold text-[32px] pt-5 tracking-wider text-[#212121]`}
        >
          Our Promotions Events
        </h2>
      </div>

      {/* Products */}
      <div className="flex w-full">
        {/* Left Side */}
        <div className="flex flex-col gap-2 mt-14 mx-8 w-full lg:w-1/2">

          <div className="bg-[#d6d6d8] grid gap-2 justify-between">
            <div className="w-full flex justify-center items-center ">
              <div className="py-10 w-full">
                <h3
                  className={`${sora.className} px-6 font-bold text-3xl leading-9 text-[#212121]`}
                >
                  Get UP TO 60%
                </h3>
                <p className="text-lg -tracking-tight px-6">
                  For the summer season
                </p>
              </div>

              <div className="flex justify-end w-full lg:-ml-14 lg:w-[75%]">
                <Image
                  src={ProductOne}
                  alt="Product"
                  loading="lazy"
                  width={282}
                  height={212}
                />
              </div>
            </div>
          </div>

          {/* Left Side Second Div */}
          <div className="bg-[#212121] py-12 mt-2">
            <div className="w-full flex flex-col justify-center text-white items-center">
              <h3
                className={`${sora.className} text-center font-black text-3xl lg:text-4xl pb-4`}
              >
                Get 30% Off
              </h3>
              <p
                className={`${sora.className} leading-5 font-normal text-xs lg:text-sm uppercase tracking-wider`}
              >
                use promo code
              </p>
              <button
                className={`${sora.className} font-bold text-base tracking-[.25em] leading-6 text-white border-none 
                bg-[#474747] px-10 py-2 lg:px-14 mt-1 rounded-xl `}
              >
                DINEWEEKENDSALE
              </button>
            </div>
          </div>

          {/* Right Side */}
        </div>
      </div>
    </div>
  );
};

export default Promotions;

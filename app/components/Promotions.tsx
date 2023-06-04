import React from "react";
import { Sora } from "next/font/google";

import Image from "next/image";

import PromotionCard from "./PromotionCard";

import ProductOne from "../images/product_one.webp";
import PromotionOneImage from "../images/promotion_one.webp";
import PromotionTwoImage from "../images/promotion_two.webp";
import Heading from "./Heading";

const sora = Sora({ subsets: ["latin"] });

const Promotions = () => {
  return (
    <div className="my-10 lg:my-28">

      <Heading subtitle="promotions" mainHeading="Our Promotions Events" />

      {/* Products */}
      <div className="flex lg:flex-row flex-col w-full -mt-8">
        {/* Left Side */}
        <div className="flex flex-col gap-2 mt-14 px-8 w-full lg:w-1/2">
          <div className="bg-[#d6d6d8] lg:grid gap-2 lg:justify-between">
            <div className="w-full px-4 flex flex-col lg:flex-row justify-center items-center">
              <div className="lg:w-1/2 w-full text-center lg:text-start mt-4 lg:mt-0">
                <h3
                  className={`${sora.className} px-0 lg:px-6 font-bold text-2xl md:text-3xl leading-9 text-[#212121]`}
                >
                  Get UP TO 60%
                </h3>
                <p className="text-base md:text-lg -tracking-tight px-6">
                  For the summer season
                </p>
              </div>

              <div className="flex lg:justify-start justify-center items-center w-full  lg:w-[75%]">
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
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex flex-col lg:flex-row pt-6 px-8 lg:px-0 mt-8 w-full">
          <PromotionCard
            productName="Flex Sweatshirt"
            currentPrice={75}
            prevPrice={100}
            bgColor={"bg-[#efe1c7]"}
            picture={PromotionOneImage}
          />
          <PromotionCard
            bgColor="bg-[#d7d7d9]"
            productName="Flex Push Button Bomber"
            currentPrice={190}
            prevPrice={225}
            picture={PromotionTwoImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Promotions;

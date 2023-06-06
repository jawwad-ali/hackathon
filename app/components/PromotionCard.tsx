import React from "react";

import { Sora } from "next/font/google";
import Image, { StaticImageData } from "next/image";

interface PromotionCardProps {
  productName: string;
  prevPrice: number;
  currentPrice: number;
  picture: StaticImageData;
  bgColor: string;
}

const sora = Sora({ subsets: ["latin"], display: "swap" });

const PromotionCard: React.FC<PromotionCardProps> = ({
  productName,
  prevPrice,
  currentPrice,
  bgColor,
  picture,
}) => {
  return (
    <div className="lg:w-1/2 w-full mx-1 mt-4 lg:mt-0">
      <div
        className={`${bgColor} h-full w-full pt-6 flex flex-col lg:justify-between justify-center items-center lg:items-start`}
      >
        <div className="px-6">
          <p className={`${sora.className} text-base tracking-wide leading-6`}>
            {productName}
          </p>
          <div className="inline-block">
            <span
              className={`line-through ${sora.className} text-base tracking-wide leading-6`}
            >
              ${prevPrice}.00
            </span>
            <span
              className={`pl-4 font-bold ${sora.className} text-base tracking-wide leading-6`}
            >
              ${currentPrice}.00
            </span>
          </div>
        </div>
        <div className="pt-4">
          <Image
            height={362}
            width={282}
            src={picture}
            alt="Product One"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;

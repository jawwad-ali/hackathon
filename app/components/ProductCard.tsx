import Image, { StaticImageData } from "next/image";
import React from "react";

import { Sora } from "next/font/google";

interface ProductCardProps {
  name: string;
  price: number;
  picture: StaticImageData;
}

const sora = Sora({ subsets: ["latin"] });

const ProductCard: React.FC<ProductCardProps> = ({ name, picture, price }) => {
  return (
    <div className="flex flex-col h-full mx-auto">
      <div className="h-full lg:border lg:border-gray-400">
        <Image src={picture} alt="Prodcut Image" />
      </div>
      <div>
        <p
          className={`${sora.className} font-bold pt-2 text-base tracking-wide leading-6`}
        >
          {name}
        </p>
        <p
          className={`${sora.className} font-bold pt-2 text-base tracking-wide leading-6`}
        >
          ${price}.00
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

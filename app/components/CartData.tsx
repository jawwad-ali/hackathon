"use client";

import React from "react";

import { client } from "../../sanity/lib/client";

import { FaCartPlus, FaTrashAlt } from "react-icons/fa";

import imageUrlBuilder from "@sanity/image-url";

import Image from "next/image";

import OrderSummary from "./OrderSummary";

import { useDispatch } from "react-redux";

import { removeFromBasket } from "../../slices/basketSlice";

import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

// For fetching image
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const CartData = ({
  name,
  price,
  category,
  picture,
  quantity,
  product_type,
  id,
}: any) => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* <div className={`${sora.className} block lg:max-w-6xl mx-2 lg:mx-auto`}>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:m-4 lg:w-8/12 w-full"> */}
              <div className="flex flex-col lg:flex-row my-2">
                {/* Product Image */}

                {picture && (
                  <div className="flex items-center justify-center">
                    <Image
                      priority
                      src={urlFor(picture).width(170).height(225)?.url()}
                      alt="Product Image"
                      width={170}
                      height={225}
                    />
                  </div>
                )}

                {/* Product details */}
                <div className="flex justify-between w-full">
                  <div className="flex flex-col justify-around py-4 items-start text-left pl-6">
                    <h3 className="font-light text-xl text-[#212121] pb-2">
                      {name}
                    </h3>
                    <p className="pb-2">{product_type}</p>
                    <p className="font-semibold text-base text-[#212121] pb-2">
                      Delivery Estimation
                    </p>
                    <p className="pb-2 text-[#ffc700] text-base font-bold">
                      5 Working Days
                    </p>
                    <p className="text-[17.6px] text-[#212121]">${price}.00</p>
                  </div>

                  {/* Delete Button and Quantity increase and decrease button */}
                  <div className="py-4 flex flex-col justify-between">
                    <div>
                      <FaTrashAlt
                        className="text-2xl mx-auto text-red-600 hover:cursor-pointer"
                        onClick={() => dispatch(removeFromBasket(id))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          

    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default CartData;
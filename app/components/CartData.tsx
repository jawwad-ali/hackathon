"use client";

import React from "react";

import { client } from "../../sanity/lib/client";

import { FaTrashAlt } from "react-icons/fa";

import imageUrlBuilder from "@sanity/image-url";

import Image from "next/image";

import { useDispatch } from "react-redux";

import { removeFromBasket } from "../../slices/basketSlice";

// For fetching image
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const CartData = ({ name, price, picture, product_type, id }: any) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex flex-col lg:flex-row my-2">
        {/* Product Image */}

        {picture && (
          <div className="flex items-center justify-center">
            <Image
              className="rounded-md"
              priority
              src={urlFor(picture).width(220).height(300)?.url()}
              alt="Product Image"
              width={170}
              height={225}
            />
          </div>
        )}

        {/* Product details */}
        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-around py-4 items-start text-left pl-6">
            <h3 className="font-light text-xl text-[#212121] pb-2">{name}</h3>
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
  );
};
export default CartData;

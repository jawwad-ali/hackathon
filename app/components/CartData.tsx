"use client";
import React, { useEffect, useState } from "react";

import { client } from "../../sanity/lib/client";

import { QueryResultRow } from "@vercel/postgres";

import { Sora } from "next/font/google";

import { FaCartPlus, FaTrashAlt } from "react-icons/fa";

import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

import OrderSummary from "./OrderSummary";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

interface CartDataProps {
  data: QueryResultRow[];
}

const CartData: React.FC<CartDataProps> = ({ data }) => {
  const [productId, setProductId] = useState<any>();

  const [cartProducts, setCartProducts] = useState<any>([]);

  // For fetching image
  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    return builder.image(source);
  }

  useEffect(() => {
    setProductId(data.map((prodId: any) => prodId?.prod_id));
  }, [data]);

  useEffect(() => {
    (async () => {
      async function getCartProducts() {
        try {
          const theId = client.fetch("*[_id in $ids]", {
            ids: productId || "",
          });

          theId.then((d) => setCartProducts(d));
        } catch (err) {
          console.error("Error fetching value", err);
        }
      }
      await getCartProducts();
    })();
  }, [productId]);

  return (
    <div>
      <div className={`${sora.className} block max-w-6xl mx-auto`}>
        <div className="flex flex-col">
          <h2 className={`${sora.className} text-2xl font-bold pt-8`}>
            Shopping Cart
          </h2>
          {cartProducts.length == 0 ? (
            <div className="flex items-center justify-center text-center h-[100vh]">
              <h1 className={`text-4xl text-black font-bold`}>
                <div className="flex items-center justify-center text-center flex-col">
                  <FaCartPlus className="text-black text-7xl" />
                  Your Shopping Bag is empty
                </div>
              </h1>
            </div>
          ) : (
            <div className="flex">
              <div className="m-8 w-8/12">
                {cartProducts?.map((product: any, i: number) => (
                  <>
                    <div className="flex my-5" key={i}>
                      {/* Product Image */}
                      <Image
                        style={{ borderRadius: "9px" }}
                        src={urlFor(product?.image)
                          .width(170)
                          .height(225)
                          ?.url()}
                        alt="Product Image"
                        width={170}
                        height={225}
                        priority
                      />
                      {/* Product details */}
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-around py-4 items-start text-left pl-6">
                          <h3 className="font-light text-xl text-[#212121] pb-2">
                            {product.name}
                          </h3>
                          <p className="pb-2">{product.product_type}</p>
                          <p className="font-semibold text-base text-[#212121] pb-2">
                            Delivery Estimation
                          </p>
                          <p className="pb-2 text-[#ffc700] text-base font-bold">
                            5 Working Days
                          </p>
                          <p className="text-[17.6px] text-[#212121]">
                            ${product.price}.00
                          </p>
                        </div>

                        {/* Delete Button and Quantity increase and decrease button */}
                        <div className="py-4 flex flex-col justify-between">
                          <div>
                            <FaTrashAlt className="text-2xl mx-auto" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>

              {/* Order Summary */}
              <div className="w-1/3 my-8 mx-4">
                <OrderSummary cartProducts={cartProducts} data={data} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartData;
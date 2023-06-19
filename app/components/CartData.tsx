"use client";

import React, { useEffect, useState } from "react";

import { client } from "../../sanity/lib/client";

import { QueryResultRow } from "@vercel/postgres";

import { Sora } from "next/font/google";

import { FaCartPlus, FaTrashAlt } from "react-icons/fa";

import imageUrlBuilder from "@sanity/image-url";

import Image from "next/image";

import OrderSummary from "./OrderSummary";

import toast, { Toaster } from "react-hot-toast";

import { handleDelete } from "../cart/page";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

interface CartDataProps {
  data: QueryResultRow[];
}

const CartData: React.FC<CartDataProps> = ({ data }) => {
  const [, setLoading] = useState(false); 

  // // For fetching image
  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    return builder.image(source);
  }

  const [cartProducts, setCartProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const productIds = data.map((prodId: any) => prodId?.prod_id) || [];
        const fetchedProducts = await client.fetch(`*[_id in $ids]`, {
          ids: productIds,
        });
        setCartProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };

    if (data.length > 0) {
      fetchCartProducts();
    }
  }, [data.length, cartProducts.length]);
  // }, [data]);

  useEffect(() => {
    console.log("data", data);
    console.log("cartProdcuts", cartProducts);
  }, [cartProducts]);

  // Delete Product from Cart
  // const handleDelete = async (item_id: string) => {
  //   // try {
  //   const response = await fetch(`/api/cart`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       prod_id: item_id,
  //     }),
  //   });

  //   if (response.status === 200) {
  //     const data = await response.json();
  //     console.log("Response Data <=>", data);
  //     console.log("item_id", item_id);
  //     console.log("Del response", response);
  //     toast.error("Product Removed");
  //   } else {
  //     console.log("Error deleting product:", response.status);
  //   }
  // };

  return (
    <div>
      <Toaster />

      <div className={`${sora.className} block lg:max-w-6xl mx-2 lg:mx-auto`}>
        <div className="flex flex-col">
          <h2 className={`${sora.className} text-2xl font-bold pt-8`}>
            Shopping Cart
          </h2>
          {cartProducts.length === 0 ? (
            <div className="flex items-center justify-center text-center h-[100vh]">
              <h1 className={`text-4xl text-black font-bold`}>
                <div className="flex items-center justify-center text-center flex-col">
                  <FaCartPlus className="text-black text-7xl" />
                  Your Shopping Bag is empty
                </div>
              </h1>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row">
              <div className="lg:m-8 lg:w-8/12 w-full">
                {/* <Suspense key={data.length} fallback={<Loading />}> */}
                {cartProducts.map((product: any, i: number) => (
                  <div className="flex flex-col lg:flex-row my-5" key={i}>
                    {/* Product Image */}
                    {product.image && (
                      <div className="flex items-center justify-center">
                        <Image
                          priority
                          src={urlFor(product.image)
                            .width(170)
                            .height(225)
                            ?.url()}
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
                          <FaTrashAlt
                            className="text-2xl mx-auto text-red-600 hover:cursor-pointer"
                            onClick={async () => {
                              try {
                                setLoading(true);
                                toast.error(
                                  `${product.name} removed from the cart`
                                );
                                await handleDelete(product._id);
                                setLoading(false); 
                                window.location.reload();
                              } catch (error) {
                                // Handle error
                                console.error("An error occurred:", error);
                                setLoading(false);
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:w-1/3 mx-2 my-8 lg:mx-4">
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

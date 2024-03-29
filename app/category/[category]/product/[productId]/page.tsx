"use client";
import { useEffect, useState } from "react";

import { Loader2 } from "lucide-react";

import toast, { Toaster } from "react-hot-toast";

import { client } from "../../../../../sanity/lib/client";

import imageUrlBuilder from "@sanity/image-url";

import Image from "next/image";

import { Sora } from "next/font/google";

import { Button } from "../../../../../components/ui/button";
import "react-toastify/dist/ReactToastify.css";

import { ShoppingCart } from "lucide-react";

import { useDispatch } from "react-redux";
import { addToBasket } from "../../../../../slices/basketSlice";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

interface CategoryProps {
  product_type: string;
  price: string;
  name: string;
  _id: string;
  category: string;
  image: string;
  count: number;
}

const Page = ({ params }: { params: { productId: string } }) => {
  const [data, setData] = useState<CategoryProps[]>([]);

  const dispatch = useDispatch();

  // Getting the Product by ID
  async function getProductsById() {
    const products = await client.fetch(
      `*[_type=='product' && _id=='${params.productId}']`
    );
    return products;
  }

  useEffect(() => {
    getProductsById().then((data) => setData(data));
  }, []);

  // For fetching image
  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    return builder.image(source);
  }

  // Product Quantity
  const [count, setCount] = useState(1);

  // Add To Cart
  const handleCart = async () => {
    dispatch(
      addToBasket(
        data.map((d: CategoryProps) => ({
          _id: d._id,
          name: d.name,
          category: d.category,
          price: d.price,
          product_type: d.product_type,
          image: d.image,
          quantity: count,
        }))
      )
    );
    toast.success(`${[count, data[0]?.name]} added to cart`);

    await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        prod_id: data[0]?._id,
        quantity: count,
      }),
    });
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto min-h-screen mt-12 lg:mt-24 relative mb-6">
        <div className="flex lg:flex-row flex-col mx-4 lg:mx-0">
          <div className="hidden lg:block -mt-12">
            {/* Small Size Image */}
            {data[0]?.image ? (
              <Image
                src={urlFor(data[0]?.image).width(100)?.url()}
                alt="Product Image"
                width={100}
                height={100}
                priority
              />
            ) : (
              <div className="flex justify-center items-center">
                <Loader2 className="text-black loader" />
              </div>
            )}
          </div>
          {/* Big Size Image */}
          <div className="lg:ml-10 flex items-center justify-center h-[85vh] lg:-mt-11 -mt-14 lg:w-[45%]">
            {data[0]?.image ? (
              <Image
                priority
                src={urlFor(data[0]?.image).width(500)?.url()}
                alt="Product Image"
                width={500}
                height={500}
              />
            ) : (
              <div className="flex justify-center items-center text-7xl">
                <Loader2 className="text-black loader" />
              </div>
            )}
          </div>
          {/* Name And Product Type */}
          <div
            className={`${sora.className} lg:ml-10 mt-10 lg:mt-0 flex justify-center items-start flex-col`}
          >
            <h3 className={`text-3xl leading-8 tracking-wider text-[#212121]`}>
              {data[0]?.name}
            </h3>
            <p className="font-semibold text-xl opacity-70">
              {data[0]?.product_type}
            </p>

            {/* Size Section */}
            <div className="mt-5 w-full">
              <h4 className="uppercase text-[#212121] font-bold text-base tracking-wider">
                Select Size
              </h4>

              <ul className="flex justify-between text-center text-base text-[#666] items-center w-full mt-5 hover:cursor-pointer">
                <li className="rounded-[50%] sizeButtonHover w-10 h-10 pt-2">
                  XS
                </li>
                <li className="rounded-[50%] sizeButtonHover w-10 h-10 pt-2">
                  S
                </li>
                <li className="rounded-[50%] sizeButtonHover w-10 h-10 pt-2">
                  M
                </li>
                <li className="rounded-[50%] sizeButtonHover w-10 h-10 pt-2">
                  L
                </li>
                <li className="rounded-[50%] sizeButtonHover w-10 h-10 pt-2">
                  XL
                </li>
              </ul>
            </div>

            {/* Select Quantity */}
            <div
              className={`${sora.className} text-base text-black flex w-full justify-around p-4 mt-10`}
            >
              <h4>Quantity:</h4>
              <div className="flex justify-around w-full">
                <span
                  className="cursor-pointer"
                  onClick={() => setCount(count - 1)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                  </svg>
                </span>
                <span className="num">{count}</span>
                <span
                  className="cursor-pointer"
                  onClick={() => setCount(count + 1)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    //   @ts-ignore
                    t="1551322312294"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                    <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                  </svg>
                </span>
              </div>
            </div>

            {/* Add To Cart button and Price */}
            <div className="mt-10 flex justify-between items-center">
              <Button
                onClick={() => handleCart()}
                className={`text-white font-sans text-md font-semibold bg-gray-900 py-6 px-6 rounded-md flex 
                items-center justify-center gap-x-0.5 ${sora.className}`}
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> Add To Cart
              </Button>

              <Toaster />
              <p className="ml-10 font-bold text-xl leading-30 letter-spacing-0.1 text-gray-900">
                ${data[0]?.price}.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

import Image from "next/image";

import { Sora } from "next/font/google";

import { Button } from "../../components/ui/button";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const DynamicProduct = async ({
  params,
}: {
  params: { productname: string };
}) => {
  async function getProductsById() {
    const products = await client.fetch(
      `*[_type=='product' && _id=='${params.productname}']`
    );
    console.log("productsbbyid", products);
    return products;
  }

  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    return builder.image(source);
  }

  const prodById = await getProductsById();

  return (
    <div className="h-[100vh] mt-24 max-w-6xl mx-auto relative">
      <div className="flex lg:flex-row flex-col">
        <div className="hidden lg:block">
          <Image
            src={urlFor(prodById[0].image).width(100).url()}
            alt="Product Image"
            // loading="lazy"
            width={100}
            height={100}
            priority
          />
        </div>

        <div className="lg:ml-10 flex items-center justify-center">
          <Image
            priority
            // loading="eager"
            src={urlFor(prodById[0].image).width(500).url()}
            alt="Product Image"
            width={500}
            height={500}
          />
        </div>

        <div
          className={`${sora.className} lg:ml-10 mx-24 mt-10 lg:mt-0 flex justify-center items-start flex-col`}
        >
          <h3 className={`text-3xl leading-8 tracking-wider text-[#212121]`}>
            {prodById[0].name}
          </h3>
          <p className="font-semibold text-xl opacity-70">
            {prodById[0].product_type}
          </p>

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

          <div
            className={`${sora.className} text-base text-black flex w-full justify-around p-4 mt-10`}
          >
            <h4>Quantity:</h4>
            <div className="flex justify-around w-full">
              <span className="minus">
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
              <span className="num">1</span>
              <span className="plus">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
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

          <div className="mt-10 flex justify-center items-center">
            <Button
              className={`${sora.className} text-md h-[48px] w-[120px] bg-[#e1edff] text-blue-600 font-bold`}
            >
              Add To Cart
            </Button>
            <p className="ml-10 font-bold text-xl leading-30 letter-spacing-0.1 text-gray-900">
              ${prodById[0].price}.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicProduct;

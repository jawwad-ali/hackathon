import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

import Image from "next/image";

import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

async function getAllProducts() {
  const products = await client.fetch(`*[_type=='product']`);
  return products;
}

// For reteriving image
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const AllProducts = async () => {
  const products = await getAllProducts();

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 mt-16 max-w-6xl mx-auto mb-24">
      {products.map((data: any, i: any) => (
        <div
          className="flex flex-col h-full mx-auto hover:cursor-pointer pb-4 lg:pb-5"
          key={i}
        >
          <div className="h-full lg:border lg:border-gray-400">
            <Image
              src={urlFor(data.image).width(250).url()}
              alt="Product Image" 
              loading="lazy"
              width={250}
              height={250}
            />
          </div>
          <div>
            <p
              className={`${sora.className} font-bold lg:pt-2 text-base tracking-wide leading-6`}
            >
              {data.name}
            </p>
            <p
              className={`${sora.className} font-bolder lg:pt-2 pt-1 text-[#888] text-base tracking-wide leading-6`}
            >
              {data.product_type}
            </p>
            <p
              className={`${sora.className} font-bold lg:pt-2 pt-1 text-base tracking-wide leading-6`}
            >
              ${data.price}.00
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
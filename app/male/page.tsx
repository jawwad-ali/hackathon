import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

import Image from "next/image";

import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

async function getMaleProducts() {
  const products = await client.fetch(
    `*[_type=='product' && category=='male']`
  );
  return products;
}

// For reteriving image
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const Male = async () => {
  const products = await getMaleProducts();

  return (
    <div className="grid grid-cols-4 mt-16 max-w-6xl mx-auto mb-24">
      {products.map((data: any , i:any) => (
        <div className="flex flex-col h-full mx-auto hover:cursor-pointer" key={i}>
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
              className={`${sora.className} font-bold pt-2 text-base tracking-wide leading-6`}
            >
              {data.name}
            </p>
            <p
              className={`${sora.className} font-bolder pt-2 text-[#888] text-base tracking-wide leading-6`}
            >
              {data.product_type}
            </p>
            <p
              className={`${sora.className} font-bold pt-2 text-base tracking-wide leading-6`}
            >
              ${data.price}.00
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Male;

import { client } from "../../../sanity/lib/client";

import imageUrlBuilder from "@sanity/image-url";

import Image from "next/image";

import { Sora } from "next/font/google";

import Link from "next/link";

interface CategoryProps {
  product_type: string;
  price: string;
  name: string;
  _id: string;
  category: string;
  image: string;
}

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const Page = async ({ params }: { params: { category: string } }) => {
  async function getProductsByCategory() {
    if (params.category === "allproducts") {
      const allProd = await client.fetch(`*[_type=='product']`);
      return allProd;
    } else {
      const products = await client.fetch(
        `*[_type=='product' && category=='${params.category}']`
      );
      return products;
    }
  }

  const prod = await getProductsByCategory();

  // Function for reteriving image
  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    return builder.image(source);
  }

  if (!prod.length) {
    return (
      <div className="h-screen flex justify-center items-center text-center font-bold">
        <h1>{`No Products are Available for ${params.category}`} </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 mt-16 mb-6">
        {prod.map((data: CategoryProps, i: any) => (
          <div
            key={i}
            className="flex flex-col h-full mx-auto hover:cursor-pointer pb-4 lg:pb-0 lg:mb-6"
          >
            <Link href={`/category/${params.category}/product/${data._id}`}>
              <div className="lg:border lg:border-gray-400">
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

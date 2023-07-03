import { Sora } from "next/font/google";

import { Button } from "../../components/ui/button";

import FeatureOne from "../images/feature_one.webp";
import Image from "next/image";
import Link from "next/link";

const sora = Sora({ subsets: ["latin"], display: "swap" });

interface MyObject {
  title: string;
  desc: string;
}

const obj: MyObject[] = [
  {
    title: "Using Good Quality Materials",
    desc: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
  },
  {
    title: "100% Handmade Products",
    desc: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
  },
  {
    title: "Modern Fashion Design",
    desc: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
  },
  {
    title: "Discount for Bulk Orders",
    desc: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
  },
];

const Features = () => {
  return (
    <div className="mb-2 mx-4 lg:px-0">
      <div className="flex justify-center lg:justify-end w-full pt-0 text-left lg:pl-32 lg:pb-8">
        <h1
          className={`${sora.className} font-bold text-[2.75rem] leading-[70px] lg:leading-[55px] tracking-[.03em] text-[#212121] 
          lg:w-[50%]`}
        >
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="grid relative grid-cols-2 gap-4">
          {/* Bg Heading */}
          <div className="absolute">
            <h3
              className="font-extrabold text-6xl lg:text-8xl lg:leading-[110px] leading-[130px] text-[#212121] 
              xl:px-12 px-10 md:px-2"
              style={{ opacity: ".07", zIndex: 1 }}
            >
              Different from others
            </h3>
          </div>

          {/* Boxes */}
          {obj.map((data: MyObject, i: any) => (
            <div
              key={i}
              className="mt-8 lg:w-[75%] mx-auto lg:mx-4"
              style={{ zIndex: 2 }}
            >
              <h3
                className={` ${sora.className} font-semibold text-[1.125rem] leading-5 -tracking-tighter text-[#212121] mb-4`}
              >
                {data.title}
              </h3>
              <p
                className={`text-base font-light leading-[22px] tracking-[.05em] text-[#212121] ${sora.className}`}
              >
                {data.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex lg:flex-row flex-col justify-center items-center mt-12 lg:mt-0">
          <Image
            width="300"
            height="350"
            src={FeatureOne}
            alt="Feature One"
            loading="lazy"
          />
          <div className="flex flex-col gap-8 justify-center items-center p-6">
            <p
              className={`${sora.className} font-light text-base leading-6 text-[#212121] text-justify`}
            >
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Link href='/category/allproducts'>
              <Button
                className={`${sora.className} text-md flex-shrink-0 bg-[#212121] text-white font-bold`}
              >
                See All Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

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
    <div>
      <div className="flex justify-center lg:justify-end w-full pt-0 pl-20 lg:pl-32 lg:pb-8">
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
          {obj.map((data: MyObject) => (
            <div
              className="mt-8 w-[82%] lg:w-[75%] mx-auto lg:mx-4"
              style={{ zIndex: 2 }}
            >
              <h3
                className={` ${sora.className} font-semibold text-[1.125rem] leading-5 -tracking-tighter text-[#212121] mb-4`}
              >
                {data.title}
              </h3>
              <p
                className={`text-base font-thin leading-[22px] tracking-[.05em] text-[#212121] ${sora.className}`}
              >
                {data.desc}
              </p>
            </div>
          ))}
        </div>
        <div>Right Side</div>
      </div>
    </div>
  );
};

export default Features;

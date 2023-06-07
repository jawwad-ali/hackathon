import Image from "next/image";
import Logo from "../images/logo.webp";

import { Sora } from "next/font/google";

interface FooterProps {
  title: string;
  [x: string]: any;
}

const sora = Sora({
  display: "swap",
  subsets: ["latin"],
});

const footer: FooterProps[] = [
  {
    title: "Company",
    itemOne: "About",
    itemTwo: "Terms Of Use",
    itemThree: "Privacy Policy",
    itemFour: "How it Works",
    itemFive: "Contact Us",
  },

  {
    title: "Support",
    itemOne: "Support Career",
    itemTwo: "24h Service",
    itemThree: "Quick Chat",
  },
  {
    title: "Contact",
    itemOne: "Whatsapp",
    itemTwo: "24h Service",
  },
];

const Footer = () => {
  return (
    <div
      className={`${sora.className} mt-16 max-w-6xl grid lg:grid-cols-4 grid-cols-1 gap-2 justify-between `}
    >
      <div className="m-11">
        <div className="mb-6">
          <Image
            width={180} 
            height={30}
            src={Logo}
            alt="Footer Image"
            loading="lazy"
          />
        </div>
        <p className="text-base text-[#666] leading-7">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
      </div>

      {/* Two */}
      {footer.map((data,i) => (
        <div className="m-11" key={i}>
          <div className="mb-6">
            <h4 className={`${sora.className} text-xl text-[#666] font-bold`}>
              {data.title}
            </h4>
          </div>
          <ul>
            <li className="pb-4 text-base text-[#666]">{data["itemOne"]}</li>
            <li className="pb-4 text-base text-[#666]">{data["itemTwo"]}</li>
            <li className="pb-4 text-base text-[#666]">{data["itemThree"]}</li>
            <li className="pb-4 text-base text-[#666]">{data["itemFour"]}</li>
            <li className="pb-4 text-base text-[#666]">{data["itemFive"]}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Footer;

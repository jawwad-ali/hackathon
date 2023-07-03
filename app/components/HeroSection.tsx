import Image from "next/image";

import { Button } from "../../components/ui/button";

import { ShoppingCart } from "lucide-react";
 
import { Sora } from "next/font/google";   

import HeroSectionImage from "../images/hero_section_image.webp";
import FeaturedOne from "../images/featured_one.webp";
import FeaturedTwo from "../images/featured_two.webp";
import FeaturedThree from "../images/featured_three.webp";
import FeaturedFour from "../images/featured_four.webp";

const sora = Sora({
  display: 'swap',
  subsets: ["latin"]
}) 

const HeroSection = () => {
  return (
    <div className="min-h-screen flex">
      <div className="mt-16 md:mt-48 ml-7 w-[32rem]">
        <Button
          className={`${sora.className} text-md h-[48px] w-[120px] bg-[#e1edff] text-blue-600 font-bold`}
        >
          Sale 70% 
        </Button>
        <h1
          className={`${sora.className} pt-8 font-bold text-5xl lg:text-6xl leading-[55px] text-[#212121]`}
        >
          An Industrial Take on Streetwear
        </h1>
        <div className="mt-8 w-[85%] lg:w-[60%]">
          <p className={`${sora.className} text-[#666] text-base`}>
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
        </div>

        <Button
          className="text-white font-sans text-md font-semibold bg-gray-900 py-6 px-6 rounded-md flex 
            items-center justify-center gap-x-0.5 mt-8"
        >
          <ShoppingCart className="mr-2 h-5 w-5" /> Start Shopping
        </Button>

        <div className="mt-5 flex flex-wrap justify-between py-5 w-[90%]">
          <div className="flex justify-between lg:justify-around w-full lg:w-[50%] mb-4">
            <Image src={FeaturedOne} alt="Featured One" />
            <Image src={FeaturedTwo} alt="Featured Two" />
          </div>
          <div className="flex justify-between lg:justify-around w-full lg:w-[50%] mb-4">
            <Image src={FeaturedThree} alt="Featured Three" />
            <Image src={FeaturedFour} alt="Featured Four" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative w-[600px] h-[600px] mt-36 ml-8 lg:flex flex-1 rounded-[50%] bg-[#ffece3] hidden">
        <div className="absolute -top-[5%]">
          <Image
            src={HeroSectionImage} 
            loading="eager" 
            alt="Hero Section Image"
            width="650"
            height="650"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

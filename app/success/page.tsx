import { Sora } from "next/font/google";
 
import { Button } from "../../components/ui/button";

import { ShoppingCart, LucideShoppingBag } from "lucide-react";
import Link from "next/link";

const sora = Sora({
  display: "swap",
  subsets: ["latin"],
}); 

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
      <div className="border rounded-3xl bg-[#f1f1f1] p-24 flex flex-col items-center justify-center text-center">
        <LucideShoppingBag className="h-20 w-20 text-green-600" />
        <h1
          className={`${sora.className} pt-8 font-bold text-5xl lg:text-6xl leading-[55px] text-[#212121]`}
        >
          Thank you for your order!
        </h1>

        <Link href="/">
          <Button
            className="text-white font-sans text-md font-semibold bg-gray-900 lg:w-96 p-8 rounded-md flex 
        items-center justify-center gap-x-0.5 mt-8 text-xl"
          >
            <ShoppingCart className="mr-2 h-5 w-5" /> Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;

"use client";

import { useSelector } from "react-redux";

import CartData from "../components/CartData";

import { Sora } from "next/font/google";

import OrderSummary from "../components/OrderSummary";

import { selectItems } from "../../slices/basketSlice";

interface ProductProps {
  name: string;
  price: number | string;
  category: string;
  image: string;
  quantity: number | string;
  product_type: string;
  _id: number | string;
}

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const Cart = () => {
  const products = useSelector(selectItems);

  return (
    <div>
      <h2 className={`${sora.className} text-2xl font-bold pt-8`}>
        {products.length > 0 ? "Shopping Cart" : "Your Bag is empty"}
      </h2>

      <div
        className={`flex flex-col lg:flex-row ${sora.className} block lg:max-w-6xl mx-2 lg:mx-auto mb-8`}
      >
        <div className="flex flex-col w-full">
          <div className="lg:w-8/12 w-full">
            {products?.map((prod: ProductProps, i: number) => (
              <>
                <CartData
                  key={i}
                  name={prod?.name}
                  price={prod?.price}
                  category={prod?.category}
                  picture={prod?.image}
                  quantity={prod?.quantity}
                  product_type={prod?.product_type}
                  id={prod?._id}
                />
              </>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-4/12">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;

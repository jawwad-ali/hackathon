"use client";
import toast, { Toaster } from "react-hot-toast";

import getStipePromise from "../../lib/stripe";

const OrderSummary = ({ cartProducts }: any) => {
  // Total Amount that customer has to pay
  let price = cartProducts.map((price: any) => parseInt(price.price));

  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += price[i];
  }

  // Stripe Checkout
  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/create-payment-intent/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(cartProducts),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
      toast("Redirecting", {
        duration: 6000,
      });
    }
  };

  return (
    <div className="flex flex-col">
      <Toaster />
      <h4 className="font-bold text-xl pb-4">Order Summary</h4>

      <div className="flex justify-between pb-4">
        <label>Quantity:</label>
        <span className="text-base font-bold">{cartProducts.length}</span>
      </div>

      <div className="flex justify-between">
        <label>Sub Total:</label>
        <p className="text-base font-bold">${sum}.00</p>
      </div>

      <button
        onClick={handleCheckout}
        className="mt-5 bg-black text-white text-sm font-semibold py-3"
      >
        Process to checkout
      </button>
    </div>
  );
};

export default OrderSummary;

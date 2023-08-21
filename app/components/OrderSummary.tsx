"use client";
import toast, { Toaster } from "react-hot-toast";

import getStipePromise from "../../lib/stripe";

import { useSelector } from "react-redux";
import { selectQuantity, selectTotal } from "../../slices/basketSlice";
import { RootState } from "../../store/store";

const OrderSummary = () => {
  const total = useSelector(selectTotal);
  const quantity = useSelector(selectQuantity);
  const cartItems = useSelector((state: RootState) =>
    state?.basket?.items.flat()
  );

  // Stripe Checkout
  const handleCheckout = async (): Promise<any> => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/create-payment-intent/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(cartItems),
    });

    if (!response.ok) {
      return new Error("error");
    }

    const data = await response?.json();

    if (data?.session) {
      console.log("session", data.session);
      stripe?.redirectToCheckout({ sessionId: data.session.id });
      toast("Redirecting", {
        duration: 6000,
      });
    }
    return data;
  };

  return (
    <div className="flex flex-col">
      <Toaster />
      <h4 className="font-bold text-xl pb-4">Order Summary</h4>

      <div className="flex justify-between pb-4">
        <label>Quantity:</label>
        <span className="text-base font-bold">{quantity}</span>
      </div>

      <div className="flex justify-between">
        <label>Sub Total:</label>
        <p className="text-base font-bold">${total * quantity}.00</p>
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

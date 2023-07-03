"use client";
import useSWR from "swr";

import Loading from "../cart/loading";

import CartData from "../components/CartData";

const url = "/api/cart";
const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Cart = async () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>; 
  if (isLoading)
    return (
      <div>
        <Loading /> 
      </div>
    );

  return (
    <div>
      <CartData data={data} />
    </div>
  );
};

export default Cart;
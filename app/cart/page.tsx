import Loading from "../cart/loading";

import { Suspense, lazy } from "react";

import { cookies } from "next/headers";

import { sql } from "@vercel/postgres";
// import CartData from "../components/CartData";

// const ChildrenComponent = () => import("../components/CartData");
const CartData = lazy(() => import('../components/CartData'));

const fetchItems = async () => {
  const { rows } = await sql`SELECT * FROM cartable WHERE user_id=${
    cookies().get("user_id")?.value as string
  }`;
  return rows;
};

const Cart = async () => {
  const data = await fetchItems();
  const key = Math.random();

  return ( 
    <div>
      <Suspense key={key} fallback={<Loading />}> 
        <CartData data={data} />
        {/* <CartData data={data} /> */}
      </Suspense>
    </div>
  );
};

export default Cart;

import { Suspense } from "react";

import { cookies } from "next/headers";

import { sql } from "@vercel/postgres";

import CartData from "../components/CartData";
import Loading from "./loading";

const fetchItems = async () => {
  const { rows } = await sql`SELECT * FROM cartable WHERE user_id=${
    cookies().get("user_id")?.value as string
  }`;
  return rows;
};

const Cart = async () => {
  const data = await fetchItems();
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CartData data={data} />
      </Suspense>
    </div>
  );
};

export default Cart;
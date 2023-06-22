"use server";

import Loading from "../cart/loading";

import { Suspense, lazy } from "react";

import { cookies } from "next/headers";

import { sql } from "@vercel/postgres";

// CartData component
const CartData = lazy(() => import("../components/CartData"));

// Query to Del items from Database
export const handleDelete = async (id: string) => {
  const del = await sql`DELETE FROM cartable WHERE prod_id = ${id}`;
  console.log("del", del);
};

// Query to Fetch Items from Database
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
      </Suspense>
    </div>
  );
};

export default Cart;

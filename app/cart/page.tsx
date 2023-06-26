"use server";

import Loading from "../cart/loading";

import { Suspense, lazy } from "react";

import { sql } from "@vercel/postgres";

// CartData component
const CartData = lazy(() => import("../components/CartData"));

// Query to Del items from Database
export const handleDelete = async (id: string) => {
  const del = await sql`DELETE FROM cartable WHERE prod_id = ${id}`;
  console.log("del", del);
};

// Query to Fetch Items from Database
// const fetchItems = async () => {
//   const { rows } = await sql`SELECT * FROM cartable WHERE user_id=${
//     cookies().get("user_id")?.value as string
//   }`;
//   return rows;
// };

const FetchCartProducts = async () => {
  try {
    const response = await import("../api/cart/route");
    const data = await (await response.GET()).json();

    // Parse the response as JSON
    // const data = await response.json();

    // Return the parsed data
    return data;
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error fetching cart products:", error);
    throw error;
  }
};

const Cart = async () => {
  // const data = await fetchItems();
  const key = Math.random();

  const CartItems = await FetchCartProducts();

  return (
    <div>
      <Suspense key={key} fallback={<Loading />}>
        <CartData CartItems={CartItems} />
      </Suspense>
    </div>
  );
};

export default Cart;
"use client";
import React, { useEffect, useState } from "react";

import { client } from "../../sanity/lib/client";

import { QueryResultRow } from "@vercel/postgres";

interface CartDataProps {
  data: QueryResultRow[];
}

const CartData: React.FC<CartDataProps> = ({ data }) => {
  const [productId, setProductId] = useState<any>();
  const [cartProducts, setCartProducts] = useState<any[]>([]);

  useEffect(() => {
    setProductId(data.map((prodId: any) => prodId.prod_id));
    console.log("productId", productId);
  }, []);

  useEffect(() => {
    (async () => {
      async function getCartProducts() {
        const theId = client.fetch("*[_id in $ids]", { ids: productId || "" });
        theId.then((d) => setCartProducts(d));
      }
      await getCartProducts();
    })();
  }, [productId]);

  return (
    <div>
      <br />
      <div className=" block bg-blue-600">
        <p className="flex flex-col">
          {cartProducts.map((product) => (
            <div>
              <p>
                {product.name}
                {product.price}
              </p>
            </div>
          ))}
        </p>{" "}
      </div>
      <br />
    </div>
  );
};

export default CartData;
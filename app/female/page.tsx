import React from "react";

import { client } from "../../sanity/lib/client";

async function getFeMaleProducts() {
  const products = await client.fetch(
    `*[_type=='product' && category=='female']`
  );
  return products;
}

const Female = async () => {
  const prod = await getFeMaleProducts();
  // console.log("PRODUCTS", prod);

  return <div>Female</div>;
};

export default Female;

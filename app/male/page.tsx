import React from "react";

import { client } from "../../sanity/lib/client";

async function getMaleProducts() {
  const products = await client.fetch(
    `*[_type=='product' && category=='male']`
  );
  return products;
}

const Male = async () => {
  const products = await getMaleProducts();
//   console.log("by category",products);

  return (
    <div>
        <div>{products.map((data:any) => (
            <h1>{data.name}</h1>
        ))}</div>
    </div>
  )
};

export default Male;

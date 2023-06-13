"use client";
import { Sora } from "next/font/google";

import { useState } from "react";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const AddToCart = () => {
    const [count,setCount]=useState(0)
    return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {count} 
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
};

export default AddToCart;

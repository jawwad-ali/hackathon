import Heading from "./Heading";
import ProductCard from "./ProductCard";

import ProductProOne from "../images/product_pro_one.png";
import ProductTwo from "../images/product_two.png";
import ProductThree from "../images/product_three.png";

const Products = () => {
  return (
    <div className="my-10 lg:my-28">
      {/* Heading Component */}
      <Heading subtitle="PRODUCTS" mainHeading="Check What We Have" />

      <div className="flex flex-col lg:flex-row mt-8">
        <div className="transform transition-all lg:hover:scale-110 ease-in-out mb-2 lg:mb-0 mx-auto">
          <ProductCard
            name="Brushed Raglan SweatShirt"
            price={195}
            picture={ProductProOne}
          />
        </div>

        <div className=" transform transition-all lg:hover:scale-110 ease-in-out mb-2 lg:mb-0 mx-auto">
          <ProductCard
            name="Cameryn Sash Tie Dress"
            price={545}
            picture={ProductTwo}
          />
        </div>

        <div className=" transform transition-all lg:hover:scale-110 ease-in-out mb-2 lg:mb-0 mx-auto">
          <ProductCard
            name="Brushed Bomber"
            price={225}
            picture={ProductThree}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
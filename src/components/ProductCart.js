import React from "react";
import ProductCartItems from "./ProductCartItems";
import ProductTotal from "./ProductTotal";
const ProductCart = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="container">
          <div className="flex">
            <div className="flexOne">
              <ProductCartItems />
            </div>
            <div className="flexTwo stick">
              <ProductTotal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;

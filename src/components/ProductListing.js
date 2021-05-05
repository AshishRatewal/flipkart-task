import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch , useSelector } from "react-redux";
import { setProduct } from "../redux/Action/Actions";
import ProductComponents from "./ProductComponents";

const ProductListing = () => {
  const products = useSelector((state) => state.allProduct.products); 
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Error", err);
        });
      dispatch(setProduct(response.data));
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <ProductComponents />
        </div>
      </div>
    </>
  );
};
export default ProductListing;

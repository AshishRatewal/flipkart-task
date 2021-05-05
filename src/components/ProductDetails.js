import React, { useEffect , useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  selectedProduct,
  removeSelectedProduct,
} from "../redux/Action/Actions";

const ProductDetails = () => {
  const [attri,setAttri] = useState('');
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchDetails1 = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Error Selected Product", err.message);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchDetails1(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  let addToCartFun = () => {
    setAttri('true');
    let localCartItems = JSON.parse(localStorage.getItem("cartItems"));
    let arr = [];

    // clonning the array
    if (localCartItems == null || localCartItems == "") {
      arr.push(product);
      localStorage.setItem("cartItems",JSON.stringify(arr));
    } else {
      arr.splice(0,arr.length);
      for(let i=0;i< localCartItems.length;i++){
        arr.push(localCartItems[i]);
      }
      arr.push(product);
      localStorage.setItem("cartItems",JSON.stringify(arr));
    }
    let finalCartItems = JSON.parse(localStorage.getItem("cartItems"));
    dispatch(addToCart(finalCartItems));
    alert("Item Added");
  };

  return (
    <div className="container my-4">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="row border rounded p-4">
          <div className="col-md-6 border-right p-5">
            <img src={image} alt={title} className="d-block mx-auto w-75" />
          </div>
          <div className="col-md-6 border-left p-5">
            <div className="card-title title">
              <h4>{title}</h4>
            </div>
            <div className="card-title">
              <p className="font-italic">{description}</p>
            </div>
            <div className="description card-title">
              <p>
                Category:
                <span className="font-weight-bold"> {category}</span>
              </p>
            </div>
            <div className="card-title">
              <p>
                <span className="font-weight-bold">{price}</span>$
              </p>
            </div>
            <div className="card-title">
              <button
                className="btn btn-primary btn-block"
                id={productId}
                onClick={addToCartFun}
                disabled={attri}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

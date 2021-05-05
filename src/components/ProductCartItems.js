import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/Action/Actions";
const ProductCartItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items.id);
  if (items == null) {
    let arr = [];
    localStorage.removeItem("cartItems");
  }

  const renderList =
    items &&
    items.map((item) => {
      const { category, id, image, price, title } = item;
      // remove from cart
      const removeFromCart = () => {
        let getRes = window.confirm("Do you really want to delete this item?");
        if (getRes == true) {
          let getDataLocalStorage = JSON.parse(
            localStorage.getItem("cartItems")
          );
          let arr = [];
          for (let i = 0; i < getDataLocalStorage.length; i++) {
            arr.push(getDataLocalStorage[i]);
          }
          let tempId = parseInt(id);
          for (let i = 0; i < arr.length; i++) {
            if (tempId === arr[i].id) {
              arr.splice(i, 1);
            }
          }
          localStorage.setItem("cartItems", JSON.stringify(arr));
          let getLocalFinal = JSON.parse(localStorage.getItem("cartItems"));
          dispatch(addToCart(getLocalFinal));
        }else{
          console.log("You saved your item to delete.. Thanks");
        }
      };
      return (
        <div className="row mb-3" key={id}>
          <div className="col-12">
            <div className="row border rounded p-5">
              <div className="col-md-4">
                <img
                  src={image}
                  alt={title}
                  className="w-100 mx-auto d-block"
                />
              </div>
              <div className="col-md-8">
                <h3>Title:- {title}</h3>
                <p className="font-weight-bold mb-0 mt-2">{price}$</p>
                <p className="font-weight-bold">Category:- {category}</p>
                <button
                  className="btn btn-danger btn-block"
                  onClick={removeFromCart}
                >
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  return (
    <>
      <div className="col mb-3">{renderList}</div>
    </>
  );
};

export default ProductCartItems;

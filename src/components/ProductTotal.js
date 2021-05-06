import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from '../redux/Action/Actions';
import { useDispatch } from "react-redux";
const ProductTotal = () => {
  const dispatch = useDispatch();
  let buyBtn, orderBtn;
  let getLoginEntry = JSON.parse(localStorage.getItem("loginData"));
  console.log("getLoginEntry:= ",getLoginEntry);
  if (getLoginEntry === null) {
    buyBtn = "";
    orderBtn = "true";
  } else {
    orderBtn = "";
    buyBtn = "true";
  }
  // disabled
  console.log("buy Btn", buyBtn, "   Order Btn", orderBtn);
  let items = useSelector((state) => state.items.items.id);
  let totoalAmount = 0,
    count = 0;
  if (items !== undefined) {
    for (let i = 0; i < items.length; i++) {
      totoalAmount += items[i].price;
      count++;
    }
  }
  const orderNow = (e) => {
    e.preventDefault();
    window.alert("You'r Items are Placed");
    localStorage.removeItem("cartItems");
    dispatch(addToCart(""));
  }
  return (
    <>
      <div className="col">
        <div className="TotalPrice border rounded p-4">
          <h3 className="text-center">PRICE DETAILS</h3>
          <hr />
          <div className="row">
            <div className="col-6">
              <p className="mb-0">Price({count} Item)</p>
            </div>
            <div className="col-6">
              <p className="mb-0 text-right">{totoalAmount} $</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">
              <p className="mb-0">Delivery Charges</p>
            </div>
            <div className="col-6">
              <p className="mb-0 text-right">FREE</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">
              <p className="mb-0">Total Amount</p>
            </div>
            <div className="col-6">
              <p className="mb-0 text-right">{totoalAmount} $</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <Link to="/Login">
                <button
                  className="btn btn-primary btn-block mb-0"
                  disabled={buyBtn}
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <button
                className="btn btn-primary btn-block mb-0"
                disabled={orderBtn}
                onClick={orderNow}
              >
                Order Now
              </button>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <Link to="/">
                <p className="btn btn-primary btn-block mb-0">
                  Continue Shopping
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTotal;

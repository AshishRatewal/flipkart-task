import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const cartTotalItems = useSelector((state) => state.items.items.id);
  let count = 0;
  if (cartTotalItems !== undefined) {
    for (let i = 0; i < cartTotalItems.length; i++) {
      count++;
    }
  }
  return (
    <>
      <main className="bg-primary text-light py-2 sticky-top">
        <div className="container">
          <div className="row">
            <div className="col-2 my-auto">
              <h4>
                <Link to="/" className="text-light">
                  <img
                    src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-com-logo-internet-ltd-state-of-kerala-10.png"
                    alt="flipkart"
                    className="w-100 invert"
                  />
                </Link>
              </h4>
            </div>
            <div className="col-6 my-auto">
              <div className="form-group my-auto">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="col-4 my-auto">
              <div className="row">
                <div className="col-6 my-auto">
                  <Link to="/Login">
                    <button className="btn btn-light btn-block">Login</button>
                  </Link>
                </div>
                <div className="col-6 my-auto">
                  <Link to="/ProductCart">
                    <button type="button" className="btn btn-light btn-block">
                      Cart <span className="badge badge-primary">{count}</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;

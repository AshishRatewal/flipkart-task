import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {getSearchData} from '../redux/Action/Actions';
const Header = () => {
  const dispatch = useDispatch();
  const cartTotalItems = useSelector((state) => state.items.items.id);
  let count = 0;
  if (cartTotalItems !== undefined) {
    for (let i = 0; i < cartTotalItems.length; i++) {
      count++;
    }
  }
  const getSearchTerm = (e) => {
    const {value} = e.target;
    dispatch(getSearchData(value));
  }
  return (
    <>
      <main className="bg-primary text-light py-2 sticky-top">
        <div className="container">
          <div className="row">
            <div className="col-md-2 my-auto">
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
            <div className="col-md-6 my-auto">
              <div className="form-group my-auto same">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                  onChange={getSearchTerm}
                />
              </div>
            </div>
            <div className="col-md-4 my-auto">
              <div className="row">
                <div className="col-md-6 my-auto same">
                  <Link to="/Login">
                    <button className="btn btn-light btn-block">Login</button>
                  </Link>
                </div>
                <div className="col-md-6 my-auto same">
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

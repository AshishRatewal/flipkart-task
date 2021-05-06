import React, { useState } from "react";
import { addToCart } from "../redux/Action/Actions";
import { useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const loginId = "admin@gmail.com";
  const loginPass = "123456789";
  const inputObject = {
    email: "",
    password: "",
  };
  const [inputs, setInputs] = useState(inputObject);
  const [err, setErr] = useState(inputObject);
  const getLoginData = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    checkErr();
  };

  const validator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkErr = () => {
    let emptyErr = {};
    const { email, password } = inputs;
    if (email == "" || email == null) {
      emptyErr.emailErr = "***Please Enter an valid Email";
    } else if (!validator.test(email)) {
      emptyErr.emailErr = "***Please Enter Email";
    } else {
      emptyErr.emailErr = "";
    }

    // password
    if (password == "" || password == null) {
      emptyErr.passwordErr = "***Please Enter Password";
    } else if (password.length < 8) {
      emptyErr.passwordErr = "***Password must be of 8 character";
    } else {
      emptyErr.passwordErr = "";
    }

    setErr(emptyErr);
  };

  // the final login data
  let flipLogin = (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    if (
      email == "" ||
      email == null ||
      password == "" ||
      !password.length >= 8 ||
      !validator.test(email)
    ) {
      checkErr();
    } else {
      if (email == loginId && password == loginPass) {
        window.alert("Your'r Item is Placed");
        setInputs(inputObject);
        localStorage.removeItem("cartItems");
        dispatch(addToCart(""));
      } else {
        window.alert("Sorry! Data not matched");
        setInputs(inputObject);
      }
    }
  };
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Login</h1>
          </div>
          <div className="col-12">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={getLoginData}
                  autoComplete="off"
                  value={inputs.email}
                />
                <small className="text-danger">{err.emailErr}</small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={getLoginData}
                  autoComplete="off"
                  value={inputs.password}
                />
                <small className="text-danger">{err.passwordErr}</small>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={flipLogin}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

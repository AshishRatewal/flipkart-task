import Header from "./components/Header";
import Login from "./components/Login";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductCart from "./components/ProductCart";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/Login" component={Login} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/ProductCart" component={ProductCart} />
          <Route>404 not found!</Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;

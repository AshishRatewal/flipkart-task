import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductsReducer,
  addToCartReducer,
} from "./Reducers";
// this is the combine reducer whch we are going to use in all prgram
const reducer = combineReducers({
  allProduct: productReducer,
  product: selectedProductsReducer,
  items: addToCartReducer,
});
export default reducer;

import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductsReducer,
  addToCartReducer,
  getSearchData,
} from "./Reducers";
// this is the combine reducer whch we are going to use in all prgram
const reducer = combineReducers({
  allProduct: productReducer,
  product: selectedProductsReducer,
  items: addToCartReducer,
  searchTERM: getSearchData,
});
export default reducer;

import {
  SET_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  GET_SEARCH_DATA,
} from "../Store/Event";
// this is the action for set the product which we got from api
export const setProduct = (products) => {
  return {
    type: SET_PRODUCT,
    payload: products,
  };
};
// this function for add to cart
export const addToCart = (itemId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};
//  remove from cart function
export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};
// this function is for get th particular product from api
export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};
//  this function is for to remove previous selected item from card
export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};
// search
export const getSearchData = (searchTerm) => {
  return {
    type: GET_SEARCH_DATA,
    payload: searchTerm,
  }
}

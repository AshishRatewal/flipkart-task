import {
  SET_PRODUCT,
  ADD_TO_CART,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  REMOVE_FROM_CART,
  GET_SEARCH_DATA,
} from "../Store/Event";

const initialState = {
  products: [],
  items: [],
  searchTermData: '',
};


export const getSearchData = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SEARCH_DATA:
      return {
        ...state,
        searchTermData : payload,
      }
  
    default:
      return state;
  }
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export const addToCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: payload,
      };
    case REMOVE_FROM_CART:
      return {
        items: payload,
      };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return { ...state, ...payload };
    case REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

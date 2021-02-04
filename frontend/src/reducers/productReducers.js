import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

const initialState = {
  products: [],
  loading: false,
  error: false,
};

export const productListReducer = (state = initialState, action) => {
  if (action.type === PRODUCT_LIST_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === PRODUCT_LIST_SUCCESS) {
    return {
      ...state,
      loading: false,
      products: action.payload,
    };
  }
  if (action.type === PRODUCT_LIST_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

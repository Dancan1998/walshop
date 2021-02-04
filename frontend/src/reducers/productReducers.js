import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

const initialState = {
  products: [],
  loading: false,
  error: false,
  product: {
    reviews: [],
  },
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

export const productDetailsReducer = (state = initialState, action) => {
  if (action.type === PRODUCT_DETAILS_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === PRODUCT_DETAILS_SUCCESS) {
    return {
      ...state,
      loading: false,
      product: action.payload,
    };
  }
  if (action.type === PRODUCT_DETAILS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

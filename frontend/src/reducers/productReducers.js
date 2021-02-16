import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
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
      products: action.payload.products,
      pages: action.payload.pages,
      page: action.payload.page,
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

export const productDeleteReducer = (state = {}, action) => {
  if (action.type === PRODUCT_DELETE_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === PRODUCT_DELETE_SUCCESS) {
    return {
      ...state,
      loading: false,
      success: true,
    };
  }
  if (action.type === PRODUCT_DELETE_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

export const productCreateReducer = (state = {}, action) => {
  if (action.type === PRODUCT_CREATE_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === PRODUCT_CREATE_SUCCESS) {
    return {
      ...state,
      loading: false,
      success: true,
      product: action.payload,
    };
  }
  if (action.type === PRODUCT_CREATE_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  if (action.type === PRODUCT_CREATE_RESET) {
    return {};
  }
  return state;
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  if (action.type === PRODUCT_UPDATE_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === PRODUCT_UPDATE_SUCCESS) {
    return {
      ...state,
      loading: false,
      success: true,
      product: action.payload,
    };
  }
  if (action.type === PRODUCT_UPDATE_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  if (action.type === PRODUCT_UPDATE_RESET) {
    return { product: {} };
  }
  return state;
};

export const productReviewCreateReducer = (state = {}, action) => {
  if (action.type === PRODUCT_CREATE_REVIEW_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === PRODUCT_CREATE_REVIEW_SUCCESS) {
    return {
      ...state,
      loading: false,
      success: true,
    };
  }
  if (action.type === PRODUCT_CREATE_REVIEW_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  if (action.type === PRODUCT_CREATE_REVIEW_RESET) {
    return {};
  }
  return state;
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  if (action.type === PRODUCT_TOP_REQUEST) {
    return {
      ...state,
      loading: true,
      products: [],
    };
  }
  if (action.type === PRODUCT_TOP_SUCCESS) {
    return {
      ...state,
      loading: false,
      products: action.payload,
    };
  }
  if (action.type === PRODUCT_TOP_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

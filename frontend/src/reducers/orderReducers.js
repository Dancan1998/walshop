import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
  if (action.type === ORDER_CREATE_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === ORDER_CREATE_SUCCESS) {
    return {
      ...state,
      loading: false,
      success: true,
      order: action.payload,
    };
  }
  if (action.type === ORDER_CREATE_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

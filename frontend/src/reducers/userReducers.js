import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";
const initialState = {
  loading: false,
  userInfo: {},
  error: false,
};

export const userLoginReducer = (state = initialState, action) => {
  if (action.type === USER_LOGIN_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === USER_LOGIN_SUCCESS) {
    return {
      ...state,
      loading: false,
      userInfo: action.payload,
    };
  }
  if (action.type === USER_LOGIN_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  if (action.type === USER_LOGOUT) {
    return {};
  }
  return state;
};

export const userRegisterReducer = (state = initialState, action) => {
  if (action.type === USER_REGISTER_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === USER_REGISTER_SUCCESS) {
    return {
      ...state,
      loading: false,
      userInfo: action.payload,
    };
  }
  if (action.type === USER_REGISTER_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
};

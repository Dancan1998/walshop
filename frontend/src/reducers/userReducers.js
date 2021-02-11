import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from "../constants/userConstants";

const initialState = {
  loading: false,
  userInfo: {},
  error: false,
  user: {},
  success: false,
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

export const userDetailsReducer = (state = initialState, action) => {
  if (action.type === USER_DETAILS_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === USER_DETAILS_SUCCESS) {
    return {
      ...state,
      loading: false,
      user: action.payload,
    };
  }
  if (action.type === USER_DETAILS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  if (action.type === USER_DETAILS_RESET) {
    return {
      ...state,
      user: {},
    };
  }

  return state;
};

export const userUpdateProfileReducer = (state = initialState, action) => {
  if (action.type === USER_UPDATE_PROFILE_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === USER_UPDATE_PROFILE_SUCCESS) {
    return {
      ...state,
      loading: false,
      userInfo: action.payload,
      success: true,
    };
  }
  if (action.type === USER_UPDATE_PROFILE_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
};

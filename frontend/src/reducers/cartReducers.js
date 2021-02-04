import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  if (action.type === CART_ADD_ITEM) {
    const item = action.payload;
    const existItem = state.cartItems.find((x) => x.product === item.product);

    if (existItem) {
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        ),
      };
    } else {
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };
    }
  }
  if (action.type === CART_REMOVE_ITEM) {
    return {
      ...state,
      cartItems: state.cartItems.filter((x) => x.product !== action.payload),
    };
  }
  return state;
};

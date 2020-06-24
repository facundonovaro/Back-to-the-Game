import { GET_ALL_CART } from "../constants";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CART:
      return { ...state, cart: action.cart };
    default:
      return state;
  }
};

export default cartReducer;

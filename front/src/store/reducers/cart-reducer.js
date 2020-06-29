import { GET_ALL_CART, ADD_TO_CART } from "../constants";

const initialState = {
  cart: [],
  list: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CART:
      return { ...state, cart: action.cart };
    case ADD_TO_CART:
      return { ...state, list: action.products };

    default:
      return state;
  }
};

export default cartReducer;

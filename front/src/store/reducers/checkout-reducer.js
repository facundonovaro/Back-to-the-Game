import { GET_LAST_ORDERS, GET_ALL_ORDERS } from "../constants";

const initialState = {
  orders: [],
  allOrders: [],
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAST_ORDERS:
      return { ...state, orders: action.orders };
    case GET_ALL_ORDERS:
      return { ...state, allOrders: action.orders };
    default:
      return state;
  }
};

export default checkoutReducer;

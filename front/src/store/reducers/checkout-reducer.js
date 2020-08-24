import {
  GET_LAST_ORDERS,
  GET_ALL_ORDERS,
  GET_SALES_HISTORY,
  GET_PRODUCTS_SALES,
} from "../constants";

const initialState = {
  orders: [],
  allOrders: [],
  salesHistory: [],
  productsSales: [],
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAST_ORDERS:
      return { ...state, orders: action.orders };
    case GET_ALL_ORDERS:
      return { ...state, allOrders: action.orders };
    case GET_SALES_HISTORY:
      return { ...state, salesHistory: action.sales };
    case GET_PRODUCTS_SALES:
      return { ...state, productsSales: action.productsSales };

    default:
      return state;
  }
};

export default checkoutReducer;

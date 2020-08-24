import axios from "axios";
import {
  GET_LAST_ORDERS,
  GET_ALL_ORDERS,
  GET_SALES_HISTORY,
  GET_PRODUCTS_SALES,
} from "../constants";
import { allCart, cartList } from "../actions/cart";

const lastOrders = (orders) => ({
  type: GET_LAST_ORDERS,
  orders,
});

const allOrders = (orders) => ({
  type: GET_ALL_ORDERS,
  orders,
});

const salesHistory = (sales) => ({
  type: GET_SALES_HISTORY,
  sales,
});

const productsSales = (productsSales) => ({
  type: GET_PRODUCTS_SALES,
  productsSales,
});

export const updateOrderAdress = (order) => () =>
  axios.patch("/api/checkout/adress", order);

export const updateOrderStatus = (order) => (dispatch) =>
  axios
    .patch("/api/checkout/status", order)
    .then(() => {
      dispatch(allCart([]));
    })
    .then(() => {
      dispatch(cartList([]));
    });

export const updateStock = (cart) => () =>
  axios.patch("/api/checkout/stock", cart);

export const fetchLastOrders = () => (dispatch) =>
  axios
    .get("/api/checkout/lastorders")
    .then((res) => res.data)
    .then((orders) => dispatch(lastOrders(orders)));

export const fetchAllOrders = () => (dispatch) =>
  axios
    .get("/api/checkout/allorders")
    .then((orders) => dispatch(allOrders(orders.data)));

export const fetchSalesHistory = (array) => (dispatch) =>
  axios
    .get(
      `/api/checkout/saleshistory/${array[0]
        .toString()
        .slice(4, 15)}/${array[1].toString().slice(4, 15)}`
    )
    .then((sales) => {
      return dispatch(salesHistory(sales.data));
    });

export const fetchProductsSales = (array) => (dispatch) =>
  axios
    .get(
      `/api/checkout/productsales/${array[0]
        .toString()
        .slice(4, 15)}/${array[1].toString().slice(4, 15)}`
    )
    .then((products) => {
      return dispatch(productsSales(products.data));
    });

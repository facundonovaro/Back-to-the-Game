import { GET_ALL_CART, ADD_TO_CART } from "../constants";
import axios from "axios";

const allCart = (cart) => {
  return {
    type: GET_ALL_CART,
    cart,
  };
};

const cartList = (products) => {
  return {
    type: ADD_TO_CART,
    products,
  };
};

export const addToCart = (product) => (dispatch) =>
  axios.post("/api/cart", product).then((res) => {
    let productList = [];
    res.data.map((order) => {
      productList.push(order.productId);
    });
    dispatch(cartList(productList));
  });

export const fetchCart = () => (dispatch) =>
  axios.get(`/api/cart`).then((res) => {
    let productList = [];
    res.data.map((order) => {
      productList.push(order.productId);
    });
    dispatch(cartList(productList));
    dispatch(allCart(res.data));
  });

export const deleteCart = (productId) => (dispatch) =>
  axios.delete(`/api/cart/${productId}`).then((res) => {
    let productList = [];
    res.data.map((order) => {
      productList.push(order.productId);
    });
    dispatch(cartList(productList));
    dispatch(allCart(res.data));
  });

export const updateCart = (order) => (dispatch) =>
  axios.patch("/api/cart", order).then((cart) => dispatch(allCart(cart.data)));

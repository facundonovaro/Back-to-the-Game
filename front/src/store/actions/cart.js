import { GET_ALL_CART } from "../constants";
import axios from "axios";

const allCart = (cart) => {
  return {
    type: GET_ALL_CART,
    cart,
  };
};

export const addToCart = (productAndUserId) => () =>
  axios.post("/api/cart", productAndUserId);

export const fetchCart = (user) => (dispatch) =>
  axios.get(`/api/cart/${user.id}`).then((res) => {
    dispatch(allCart(res.data));
  });

export const deleteCart = (orderId, userId) => (dispatch) =>
  axios
    .delete(`/api/cart/${orderId}/${userId}`)
    .then((cart) => dispatch(allCart(cart.data)));

export const updateCart = (order) => (dispatch) =>
  axios.patch("/api/cart", order).then((cart) => dispatch(allCart(cart.data)));

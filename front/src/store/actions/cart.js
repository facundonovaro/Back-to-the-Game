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

export const addLocalStorage = (products) => (dispatch) =>
dispatch(allCart(products))

export const assignCart = (carrito) => (dispatch) => 
  axios.post('/api/cart/local', carrito)
  .then(orders => dispatch(allCart(orders.data)))

export const addToCart = (product) => (dispatch) =>
  axios.post("/api/cart", product).then((res) => {
    let productList = [];
    res.data.map((order) => {
      productList.push(order.product);
    });
    dispatch(cartList(productList));
  });

export const fetchCart = () => (dispatch) =>
  axios.get(`/api/cart`).then((res) => {
    console.log('RES DATA ', res.data)
    let productList = [];
    let productCart = []
    res.data.map((order) => {
      let value = order.product
      value = {...value, quantity: order.quantity, orderId: order.id}
      productCart.push(value)
      productList.push(order.productId);
    });
    dispatch(cartList(productList));
    dispatch(allCart(productCart));
  });

export const deleteCart = (orderId) => (dispatch) =>
  axios.delete(`/api/cart/${orderId}`)
  .then((res) => {
    let productList = [];
    let productCart = [];
    res.data.map((order) => {
      let value = order.product
      value = {...value, quantity: order.quantity, orderId: order.id}
      productCart.push(value)
      productList.push(order.productId);
    });
    dispatch(cartList(productList));
    dispatch(allCart(productCart));
  });

export const updateCart = (order) => (dispatch) =>
  axios.patch("/api/cart", order)
  .then((cart) => {
    let productList = [];
    let productCart = [];
    cart.data.map((order) => {
      let value = order.product
      value = {...value, quantity: order.quantity, orderId: order.id}
      productCart.push(value)
      productList.push(order.productId);
    });
    console.log('PRODUCTCART ', productCart)
    dispatch(cartList(productList));
    dispatch(allCart(productCart))
  })

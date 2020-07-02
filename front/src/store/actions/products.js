import axios from "axios";
import { GET_ALL_PRODUCTS } from "../constants";

export const allProducts = (products) => ({
  type: GET_ALL_PRODUCTS,
  products,
});

export const fetchProducts = () => (dispatch) =>
  axios
    .get("/api/products")
    .then((res) => res.data)
    .then((products) => dispatch(allProducts(products)));

export const newProduct = (product) => (dispatch) =>
  axios
    .post("/api/products", product)
    .then((products) => dispatch(allProducts(products.data)));

export const deleteProduct = (id) => (dispatch) =>
  axios.delete(`/api/products/${id}`).then((res) => {
    dispatch(allProducts(res.data));
  });

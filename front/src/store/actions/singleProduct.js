import { GET_PRODUCT } from "../constants";
import axios from "axios";
import { allProducts } from "./products";

const getProduct = (product) => {
  return {
    type: GET_PRODUCT,
    product,
  };
};

export const fetchProduct = (id) => (dispatch) =>
  axios
    .get(`/api/products/${id}`)
    .then((product) => dispatch(getProduct(product.data)));

export const editProduct = (id, product) => (dispatch) =>
axios.patch(`/api/products/${id}`, product).then((products) => {
  dispatch(allProducts(products.data));
});

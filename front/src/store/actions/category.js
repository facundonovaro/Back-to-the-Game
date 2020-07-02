import axios from "axios";
import { SET_CATEGORY, GET_CATEGORIES, ADD_CATEGORY } from "../constants";

const cartProds = (products) => {
  return {
    type: SET_CATEGORY,
    products,
  };
};

const setCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    categories,
  };
};

export const setCategory = (category) => (dispatch) => {
  axios.get(`/api/category/${category}`).then((category) => {
    dispatch(cartProds(category.data[0].products));
  });
};

export const addCategories = (category) => (dispatch) => {
  console.log("Llega a entrar en el action");
  return axios.post("/api/category", category).then((categories) => {
    return dispatch(setCategories(categories.data));
  });
};

export const getCategories = () => (dispatch) =>
  axios
    .get("/api/category")
    .then((categories) => dispatch(setCategories(categories.data)));

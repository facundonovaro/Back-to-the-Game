import axios from "axios";
import { SHOW_ALL_REVIEWS, ADD_REVIEW } from "../constants";

const allReviews = (reviews) => ({
  type: SHOW_ALL_REVIEWS,
  reviews,
});
const addReviews = (review) => ({
  type: ADD_REVIEW,
  review,
});

export const searchReviews = (productId) => (dispatch) =>
  axios
    .get(`/api/reviews/${productId}`)
    .then((res) => res.data)
    .then((reviews) => dispatch(allReviews(reviews)));

export const addReview = (review) => (dispatch) =>
  axios.post(`/api/reviews`, review).then((res) => {
    dispatch(allReviews(res.data));
  });

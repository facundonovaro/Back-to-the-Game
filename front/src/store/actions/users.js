import axios from "axios";
import {
  LOGIN_USER,
  LOGOUT_USER,
  ERROR_MESSAGE,
  GET_USERS,
} from "../constants";
import { allCart } from './cart';

const loginUser = (user) => ({
  type: LOGIN_USER,
  user,
});

const logoutUser = (user) => ({
  type: LOGOUT_USER,
  user,
});

const errorMessage = (message) => ({
  type: ERROR_MESSAGE,
  message,
});

const getUsers = () => ({
  type: GET_USERS,
  users,
});

export const userLogin = function (user) {
  return function (dispatch) {
    return axios
      .post("/api/users/login", user)
      .then((res) => {
        return dispatch(loginUser(res.data));
      })
      .catch((err) =>
        dispatch(errorMessage("El usuario o contraseña no existe"))
      );
  };
};

export const userLogout = function (user) {
  return function (dispatch) {
    axios.post("/api/users/logout", user).then(() => {
      dispatch(logoutUser({}));
      dispatch(allCart([]))
    });
  };
};

export const registerUser = function (user) {
  return function (dispatch) {
    return axios
      .post("/api/users/register", user)
      .catch((err) =>
        dispatch(errorMessage("Ese email ya esta en uso por un usuario"))
      );
  };
};

export const cookieLogger = function () {
  return function (dispatch) {
    axios.get("/api/users/cookieuser").then((res) => {
      dispatch(loginUser(res.data));
    });
  };
};

export const fetchUsers = function () {
  return function (dispatch) {
    axios.get("/api/users/admin").then((res) => dispatch(getUsers(res.data)));
  };
};

import axios from "axios";
import { LOGIN_USER, LOGOUT_USER, ERROR_MESSAGE } from "../constants";


const loginUser = (user) => ({
    type: LOGIN_USER,
    user,
});

const logoutUser = (user) => ({
    type: LOGOUT_USER,
    user,
});

const errorMessage = (message) =>({
    type: ERROR_MESSAGE,
    message,
})

export const userLogin = function (user) {
    return function (dispatch) {
        return axios.post('/api/users/login', user)
        .then((res)=>{
            return dispatch(loginUser(res.data))
        })
        .catch(err=>dispatch(errorMessage('El usuario o contraseña no existe')))
            
    }
    };

export const userLogout = function (user) {
    return function (dispatch) {
        axios
            .post("/api/users/logout", user)
            .then(() => {
                dispatch(logoutUser({}));
            });
    };
};

export const registerUser = function (user) {
    return function (dispatch) {
        return axios
          .post("/api/users/register", user)
          .catch((err) => dispatch(errorMessage("Ese email ya esta en uso por un usuario")));
        
    }
};

export const cookieLogger = function () {
  return function (dispatch) {
    axios.get("/api/users/cookieuser")
    .then(res=>{dispatch(loginUser(res.data))})
  };
};

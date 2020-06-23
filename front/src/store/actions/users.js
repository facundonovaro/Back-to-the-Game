import axios from "axios";
import { LOGIN_USER , LOGOUT_USER } from "../constants";


const loginUser = (user) => ({
    type: LOGIN_USER,
    user,
});

const logOutUser = (user) => ({
    type: LOGOUT_USER,
    user,
});

export const userLogin  = function (user) {
    return function (dispatch) {
        axios
        .post('/api/users/login', user)
        .then((res)=>{
            dispatch(loginUser(res.data))
        })
            
    };
};

export const userLogin = function (user) {
    return function (dispatch) {
        axios
            .post('/api/users/login', user)
            .then((res) => {
                dispatch(loginUser(res.data))
            })

    };
};
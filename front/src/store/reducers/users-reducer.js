import {
  LOGIN_USER,
  LOGOUT_USER,
  ERROR_MESSAGE,
  GET_USERS,
  GET_USER,
} from "../constants";

const initialState = {
  user: {},
  users: [],
  userFound: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.user,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: action.user,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case GET_USER:
      return {
        ...state,
        userFound: action.user,
      };
    default:
      return state;
  }
};

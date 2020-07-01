import {
  LOGIN_USER,
  LOGOUT_USER,
  ERROR_MESSAGE,
  GET_USERS,
} from "../constants";

const initialState = {
  user: {},
  users: [],
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
    default:
      return state;
  }
};

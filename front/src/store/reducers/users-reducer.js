import { LOGIN_USER, LOGOUT_USER, ERROR_MESSAGE} from "../constants";

const initialState = {
    user: {},
    
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state, user: action.user
            };
        case LOGOUT_USER:
            return {
                ...state, user: action.user
            };
        case ERROR_MESSAGE:
            return{
                ...state, message:action.message
            }    
        default:
            return state;
    }
};
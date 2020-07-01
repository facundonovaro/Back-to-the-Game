import { GET_LAST_ORDERS } from '../constants';

const initialState = {
    orders: []
}

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LAST_ORDERS:
            return { ...state, orders: action.orders }
        default:
            return state;
    }
}

export default checkoutReducer;
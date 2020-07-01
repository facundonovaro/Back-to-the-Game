import { SHOW_ALL_REVIEWS, ADD_REVIEW } from "../constants"

const initialState = {
    list: []
};

const reviewsReducer = (state = initialState, action) =>{
    switch(action.type){
        case SHOW_ALL_REVIEWS:
             return{...state, list: action.reviews}
        case ADD_REVIEW:
            return{...state, list: action.review}     
          default:
              return state;
 }
}

export default reviewsReducer
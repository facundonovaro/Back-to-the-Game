import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import combineReducer from "./reducers/index";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default createStore(
    combineReducer,
    composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware))
);
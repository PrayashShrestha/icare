import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase"; //including firebase reducer
// import authReducer from "./auth";
import authReducers from "./auth";

export default combineReducers({
  firebase: firebaseReducer,
  authenticate: authReducers,
});

import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase"; //including firebase reducer
import errorReducer from "./errorReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  firebase: firebaseReducer,
  error: errorReducer,
  user: userReducer,
});

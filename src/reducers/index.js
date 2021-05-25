import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import { loadingReducer } from "./loadingReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  error: errorReducer,
  user: userReducer,
  loading: loadingReducer,
});

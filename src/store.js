import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import firebase from "firebase/app";

const initialState = {}; //initial state of the store
const middleware = [thunk]; //redux-thunk as a middleware

const fbConfig = {}; // firebase config object

//react-redux-firebase config
// const rrfConfig = {
//   userProfile:''
// }

const rrfConfig = {
  userProfile: "users",
};
//Creating our store with this newely enhanced store creator
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

//react-router-firebase properties
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

export default store;

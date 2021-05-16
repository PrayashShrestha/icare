import * as types from "./actionTypes";
import { auth } from "../Firebase";

//SET_ERRORS
export const setErrors = (error) => ({
  type: types.SET_ERRORS,
  payload: error,
});

//Set the name of the user from the firebase to the UI
export const setUser = (user) => async (dispatch) =>
  dispatch({
    type: types.SET_USER,
    payload: user,
  });
auth.onAuthStateChanged((userAuth) => {
  return;
});

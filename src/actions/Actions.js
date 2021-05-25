import * as types from "./actionTypes";
import { auth } from "../Firebase";

//SET_ERRORS
export const setErrors = (error) => ({
  type: types.SET_ERRORS,
  payload: error,
});

//Set the name of the user from the firebase to the UI
export const setUser = (user, uid, email) => async (dispatch) =>
  dispatch({
    type: types.SET_USER,
    payload: { user: user, uid: uid, email: email },
  });
auth.onAuthStateChanged((userAuth) => {
  return;
});

//set the user category before signing in
export const setUserCategory = (category) => (dispatch) => {
  dispatch({
    type: types.SET_USER_CATEGORY,
    payload: category,
  });
};

export const setLoading = (loading) => (dispatch) => {
  dispatch({
    type: types.SET_LOADING,
    payload: loading,
  });
};

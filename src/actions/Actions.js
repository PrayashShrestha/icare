import { auth } from "../Firebase";
import * as types from "./actionTypes";
import { auth } from "../Firebase";

//Signup with firebase
// export const signup = (email, password) => async (dispatch) => {
//       try {

//           auth
//           .createUserWithEmailAndPassword(email, password)
//           .then((dataBeforeEmail) => {
//             auth.onAuthStateChanged(function (user) {
//               user.sendEmailVerification();
//             });
//           });
//       }
//   };
// const count = 1;
// export const signup = (email,password) => dispatch => {
//   auth.createUserWithEmailAndPassword(email,password)
//   return {
//     type: "SIGN_UP",
//     payload: count,
//   };
// };

//SIGNIN
export const signinUser = (user_name) => ({
  type: types.SIGN_IN,
  user_name,
});

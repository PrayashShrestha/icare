import { SIGNUP_SUCCESS, SIGNUP_ERROR } from "./actionTypes";
import firebase from "../../services/firebase";

//Signup with firebase
export const signup = (email, password) => async (dispatch) => {
  //   try {
  //     firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then((dataBeforeEmail) => {
  //         firebase.auth().onAuthStateChanged(function (user) {
  //           uer.sendEmailVerification();
  //         });
  //       });
  //   }
};

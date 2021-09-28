import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import firebase from "firebase";
import { useHistory } from "react-router";
import "./Forms.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { auth, firestore } from "../../Firebase";
import { setErrors, setUser } from "../../actions/Actions";
import { isEmpty } from "react-redux-firebase";

const Signin = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const history = useHistory();

  const dispatch = useDispatch();
  const err = useSelector((state) => state.error.error);

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(emailRef.current.value && passwordRef.current.value)) {
      return dispatch(setErrors("Fields are empty"));
    }
    try {
      await auth
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((result) => {
          console.log(result);
          history.push("/");
        })
        .catch((err) => {
          if (err.code === "auth/wrong-password") {
            return dispatch(setErrors("You entered wrong password"));
          }
          dispatch(setErrors(err.code));
        });
    } catch {
      dispatch(setErrors("Login failed please try again"));
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__head">Login Form</div>
      {err && <div className="form__error">{err}</div>}
      <div className="form__fields">
        <div className="form__field">
          <label>Email:</label>
          <input
            type="text"
            id="email"
            placeholder="example@gmail.com"
            ref={emailRef}
          ></input>
        </div>
        <div className="form__field">
          <label>Password:</label>
          <input type="password" id="password" ref={passwordRef}></input>
        </div>
        <div className="form__btn">
          <button>Login</button>
        </div>
        <div className="form__small">
          Not a member yet? <a href="/signup">Signup</a>
        </div>

        {/* Google Signin */}
        <div className="form__btn">
          <button
            onclick={(e) => {
              e.preventDefault();
              auth
                .signInWithPopup(provider)
                .then((result) => {
                  auth.onAuthStateChanged(() => {
                    dispatch(setUser(result.user.displayName));
                  });
                  history.push("/");
                })
                .catch((err) => {
                  if (!err.a) {
                    dispatch(setErrors("Login failed Please try again"));
                  }
                });
            }}
          >
            Signin with Google
          </button>
        </div>
      </div>
    </form>
  );
};

export default Signin;

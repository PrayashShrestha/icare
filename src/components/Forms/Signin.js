import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import firebase from "firebase";
import { useHistory } from "react-router";
import "./Forms.css";
import { connect } from "react-redux";
import { auth } from "../../Firebase";

const Signin = ({ credentials: { authenticate } }) => {
  const [passVisiable, setPassVisiable] = useState();
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();

  const provider = new firebase.auth.GoogleAuthProvider();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setCurrentUser(userAuth);
    });
  }, []);
  console.log(currentUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(emailRef.current.value && passwordRef.current.value)) {
      return setError("Fields are Empty");
    }
    try {
      auth
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then(() => {
          history.push("/");
        })
        .catch((err) => {
          setError("hello");
          if (err.code === "auth/wrong-password") {
            return setError("Please verify your input");
          }
          setError("User not found");
        });
    } catch {
      setError("Login failed please try again");
    }
    setError("");
  };
  console.log(auth);

  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="login__head">Login Form</div>
      {error && <div className="login__error">{error}</div>}
      <div className="login__fields">
        <div className="login__field">
          <label>Email:</label>
          <input
            type="text"
            id="email"
            placeholder="example@gmail.com"
            ref={emailRef}
          ></input>
        </div>
        <div className="login__field">
          <label>Password:</label>
          <input type="password" id="password" ref={passwordRef}></input>
        </div>
        <div className="login__btn">
          <Button>Login</Button>
        </div>
        <div className="login__small">
          Not a member yet? <a href="/signup">Signup</a>
        </div>
        <div className="login__btn">
          <Button
            onclick={() => {
              auth
                .signInWithPopup(provider)
                .then(() => {
                  history.push("/");
                })
                .catch((err) => {
                  if (!err.a) {
                    setError("Login failed Please try again");
                  }
                });
            }}
          >
            Signin with Google
          </Button>
        </div>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => ({
  credentials: state.firebase,
});

export default connect(mapStateToProps)(Signin);

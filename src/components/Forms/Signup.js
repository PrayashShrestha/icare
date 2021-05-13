import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../Firebase";
import Button from "../Button/Button";
import "./Forms.css";

const Signup = ({ signup }) => {
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, conformPassword } = e.target.elements;

    if (password.value !== conformPassword.value) {
      return setError("Passwords didnot match");
    }

    try {
      auth.createUserWithEmailAndPassword(email.value, password.value);
      history.push("/login");
      alert("Success");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="login__head">Signup Form</div>
      {error && <div className="login__error">{error}</div>}
      <div className="login__fields">
        <div className="login__field">
          <label>Name:</label>
          <input type="text" name="name" id="name"></input>
        </div>
        <div className="login__field">
          <label>Email:</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            name="email"
            id="email"
          ></input>
        </div>

        <div className="login__field">
          <label>Password:</label>
          <input type="text" name="password" id="password"></input>
        </div>
        <div className="login__field">
          <label>Confirm Password:</label>
          <input
            type="text"
            name="conformPassword"
            id="conformPassword"
          ></input>
        </div>
        <div className="login__btn">
          <Button type="submit">Signup</Button>
        </div>
        <div className="login__small">
          Already a member? <a href="/login">Login</a>
        </div>
      </div>
    </form>
  );
};

export default Signup;

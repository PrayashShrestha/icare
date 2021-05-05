import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebaseConfig from "../../Firebase";
import Button from "../Button/Button";

const Signup = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    try {
      firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      setCurrentUser(true);
      alert("Success");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="login__head">Signup Form</div>
      <div className="login__fields">
        <div className="login__field">
          <label>Email:</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            name="email"
          ></input>
        </div>
        <div className="login__field">
          <label>Phone:</label>
          <input type="number" name="phone"></input>
        </div>
        <div className="login__field">
          <label>Password:</label>
          <input type="text" name="password"></input>
        </div>
        <div className="login__field">
          <label>Confirm Password:</label>
          <input type="text" name="conformPassword"></input>
        </div>
        <div className="login__btn">
          <Button type="submit">Signup</Button>
        </div>
        <div className="login__small">
          Already a member? <Link to="/login">login</Link>{" "}
        </div>
      </div>
    </form>
  );
};

export default Signup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Login = () => {
  const [passVisiable, setPassVisiable] = useState();
  return (
    <div className="login">
      <div className="login__head">Login Form</div>
      <div className="login__fields">
        <div className="login__field">
          <label>Email:</label>
          <input type="text" placeholder="example@gmail.com"></input>
        </div>
        <div className="login__field">
          <label>Password:</label>
          <input type="password"></input>
        </div>
        <div className="login__btn">
          <Button>Login</Button>
        </div>
        <div className="login__small">
          Not a member yet?<Link to="/signup">signup</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;

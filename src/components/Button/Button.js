import React from "react";
import "./Button.css";

const Button = ({ children, onclick, type }) => {
  return (
    <div className="btn__div">
      <button
        className="btns"
        onClick={onclick ? `${onclick}` : "null"}
        type={type ? `${type}` : "null"}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

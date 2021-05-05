import React from "react";
import "./Input.css";
const Input = ({ placeholder }) => {
  return (
    <>
      <input className="inp" type="text" placeholder={placeholder} />
    </>
  );
};

export default Input;

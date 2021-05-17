import React from "react";
import "./Input.css";
const Input = ({ placeholder, value, id, updateValue }) => {
  return (
    <>
      <input
        className="inp"
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={(e) => updateValue(e.target.value, id)}
      />
    </>
  );
};

export default Input;

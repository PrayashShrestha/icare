import React from "react";
import "./Fields.css";
import Input from "../Input/Input";

const Form = ({ field }) => {
  const { title, range } = field;
  return (
    <form className="form">
      {title}:
      <Input placeholder={range} />
    </form>
  );
};

export default Form;

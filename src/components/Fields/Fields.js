import React from "react";
import "./Fields.css";
import Input from "../Input/Input";

const Form = ({ field, id, value, updateValue }) => {
  const { title, range } = field;
  return (
    <form className="form">
      {title}:
      <Input
        placeholder={range}
        value={value}
        updateValue={updateValue}
        id={id}
      />
    </form>
  );
};

export default Form;

import React from "react";
import "./Fields.css";
import Input from "../Input/Input";

const Form = ({ field, value, id, updateValue }) => {
  const { title, range } = field;
  return (
    <div className="form">
      <span>{title}:</span>
      <Input
        placeholder={range}
        value={value}
        updateValue={updateValue}
        id={id}
      />
    </div>
  );
};

export default Form;

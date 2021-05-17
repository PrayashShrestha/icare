import React, { useState } from "react";
import "./Predict.css";
import Fields from "../components/Fields/Fields";

import Button from "../components/Button/Button";

const Predict = () => {
  const fields = [
    { title: "Clump Thickness", range: "0-10" },
    { title: "Uniformity of Cell Size", range: "0-10" },
    { title: "Uniformity of Cell Shape", range: "0-10" },
    { title: "Marginal Adhesion", range: "0-10" },
    { title: "Single Epithelial Cell Size", range: "0-10" },
    { title: "Bare Nuclei", range: "0-10" },
    { title: "Normal Nucleoli", range: "0-10" },
    { title: "Mitoses", range: "0-10" },
  ];

  const [result, setResult] = useState("Set the values and click predict.");

  const [values, setValues] = useState([]);

  //form an array of the input values with the key values in the map function
  const updateValue = (val, index) => {
    const temp = [...values];
    temp[index] = val;
    setValues(temp);
  };

  //function for the reset all the input values
  const handleReset = (e) => {
    e.preventDefault();
    setValues([]);
    setResult("Set the values and click predict.");
  };

  //predict function
  const handlePredict = (e) => {
    e.preventDefault();

    if (values.includes(undefined) || values.length < fields.length) {
      return alert("Please enter all the correct values in the inputs.");
    }
    setResult("Predicting system is still under work");
  };
  return (
    <div className="predict">
      <div className="predict__mssg">
        Please fill the inputs with the <br />
        appropriate data provided by the doctor.
      </div>

      {/* <Prompt /> */}
      <form className="predict__form">
        {fields.map((field, id) => (
          <Fields
            field={field}
            key={id}
            id={id}
            value={values[id] ? values[id] : ""}
            updateValue={updateValue}
          />
        ))}
        <div className="predict__result">
          <h3>Result:</h3> {result}
        </div>
        <div className="predict__btns">
          <Button onclick={handleReset}>Reset All</Button>
          <Button onclick={handlePredict}>Predict</Button>
        </div>
      </form>
    </div>
  );
};

export default Predict;

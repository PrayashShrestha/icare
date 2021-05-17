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

  const [result, setResult] = useState("result displayed here");

  const [values, setValues] = useState([]);

  const updateValue = (val, index) => {
    const temp = [...values];
    temp[index] = val;
    setValues(temp);
  };

  const handleReset = () => {
    setValues([]);
  };

  return (
    <div className="predict">
      <div className="predict__mssg">
        Please fill the inputs with the <br />
        appropriate data provided by the doctor.
      </div>

      {/* <Prompt /> */}
      <div className="predict__form">
        {fields.map((field, id) => (
          <Fields
            field={field}
            key={id}
            id={id}
            value={values[id] ? values[id] : ""}
            updateValue={updateValue}
          />
        ))}
        <div>{result}</div>
        <div className="predict__btns">
          <Button onclick={handleReset}>Reset All</Button>
          <Button>Predict</Button>
        </div>
      </div>
    </div>
  );
};

export default Predict;

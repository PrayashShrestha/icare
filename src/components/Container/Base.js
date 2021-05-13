import React from "react";
import "./Base.css";
import Button from "../Button/Button";

const Base = () => {
  return (
    <div className="base">
      <div className="base__quote">
        <span>
          I-care <img src="assets/images/icare.PNG" alt="" />{" "}
        </span>
        <span>Aims to bring convenience for Breast Cancer Prediction</span>
      </div>
      <div className="base__steps">
        <a href="#steps">
          <Button>How to use ?</Button>
        </a>
      </div>
      <div className="base__img">
        <img src="assets/images/diagonis.svg" alt="" />
      </div>
    </div>
  );
};

export default Base;

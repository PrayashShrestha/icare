import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Steps.css";

const Steps = ({ steps }) => {
  return (
    <div className="steps" id="steps">
      <div className="steps__col1">
        <h1>Check out the Steps:</h1>
        <ul className="steps__list">
          {steps.map((step, index) => (
            <li key={index}>
              <span>Step{index}:</span> <p>{step}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="steps__col2">
        <div className="col2__div1">
          <i class="far fa-hand-point-left"></i>
          {` Checked out steps!`}
        </div>
        <div className="col2__div2">{`Click on Predict`}</div>
        <div className="col2__div3">
          <Link to="/predict">
            <Button>Predict</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Steps;

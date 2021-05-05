import React from "react";
import "./Forms.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Forms = () => {
  return (
    <div className="forms">
      <h1>Select your Category</h1>
      <div className="forms__btns">
        <div>
          <Link to="/login">
            <Button>Consultant</Button>
          </Link>
        </div>
        <div>
          <Link to="/login">
            <Button>Patient</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forms;

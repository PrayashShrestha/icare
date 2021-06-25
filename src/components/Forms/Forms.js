import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Button from "../Button/Button";
import "./Forms.css";

const Forms = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userSignIn = () => {
    history.push("/signin");
  };
  const adminSignIn = () => {
    history.push("/admin-signin");
  };
  return (
    <div className="forms">
      <div className="forms__container">
        <div className="forms__head">Select your option:</div>
        <div className="forms__btns">
          <Button
            onclick={() => {
              adminSignIn();
            }}
          >
            Admin
          </Button>
          <Button
            onclick={() => {
              userSignIn();
            }}
          >
            Patient
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Forms;

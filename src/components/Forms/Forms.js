import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setUserCategory } from "../../actions/Actions";
import Button from "../Button/Button";
import "./Forms.css";

const Forms = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const pushPage = () => {
    history.push("/signin");
  };
  return (
    <div className="forms">
      <div className="forms__container">
        <div className="forms__head">Select your option:</div>
        <div className="forms__btns">
          <Button
            onclick={() => {
              pushPage();
              dispatch(setUserCategory("doctor"));
            }}
          >
            Doctor
          </Button>
          <Button
            onclick={() => {
              pushPage();
              dispatch(setUserCategory("patient"));
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

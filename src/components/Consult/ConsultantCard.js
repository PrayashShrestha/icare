import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import Button from "../Button/Button";
import "./Consult.css";

const ConsultantCard = ({ consultats }) => {
  const { name, email, photo } = consultats;
  const [details, setDetails] = useState(true);
  const [model, setModelState] = useState(false)

  const setModel = () => {
    setModelState(true)
  }
  const closeModel = () => {
    setModelState(false)
  }
  return (
    <div className="consult__card">
      <Modal open={model} onClose={closeModel}>
        <div>Hello</div>
      </Modal>
      <div className="consult__items">
        <div className="consult__img">
          <img src={photo} alt="" />
        </div>
        <div className="consult__detail">
          <div>
            <span>Name: </span> <small>{name}</small>
          </div>
          <div>
            <span>Email:</span> <small>{email}</small>
          </div>
        </div>
      </div>
      {/* Consult details when clicked View More */}
      <div className="consult__btn">
        <button onClick={setModel}>View</button>
      </div>
    </div>
  );
};

export default ConsultantCard;

import React, { useState } from "react";
import Button from "../Button/Button";
import "./Consult.css";

const ConsultantCard = ({ consultats }) => {
  const { name, email, photo } = consultats;
  const [details, setDetails] = useState(true);
  return (
    <div className="consult__card">
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
        <Button>View</Button>
      </div>
    </div>
  );
};

export default ConsultantCard;

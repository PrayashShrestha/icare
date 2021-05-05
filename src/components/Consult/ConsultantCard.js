import React from "react";
import Button from "../Button/Button";
import "./Consult.css";

const ConsultantCard = ({ consultats }) => {
  const { name, email, dept } = consultats;
  return (
    <div className="consult__card">
      <div className="consult__items">
        <div className="consult__img">
          <img src="assets/images/person.png" alt="" />
        </div>
        <div className="consult__detail">
          <div>
            <span>Name: </span> <small> {name}</small>
          </div>
          <div>
            <span>Email:</span> <small>{email}</small>
          </div>
          <div>
            <span>Dept:</span> <small> {dept}</small>
          </div>
        </div>
      </div>
      <div className="consult__btn">
        <Button>View</Button>
      </div>
    </div>
  );
};

export default ConsultantCard;

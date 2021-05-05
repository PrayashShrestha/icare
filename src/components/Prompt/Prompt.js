import React from "react";
import Button from "../Button/Button";
import "./Prompt.css";

const Prompt = () => {
  return (
    <div className="prompt">
      <h2>
        PLEASE MAKE SURE THAT YOU HAVE READ ALL THE INSTRUCTIONS PPROPERLY
      </h2>
      <p>IF YES PRESS "PROCEED" ELSE PRESS "READ INSTRUCTIONS" </p>
      <div className="prompt__btns">
        <Button>Read Instructions</Button>
        <Button>Proceed</Button>
      </div>
    </div>
  );
};

export default Prompt;

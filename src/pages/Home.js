import React from "react";
import Base from "../components/Container/Base";
import Steps from "../components/Container/Steps";

const Home = () => {
  const steps = [
    "Please make sure that you have collected your reports.",
    "Click on 'Start Predict' button.",
    "Input all the values in the input field as per the mentioned ranges.",
    "Do Conform your data once again. ",
    "Click on 'Predict' button. ",
  ];
  return (
    <div>
      <Base />
      <Steps steps={steps} />
    </div>
  );
};

export default Home;

import React from "react";
import ConsultantCard from "./ConsultantCard";

const Consult = () => {
  const consultats = [
    {
      name: "Prayash Shrestha",
      email: "prayashshrestha964@gmail.com",
      dept: "Neuro, Ortho, Cardio, Pysio",
    },
    {
      name: "Prayash Shrestha",
      email: "prayashshrestha964@gmail.com",
      dept: "Neuro, Ortho, Cardio, Pysio",
    },
    {
      name: "Prayash Shrestha",
      email: "prayashshrestha964@gmail.com",
      dept: "Neuro, Ortho, Cardio, Pysio",
    },
    {
      name: "Prayash Shrestha",
      email: "prayashshrestha964@gmail.com",
      dept: "Neuro, Ortho, Cardio, Pysio",
    },
    {
      name: "Prayash Shrestha",
      email: "prayashshrestha964@gmail.com",
      dept: "Neuro, Ortho, Cardio, Pysio",
    },
  ];
  return (
    <div className="consult">
      {consultats.map((consultant, index) => (
        <ConsultantCard consultats={consultant} />
      ))}
    </div>
  );
};

export default Consult;

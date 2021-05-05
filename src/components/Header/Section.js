import React from "react";
import Carousels from "../Carousels/Carousels";
import "./Section.css";
import "../Carousels/Carousels.css";

const Section = () => {
  return (
    <section className="section">
      <div className="section__col1">
        <img src="assets/images/icare.PNG" alt="Icare Logo" />
        <br />
        <span>I CARE WE CARE</span>
      </div>
      <div className="section__col2">
        <Carousels />
      </div>
    </section>
  );
};

export default Section;

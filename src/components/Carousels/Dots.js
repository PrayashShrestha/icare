import React from "react";
import { Images } from "./CarouselImages";

const Dots = (props) => {
  return (
    <div className="all__dots">
      {Images.map((slide, index) => (
        <span
          key={index}
          className={`${
            props.activeindex === index ? "dot active-dot" : "dot"
          }`}
          onClick={(event) => props.onclick((event.target.value = index))}
        ></span>
      ))}
    </div>
  );
};

export default Dots;

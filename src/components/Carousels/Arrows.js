import React from "react";

const Arrows = (props) => {
  return (
    <div className="arows">
      <span className="prev" onClick={props.preSlide}>
        &#10094;
      </span>
      <span className="next" onClick={props.nextSlide}>
        &#10095;
      </span>
    </div>
  );
};

export default Arrows;

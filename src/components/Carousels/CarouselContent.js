import React from "react";
import { Images } from "./CarouselImages";

const CarouselContent = (props) => {
  return (
    <div className="carouselContent">
      <section>
        {Images.map((slide, index) => (
          <div
            key={index}
            className={
              index === props.activeIndex
                ? "slides slides__active"
                : "slides slides__inactive"
            }
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="carouselContent__image"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default CarouselContent;

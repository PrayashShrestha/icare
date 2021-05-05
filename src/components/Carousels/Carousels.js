import React, { useEffect, useState } from "react";
import Arrows from "./Arrows";
import CarouselContent from "./CarouselContent";
import { Images } from "./CarouselImages";
import Dots from "./Dots";

const len = Images.length - 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div className="carousel-container">
      <CarouselContent activeIndex={activeIndex} />
      <Arrows
        preSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;

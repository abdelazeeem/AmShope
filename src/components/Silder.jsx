import { Button, Slide } from "@material-ui/core";
import { ArrowLeftOutlined, ArrowRightAltOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { ApiSlides } from "../apifolder/SliderApi";
import "./Slider.css";

const Slider = () => {
  //UseState hooks
  const [slides] = useState(ApiSlides);
  const [activeSlide, setactiveSlide] = useState(0);
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setactiveSlide(0);
    } else {
      setactiveSlide(activeSlide + 1);
    }
  };
  const lastSlide = () => {
    if (activeSlide === 0) {
      setactiveSlide(slides.length - 1);
    } else {
      setactiveSlide(activeSlide - 1);
    }
  };
  //Style
  const ArrowStyle =
    "leftarrow rounded-full g-gray flex justify-center items-center shadow-sm hover:cursor-pointer";

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      {/* leftarrow dov */}
      <div className={ArrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={lastSlide} />
      </div>

      {/* slide div  */}
      {slides.map((Slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={
                "wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden  " +
                Slide.background
              }
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage">
                  <img className="h-[100%] object-cover " src={Slide.src} />
                </div>
                <div className="dos flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-[55px]">{Slide.content.h2}</h2>
                  <p className="text-[30px]"> {Slide.content.p} </p>
                  <button button className="btn">
                    Shope Now
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}

      {/* rightarrow */}
      <div className={ArrowStyle}>
        <ArrowRightAltOutlined
          style={{ fontSize: "50px" }}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Slider;

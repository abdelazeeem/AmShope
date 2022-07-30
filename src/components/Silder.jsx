import { Button } from "@material-ui/core";
import { ArrowLeftOutlined, ArrowRightAltOutlined } from "@material-ui/icons";
import React from "react";
import { ApiSlides } from "../apifolder/SliderApi";

const Slider = () => {
  const ArrowStyle =
    "leftarrow rounded-full g-gray flex justify-center items-center shadow-sm hover:cursor-pointer";

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      {/* leftarrow dov */}
      <div className={ArrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} />
      </div>

      {/* slide div  */}
      <div className="warapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden  bg-[#ffd028]">
        <div className="slide flex items-center justify-center h-[100%]">
          <div className="forImage">
            <img
              className="h-[100%] object-cover "
              src="https://st3.depositphotos.com/7713882/17906/i/600/depositphotos_179068502-stock-photo-happy-woman-showing-good-big.jpg"
            />
          </div>
          <div className="dos flex flex-col flex-1 place-items-start justify-center ml-11">
            <h2 className="text-[55px]"> Hey this is an awesome deal today </h2>
            <p className="text-[30px]"> Up to 40% off Women's clothes </p>
            <button button className="btn">
              Shope Now
            </button>
          </div>
        </div>
      </div>

      {/* rightarrow */}
      <div className={ArrowStyle}>
        <ArrowRightAltOutlined style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default Slider;

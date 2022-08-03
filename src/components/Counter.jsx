import React, { useState } from "react";

function Counter() {
  const [Count, SetCount] = useState(0);
  const HandleClick = () => {
    SetCount(Count - 1);
  };
  const handelClickDe = () => {
    SetCount(Count + 1);
  };
  return (
    <div>
      <div className="counter flex items-center text-2xl justify-start">
        Quantity
        <div className="ml-5 shadow-md flex">
          <div
            onClick={HandleClick}
            className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer"
          >
            -
          </div>
          <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
            {Count}
          </div>
          <div
            onClick={handelClickDe}
            className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer"
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;

import React, { useState } from "react";
import LightBox from "./LightBox";

export default function ProductImage() {
  const [lightBoxVisible, setLightBoxVisible] = useState(false);

  function handleLightBox() {
    setLightBoxVisible((prevState) => !prevState);
  }

  return (
    <div>
      <LightBox
        onShow={handleLightBox}
      />
      {lightBoxVisible && (
        <div className="light-box sm:flex hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 items-center justify-center" onClick={handleLightBox}>
          <div className=" w-1/4 m-auto" onClick={(e) => e.stopPropagation()}>
            <LightBox />
          </div>
        </div>
      )}
    </div>
  );
}

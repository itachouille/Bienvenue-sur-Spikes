import React from "react";
import { GridPattern } from "../../public/grid-pattern";

const GridBackground = () => {
  return (
    <>
      <GridPattern className="absolute top-0 w-full h-auto rotate-180 -z-50" />
      <div className="absolute top-0 w-[90%] h-32 bg-[#7059F2]/10 blur-3xl" />

      <div className="absolute bottom-0 w-[90%] h-32 bg-[#7059F2]/10 blur-3xl" />
      <GridPattern className="absolute bottom-0 w-full h-auto -z-50" />
    </>
  );
};

export default GridBackground;

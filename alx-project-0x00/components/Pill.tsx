import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({title}) => {
  return(
    <div className=" flex justify-center  items-center border-2 border-white px-3 w-auto h-[27px] rounded-full">
      <p className="text-sm">{title}</p>
    </div>
  )
}

export default Pill;
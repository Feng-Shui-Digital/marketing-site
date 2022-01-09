import React from "react";
import { Svg } from "../../lib/styles";

type IPhoneProps = {
  color?: string;
};

export default function Phone({ color = "#8261EE" }: IPhoneProps) {
  return (
    <Svg width={50} height={50} fill="none" viewBox="0 0 50 50">
      <g transform="matrix(2,0,0,2,0,0)">
        <path
          fill="#ffffff"
          d="M19.5,19.5v2a2.006,2.006,0,0,1-2,2H6.5a2.006,2.006,0,0,1-2-2v-2Z"
        ></path>
        <path
          fill="#ffffff"
          d="M19.5,2.5v17H4.5V2.5a2.006,2.006,0,0,1,2-2h11A2.006,2.006,0,0,1,19.5,2.5Z"
        ></path>
        <path
          fill="#ffffff"
          d="M19.5,2.518V2.5a2.006,2.006,0,0,0-2-2H6.5a2.006,2.006,0,0,0-2,2V17.518Z"
        ></path>
        <rect
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          x="4.5"
          y="0.5"
          width="15"
          height="23"
          rx="2"
        ></rect>
        <line
          stroke={color}
          fill="none"
          x1="19.5"
          y1="19.5"
          x2="4.5"
          y2="19.5"
        ></line>
        <line
          strokeLinecap="round"
          fill="none"
          x1="9.5"
          y1="2.5"
          x2="14.5"
          y2="2.5"
        ></line>
        <path
          strokeLinejoin="round"
          fill="none"
          d="M12,21a.25.25,0,1,1-.25.25A.25.25,0,0,1,12,21"
        ></path>
      </g>
    </Svg>
  );
}

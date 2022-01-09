import React from "react";
import { Svg } from "../../lib/styles";

type ILaptopProps = {
  color?: string;
};

export default function Laptop({ color = "#8261EE" }: ILaptopProps) {
  return (
    <Svg width={50} height={50} fill="none" viewBox="0 0 50 50">
      <g transform="matrix(2,0,0,2,0,0)">
        <rect fill="#fff" x="3.5" y="1" width="17" height="12" rx="2"></rect>
        <path
          fill="#fff"
          d="M5.5,13H6.75L18.736,1.014A2.048,2.048,0,0,0,18.5,1H5.5a2,2,0,0,0-2,2v8A2,2,0,0,0,5.5,13Z"
        ></path>
        <rect
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          x="3.5"
          y="1"
          width="17"
          height="12"
          rx="2"
        ></rect>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fff"
          d="M23.427,21.293A1.281,1.281,0,0,1,22.219,23H1.781A1.281,1.281,0,0,1,.573,21.293l2.261-6.407A2.827,2.827,0,0,1,5.5,13h13a2.825,2.825,0,0,1,2.665,1.886Z"
        ></path>
        <polygon
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#fff"
          points="15.5 23 8.5 23 9.5 20 14.5 20 15.5 23"
        ></polygon>
        <line
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          x1="5.495"
          y1="16"
          x2="6.495"
          y2="16"
        ></line>
        <line
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          x1="8.495"
          y1="16"
          x2="9.495"
          y2="16"
        ></line>
        <line
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          x1="14.495"
          y1="16"
          x2="15.495"
          y2="16"
        ></line>
        <line
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          x1="17.495"
          y1="16"
          x2="18.495"
          y2="16"
        ></line>
        <line
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          x1="11.495"
          y1="16"
          x2="12.495"
          y2="16"
        ></line>
        <line
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          x1="4.495"
          y1="18"
          x2="5.495"
          y2="18"
        ></line>
        <line
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          x1="7.495"
          y1="18"
          x2="16.495"
          y2="18"
        ></line>
        <line
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          x1="18.495"
          y1="18"
          x2="19.495"
          y2="18"
        ></line>
      </g>
    </Svg>
  );
}

import React from "react";
import { Svg } from "../../lib/styles";

type IWebProps = {
  color?: string;
};

export default function Web({ color = "#8261EE" }: IWebProps) {
  return (
    <Svg width={50} height={50} fill="none" viewBox="0 0 50 50">
      <g transform="matrix(2,0,0,2,0,0)">
        <defs></defs>
        <path
          className="a"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#ffffff"
          d="M16.349,1.5a11.329,11.329,0,0,1-8.7,0A11.329,11.329,0,0,1,1.5,7.651a11.329,11.329,0,0,1,0,8.7A11.332,11.332,0,0,1,7.651,22.5a11.329,11.329,0,0,1,8.7,0A11.332,11.332,0,0,1,22.5,16.349a11.329,11.329,0,0,1,0-8.7A11.332,11.332,0,0,1,16.349,1.5Z"
        ></path>
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="7.237"
          y1="0.5"
          x2="16.763"
          y2="23.5"
        ></line>
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="23.5"
          y1="7.237"
          x2="0.5"
          y2="16.763"
        ></line>
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="0.5"
          y1="7.237"
          x2="23.5"
          y2="16.763"
        ></line>
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="16.763"
          y1="0.5"
          x2="7.237"
          y2="23.5"
        ></line>
        <path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.9,5A7.549,7.549,0,0,1,9.1,5,7.56,7.56,0,0,1,5,9.1a7.549,7.549,0,0,1,0,5.8A7.56,7.56,0,0,1,9.1,19a7.552,7.552,0,0,1,5.8,0A7.552,7.552,0,0,1,19,14.9a7.549,7.549,0,0,1,0-5.8A7.557,7.557,0,0,1,14.9,5Z"
        ></path>
      </g>
    </Svg>
  );
}

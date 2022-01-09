import React from "react";
import { Svg } from "../../lib/styles";

type IShieldProps = {
  color?: string;
};

export default function Shield({ color = "#8261EE" }: IShieldProps) {
  return (
    <Svg width={50} height={50} fill="none" viewBox="0 0 50 50">
      <g transform="matrix(2,0,0,2,0,0)">
        <path
          fill="#ffffff"
          d="M1.5,3.775v7.637A12.311,12.311,0,0,0,9.719,22.88l1.121.414a3.365,3.365,0,0,0,2.32,0l1.121-.414A12.311,12.311,0,0,0,22.5,11.412V3.775a1.533,1.533,0,0,0-.934-1.406A24.237,24.237,0,0,0,12,.5,24.237,24.237,0,0,0,2.434,2.369,1.533,1.533,0,0,0,1.5,3.775Z"
        ></path>
        <path
          fill="#ffffff"
          d="M12,.5A24.237,24.237,0,0,0,2.434,2.369,1.533,1.533,0,0,0,1.5,3.775v7.637A12.311,12.311,0,0,0,9.719,22.88l1.121.414A3.373,3.373,0,0,0,12,23.5Z"
        ></path>
        <path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M1.5,3.775v7.637A12.311,12.311,0,0,0,9.719,22.88l1.121.414a3.365,3.365,0,0,0,2.32,0l1.121-.414A12.311,12.311,0,0,0,22.5,11.412V3.775a1.533,1.533,0,0,0-.934-1.406A24.237,24.237,0,0,0,12,.5,24.237,24.237,0,0,0,2.434,2.369,1.533,1.533,0,0,0,1.5,3.775Z"
        ></path>
        <rect
          className="d"
          fill="#ffffff"
          x="7.5"
          y="9.243"
          width="9"
          height="7.999"
          rx="1"
        ></rect>
        <path
          className="e"
          fill="#ffffff"
          d="M12,9.243H8.5a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H12Z"
        ></path>
        <rect
          className="c"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          x="7.5"
          y="9.243"
          width="9"
          height="7.999"
          rx="1"
        ></rect>
        <circle fill="#ffffff" cx="12" cy="13.306" r="1.25"></circle>
        <path
          className="c"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          d="M14.5,7.743a2.5,2.5,0,0,0-5,0v1.5h5Z"
        ></path>
      </g>
    </Svg>
  );
}

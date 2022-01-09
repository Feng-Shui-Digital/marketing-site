import React from "react";
import { Svg } from "../../lib/styles";

type ICloudStarProps = {
  color?: string;
};

export default function CloudStar({ color = "#8261EE" }: ICloudStarProps) {
  return (
    <Svg width={50} height={50} fill="none" viewBox="0 0 50 50">
      <g transform="matrix(2,0,0,2,0,0)">
        <g>
          <path
            d="M18.769,14.5C18.02,14.551,23,14.268,23,9.857a4.711,4.711,0,0,0-4.954-4.635A6.706,6.706,0,0,0,12,1.5,6.605,6.605,0,0,0,5.325,7.609,3.561,3.561,0,0,0,1,11.018c0,3.269,3.262,3.461,3.765,3.482Z"
            fill="#ffffff"
          ></path>
          <path
            d="M18.713,12h.056c-.081.005-.095.007-.056,0H4.765c-.425-.018-2.818-.157-3.552-2.171A3.407,3.407,0,0,0,1,11.018c0,3.269,3.262,3.461,3.765,3.482H18.713C19.035,14.442,23,13.793,23,9.857a4.519,4.519,0,0,0-.163-1.2C22.088,11.442,19,11.949,18.713,12Z"
            fill="#ffffff"
          ></path>
          <path
            d="M20.5,13.906A4.311,4.311,0,0,0,23,9.857a4.711,4.711,0,0,0-4.954-4.635A6.706,6.706,0,0,0,12,1.5,6.605,6.605,0,0,0,5.325,7.609,3.561,3.561,0,0,0,1,11.018,3.186,3.186,0,0,0,3.5,14.3"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <g>
            <path
              d="M12.7,10.921l1.539,3.57h2.994a.735.735,0,0,1,.518,1.283l-2.6,2.316,1.44,3.313a.785.785,0,0,1-1.117.982L12,20.424l-3.48,1.961A.785.785,0,0,1,7.406,21.4l1.437-3.312-2.6-2.316a.734.734,0,0,1,.514-1.283h3l1.541-3.57a.8.8,0,0,1,1.409,0Z"
              fill="#ffffff"
            ></path>
            <path
              d="M14.242,14.491,12.7,10.921a.8.8,0,0,0-1.409,0l-1.541,3.57h-3a.734.734,0,0,0-.514,1.283l2.6,2.316L7.406,21.4a.773.773,0,0,0-.01.554l7.466-7.466Z"
              fill="#ffffff"
            ></path>
            <path
              d="M12.7,10.921l1.539,3.57h2.994a.735.735,0,0,1,.518,1.283l-2.6,2.316,1.44,3.313a.785.785,0,0,1-1.117.982L12,20.424l-3.48,1.961A.785.785,0,0,1,7.406,21.4l1.437-3.312-2.6-2.316a.734.734,0,0,1,.514-1.283h3l1.541-3.57a.8.8,0,0,1,1.409,0Z"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </g>
      </g>
    </Svg>
  );
}

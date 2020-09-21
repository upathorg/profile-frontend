import React from "react";
import styled from "styled-components";

import BlueCircle from "../../svg/ProgressCircleBlue";
import Indicator from "../../svg/ProgressCircleYellow";

export default function ProgressCircle({ name, progress, level }) {
  return (
    <div className="circle__root position-relative mx-auto mt-4">
      <Indicator className="circle__indicator" />
      <IndicatorNeedle
        className="circle__indicator"
        progress={progress * 2.9 + 35 + "deg"}
      />

      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <p className="circle__progress mt-4 mt-md-5 mb-0 mb-md-3 font-weight-light">
          {progress} %
        </p>
        <p className="roadmap__text roadmap__text--sm font-weight-bold">
          roadmap completed
        </p>

        <p className="mt-md-4 mb-0 font-weight-bold text-align-center">
          Current Level:
        </p>
        <p className="roadmap__text text--orange font-weight-light text-uppercase">
          {level}
        </p>
      </div>

      <p className="roadmap__text circle__roadmapName mb-0 font-weight-bold text-center">
        {name}
      </p>
    </div>
  );
}

const IndicatorNeedle = styled(BlueCircle)`
  path {
    transform: ${({ progress }) => progress && `rotate(${progress})`};
    transform-origin: center center;
  }
`;

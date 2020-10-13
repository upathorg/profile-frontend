import React from "react";
import styled from "styled-components";

export default function ProgressBar({ progress, ...props }) {
  return (
    <Root {...props}>
      <Progress progress={progress} />

      {props.status && <Status>{props.status}</Status>}
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  background: #eaf7f9;
  border-radius: 8px;
  max-width: 540px;
  height: 6.56px;
`;

const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #ffc107;
  border-radius: 8px;
  width: ${(props) => props.progress}%;
  height: 100%;
`;

const Status = styled.p`
  float: right;
  margin-top: 0.5rem;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  text-transform: capitalize;
  color: #858585;
`;

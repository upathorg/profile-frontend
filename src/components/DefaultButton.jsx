import React from "react";
import styled from "styled-components";

export default function DefaultButton({ children, onClick, ...props }) {
  if (props.disabled) {
    return <Base {...props}>{children}</Base>;
  }

  return (
    <Root onClick={onClick} {...props}>
      {children}
    </Root>
  );
}

const Base = styled.button`
  display: block;
  transition: all 0.5s;
  border: none;
  border-radius: 4px;
  background: "#EAF7F9";
  min-width: ${(props) => (props.small ? 185 : 246)}px;
  min-height: 48px;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #383b41;
  cursor: not-allowed;

  &:focus {
    outline: none;
  }
`;

const Root = styled(Base)`
  border: ${(props) => props.secondary && "1px solid #0099FF"};
  background: ${(props) => (props.secondary ? "inherit" : "#0099ff")};
  color: ${(props) => (props.secondary ? "#383B41" : "white")};
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.secondary ? "#0099ff" : "#006dcd")};
    color: white;
  }
`;

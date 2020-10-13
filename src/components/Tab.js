import React from "react";
import styled from "styled-components";

export default function Tab({ isActive, label, onClick }) {
  return (
    <Root active={isActive} onClick={onClick}>
      {label}
    </Root>
  );
}

const Root = styled.span`
  margin-right: 2rem;
  border-bottom: ${(props) => (props.active ? "4px solid #FFAA32" : "none")};
  padding: 0 0.5rem;
  font-weight: 800;
  font-size: 24px;
  line-height: 32px;
  cursor: ${(props) => (props.active ? "default" : "pointer")};
`;

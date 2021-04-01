/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--innerHeight": "8px",
    "--height": "8px",
    "--outerRadius": "4px",
  },
  medium: {
    "--innerHeight": "12px",
    "--height": "12px",
    "--outerRadius": "4px",
  },
  large: {
    "--innerHeight": "16px",
    "--height": "24px",
    "--padding": "4px",
    "--outerRadius": "8px",
  },
};
const Background = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--outerRadius);
`;

const RoudedEdger = styled.div`
  border-radius: 4px;
  /* Hide square inner progress bar edges when near full */
  overflow: hidden;
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: ${(p) => p.width + "%"};
  height: var(--innerHeight);
`;

const ProgressBar = ({ value, size }) => {
  const sizeProps = SIZES[size];
  return (
    <>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Background
        style={sizeProps}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <RoudedEdger>
          <Progress style={sizeProps} width={value}></Progress>
        </RoudedEdger>
      </Background>
    </>
  );
};

export default ProgressBar;

import * as CH from "@chakra-ui/react";

export const dot1Keyframes = CH.keyframes`
  0% {
    opacity: 0.1;
  }
  30% {
    opacity: 1;
  }
  90% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.1;
  }
`;

export const dot2Keyframes = CH.keyframes`
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  70% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.1;
  }
`;

export const dot3Keyframes = CH.keyframes`
  0% {
    opacity: 0.1;
  }
  40% {
    opacity: 0.1;
  }
  70% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.1;
  }
`;

export const boxKeyframes = CH.keyframes`
  0% {
      -webkit-box-shadow: 0 0 0 0px rgba(255,255,255, 0.4);
    }
  50% {
    -webkit-box-shadow: 0 0 0 0px rgba(255,255,255, 0.4);
  }
  95% {
    -webkit-box-shadow: 0 0 0 10px rgba(255,255,255, 0.0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0px rgba(255,255,255, 0.0);
  }
`;

export const animationDot1 = `${dot1Keyframes} 1.5s 0.5s ease-in-out infinite`;
export const animationDot2 = `${dot2Keyframes} 1.5s 0.5s ease-in-out infinite`;
export const animationDot3 = `${dot3Keyframes} 1.5s 0.5s ease-in-out infinite`;
export const animationBox = `${boxKeyframes} 1.5s 0.5s ease-in-out infinite`;

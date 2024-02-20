import * as CH from "@chakra-ui/react";

export const animationBoxKeyframes = CH.keyframes`
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(255,255,255, 0.5);
  }
  60% {
      -webkit-box-shadow: 0 0 0 16px rgba(255,255,255, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(255,255,255, 0);
  }
`;

export const animationBox = `${animationBoxKeyframes} 1.25s ease-in-out infinite`;

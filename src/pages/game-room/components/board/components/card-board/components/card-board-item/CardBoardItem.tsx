import React from "react";
import * as CH from "@chakra-ui/react";
import { motion } from "framer-motion";
import { getCardPosition } from "utils";
import { ChakraBox } from "duck";
import cardImage from "assets/images/card_back.svg";

type CardBoardItemProps = {
  boxW: number;
  boxH: number;
};

const CardBoardItem = React.memo(function CardBoardItem({
  boxW,
  boxH,
}: CardBoardItemProps) {
  const position = getCardPosition(boxW, boxH);

  return (
    <ChakraBox
      w="50px"
      position="absolute"
      as={motion.div}
      initial={{
        x: `${boxW}px`,
        y: `${boxH}px`,
        rotateZ: "60deg",
        scale: 1.6,
      }}
      animate={{
        x: [`${boxW}px`, position.left],
        y: [`${boxH}px`, position.top],
        rotateZ: ["60deg", position.deg],
        scale: [1.6, 1],
        transition: {
          duration: "1",
          ease: [0.075, 0.82, 0.165, 1],
        },
      }}
      exit={{
        x: [position.left, "0px"],
        y: [position.top, "200px"],
        rotateZ: [position.deg, "0deg"],
        scale: [1, 1.6],
        opacity: 0,
        transition: {
          duration: "1",
          ease: "linear",
          opacity: {
            duration: "0.2",
            delay: 0.8,
          },
        },
      }}
    >
      <CH.Image src={cardImage} />
    </ChakraBox>
  );
});

export default CardBoardItem;

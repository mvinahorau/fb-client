import React from "react";
import * as CH from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { GameContext } from "duck";
import { CardBoardItem } from "./components";

type CardBoardProps = {
  opened: boolean;
};

const CardBoard: React.FC<CardBoardProps> = ({ opened }) => {
  const {
    state: { currentRound },
  } = React.useContext(GameContext);
  const [isActive, setIsActive] =
    React.useState(false);
  const boxRef = React.useRef<any>();
  const boxW = boxRef.current?.clientWidth;
  const boxH = boxRef.current?.clientHeight;

  React.useEffect(() => {
    if (opened) {
      setTimeout(() => {
        setIsActive(false);
      }, 500);
    } else {
      setIsActive(true);
    }
  }, [opened]);

  return (
    <CH.Box
      position="absolute"
      top="60px"
      left="120px"
      bottom="0"
      right={6}
      zIndex="0"
      ref={boxRef}
      maxHeight="130px"
    >
      <AnimatePresence>
        {isActive &&
          currentRound.table.map((move: any) => (
            <CardBoardItem key={move} boxW={boxW} boxH={boxH} />
          ))}
      </AnimatePresence>
    </CH.Box>
  );
};

export default CardBoard;

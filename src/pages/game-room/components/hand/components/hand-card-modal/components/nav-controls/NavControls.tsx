import React from "react";
import * as CH from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { ActiveCard } from "duck";

interface NavControlsType {
  setFlip: React.Dispatch<React.SetStateAction<boolean>>;
  hand: any[];
  activeCard: ActiveCard;
  setActiveCard: React.Dispatch<React.SetStateAction<ActiveCard>>;
}

const NavControls: React.FC<NavControlsType> = ({
  setFlip,
  activeCard,
  setActiveCard,
  hand,
}) => {
  const handleNavBtn = (id: string, action: "dec" | "inc") => {
    const cardsLength = hand.length - 1;
    const currentInd = hand.findIndex((card) => card.id === id);
    const stepIndex = action === "inc" ? currentInd + 1 : currentInd - 1;

    if (action === "inc") {
      setFlip(true);
      if (currentInd === cardsLength) {
        setActiveCard({ id: hand[0].id, src: hand[0].src });
      } else {
        setActiveCard({
          id: hand[stepIndex].id,
          src: hand[stepIndex].src,
        });
      }
    }
    if (action === "dec") {
      setFlip(true);
      if (currentInd === 0) {
        setActiveCard({
          id: hand[cardsLength].id,
          src: hand[cardsLength].src,
        });
      } else {
        setActiveCard({
          id: hand[stepIndex].id,
          src: hand[stepIndex].src,
        });
      }
    }
  };

  return (
    <CH.Flex
      justifyContent="space-between"
      position="absolute"
      top="calc(50% - 20px)"
      left={-2}
      right={-2}
    >
      <CH.Flex
        cursor="pointer"
        onClick={() => handleNavBtn(activeCard.id, "dec")}
        w={10}
        h={10}
        borderRadius="100%"
        bg="accentColor1"
        boxShadow="0px 0px 0px 3px rgba(255,255,255,0.1)"
        alignItems="center"
        justifyContent="center"
      >
        <CH.Icon as={BiChevronLeft} color="#fff" w={6} h={6} />
      </CH.Flex>

      <CH.Flex
        cursor="pointer"
        onClick={() => handleNavBtn(activeCard.id, "inc")}
        w={10}
        h={10}
        borderRadius="100%"
        bg="accentColor1"
        boxShadow="0px 0px 0px 3px rgba(255,255,255,0.1)"
        alignItems="center"
        justifyContent="center"
      >
        <CH.Icon as={BiChevronRight} color="#fff" w={6} h={6} />
      </CH.Flex>
    </CH.Flex>
  );
};

export default NavControls;

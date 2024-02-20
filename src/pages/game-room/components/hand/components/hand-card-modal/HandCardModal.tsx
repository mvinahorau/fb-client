import React from "react";
import * as CH from "@chakra-ui/react";
import { ActiveCard, ChakraBox } from "duck";
import cardImageNoBoarder from "assets/images/card_back_noborder.svg";
import { cardVariants } from "./duck/constants";
import { NavControls, SelectCardButton } from "./components";

type HandCardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  hand: any[];
  activeCard: ActiveCard;
  setActiveCard: React.Dispatch<React.SetStateAction<ActiveCard>>;
};

const HandCardModal: React.FC<HandCardModalProps> = ({
  isOpen,
  onClose,
  hand,
  activeCard,
  setActiveCard,
}) => {
  const [flip, setFlip] = React.useState<boolean>(false);

  return (
    <CH.Modal
      allowPinchZoom
      size={{ base: "full", sm: "md" }}
      isOpen={isOpen}
      onClose={onClose}
    >
      <CH.ModalOverlay backdropFilter="blur(1.5px)" />
      <CH.ModalContent>
        <CH.ModalCloseButton zIndex={10} />
        <CH.ModalBody
          pt={14}
          pb={6}
        >
          <CH.Box
            position="relative"
          >
            <ChakraBox
              variants={cardVariants}
              animate={flip ? "next" : "stop"}
              onAnimationComplete={() => setFlip(false)}
            >
              <CH.Image
                w="calc(100% - 20px)"
                maxWidth={{ base: "300px", md: "80%" }}
                mx="auto"
                src={activeCard.src || ""}
                fallbackSrc={cardImageNoBoarder}
                borderRadius="14"
                border="3px solid"
                borderColor="backgroundColor4"
                userSelect="none"
                zIndex="1"
              />
            </ChakraBox>
            <NavControls
              setFlip={setFlip}
              hand={hand}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </CH.Box>
          <SelectCardButton onClose={onClose} activeCard={activeCard} />
        </CH.ModalBody>
      </CH.ModalContent>
    </CH.Modal>
  );
};

export default HandCardModal;

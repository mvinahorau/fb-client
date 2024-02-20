import React from "react";
import * as CH from "@chakra-ui/react";
import { ActiveCard, ChakraBox, Voting } from "duck";
import { cardVariants } from "./duck";
import cardImageNoBoarder from "assets/images/card_back_noborder.svg";
import { NavControls, SelectCardButton } from "./components";

type HandCardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  voting: Voting;
  activeCard: ActiveCard;
  setActiveCard: React.Dispatch<React.SetStateAction<ActiveCard>>;
  setVoted: React.Dispatch<React.SetStateAction<boolean>>;
  gameSlug: string | undefined;
};

const VotingCardModal: React.FC<HandCardModalProps> = ({
  isOpen,
  onClose,
  voting,
  activeCard,
  setActiveCard,
  setVoted,
  gameSlug,
}) => {
  const [flip, setFlip] = React.useState<boolean>(false);
  const hand = voting.cards.filter((item) => item.id !== voting.userCard.id);

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
          display="flex"
          flexDirection="column"
          justifyContent="center"
          pt={14}
          pb={6}
        >
          <CH.Box position="relative">
            <ChakraBox
              variants={cardVariants}
              animate={flip ? "next" : "stop"}
              onAnimationComplete={() => setFlip(false)}
            >
              <CH.Image
                w="calc(100% - 20px)"
                maxWidth={{ base: "300px", md: "80%" }}
                mx="auto"
                src={activeCard?.src || ""}
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
          <SelectCardButton
            onClose={onClose}
            activeCard={activeCard}
            gameSlug={gameSlug}
            setVoted={setVoted}
          />
        </CH.ModalBody>
      </CH.ModalContent>
    </CH.Modal>
  );
};

export default VotingCardModal;

import * as React from "react";
import * as CH from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card, ChakraBox, GameContext } from "duck";
import { useAuth } from "hooks";
import cardImage from "assets/images/card_back_noborder.svg";

type VotingCardProps = {
  card: Card;
  index: number;
  voted: boolean;
  setActiveCard: React.SetStateAction<any>;
  onOpen: () => void;
};
const VotingCard: React.FC<VotingCardProps> = ({
  card,
  index,
  voted,
  setActiveCard,
  onOpen,
}) => {
  const { t } = useTranslation();
  const {
    state: { narrator, voting },
  } = React.useContext(GameContext);
  const { auth } = useAuth();
  const isNarrator = narrator.id === auth?.user?.id;
  const timer = 1.3;
  const voteHandler = (id: string, src: string) => {
    setActiveCard({ id, src });
    onOpen();
  };

  return (
    <ChakraBox
      key={card.src}
      as={motion.div}
      initial={{
        opacity: 0,
      }}
      animate={{
        y: ["50px", "0px"],
        x: ["-30px", "0px"],
        rotateZ: ["-10deg", "0deg"],
        opacity: [0, 1],
        transition: {
          duration: "0.3",
          delay: timer + index * 0.2,
        },
      }}
      exit={{
        opacity: [1, 0],
        transition: {
          duration: "0.3",
        },
      }}
    >
      <CH.Image
        w="100%"
        src={card.src}
        fallbackSrc={cardImage}
        borderRadius="xl"
        overflow="hidden"
        border="3px solid"
        borderColor={card.id === voting.userCard.id ? "accentColor1" : "#fff"}
        transition="all ease 0.3s"
        position="relative"
        {...(card.id !== voting.userCard.id && !isNarrator && !voted
          ? {
              onClick: () => voteHandler(card.id, card.src),
              cursor: "pointer",
              _hover: { transform: "scale(1.05)" },
            }
          : {})}
      />
      {card.id === voting.userCard.id && (
        <CH.Tag
          position="absolute"
          bottom="-0.625rem"
          left="50%"
          transform="translateX(-50%)"
          whiteSpace="nowrap"
          bg="accentColor1"
          size="xs"
        >
          {t("game.yourCard")}
        </CH.Tag>
      )}
    </ChakraBox>
  );
};

export default VotingCard;

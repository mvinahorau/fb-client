import React from "react";
import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { socketClient } from "configs";

interface SelectCardButtonType {
  activeCard: any;
  onClose: () => void;
  gameSlug: string | undefined;
  setVoted: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectCardButton: React.FC<SelectCardButtonType> = ({
  activeCard,
  onClose,
  gameSlug,
  setVoted,
}) => {
  const { t } = useTranslation();

  const cardSelectHandler = () => {
    socketClient().emit("card:vote", gameSlug, activeCard.id);
    setVoted(true);
    onClose();
  };

  return (
    <CH.Flex
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: 2, md: 1 }}
      justifyContent="center"
      alignItems="center"
      mt={6}
    >
      <CH.Button w="fit-content" px={16} onClick={cardSelectHandler}>
        {t("game.voteSubmitBtn")}
      </CH.Button>
    </CH.Flex>
  );
};

export default SelectCardButton;

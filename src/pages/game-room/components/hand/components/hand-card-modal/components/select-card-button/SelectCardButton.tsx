import React from "react";
import * as CH from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { GameContext } from "duck";
import { useAuth } from "hooks";
import { socketClient } from "configs";
import { checkPassing } from "./duck";
import { useTranslation } from "react-i18next";

interface SelectCardButtonType {
  activeCard: any;
  onClose: () => void;
}

const SelectCardButton: React.FC<SelectCardButtonType> = ({
  activeCard,
  onClose,
}) => {
  const {
    state: { currentRound },
  } = React.useContext(GameContext);
  const { t } = useTranslation();
  const { auth } = useAuth();
  const { gameSlug } = useParams();
  const inputRef = React.useRef<any>();
  const [phrase, setPhrase] = React.useState("");
  const isReady = checkPassing(currentRound.readyPlayers, auth?.user?.id);
  const toast = CH.useToast({
    position: "top",
    status: "error",
    duration: 3000,
    isClosable: false,
  });
  const isNarrator = currentRound.narrator.id === auth?.token;

  const cardSelectHandler = () => {
    if (isNarrator && !phrase) {
      toast({
        title: t("game.descriptionMustFilling"),
      });
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } else {
      socketClient().emit("hand:card:select", gameSlug, activeCard.id, phrase);
      onClose();
    }
  };

  return (
    <CH.Flex
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: 2, md: 1 }}
      alignItems="center"
      justifyContent="center"
      mt={6}
      maxW="450px"
      minW={{base: "100%", md: "60%"}}
    >
      {isNarrator && !currentRound.phrase && (
        <CH.FormControl variant="floating" isInvalid>
          <CH.Input
            ref={inputRef}
            placeholder=" "
            onChange={(e) => setPhrase(e.target.value)}
          ></CH.Input>
          <CH.FormLabel>{t("game.cardAssociationInput") || ""}</CH.FormLabel>
        </CH.FormControl>
      )}
      {(currentRound.phrase || isNarrator) && !isReady && (
        <CH.Button
          w={{ base: "fit-content" }}
          px={16}
          isDisabled={!activeCard.id || (isNarrator && !phrase)}
          onClick={cardSelectHandler}
        >
          {t("game.cardSubmitBtn")}
        </CH.Button>
      )}
    </CH.Flex>
  );
};

export default SelectCardButton;

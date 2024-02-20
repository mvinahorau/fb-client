import React from "react";
import { useParams } from "react-router-dom";
import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { User } from "data-access";
import { socketClient } from "configs";

type StartGameProps = {
  players: User[];
};

const StartGame: React.FC<StartGameProps> = ({ players }) => {
  const { t } = useTranslation();
  const { gameSlug } = useParams();

  const startGame = () => {
    socketClient().emit("game:start", gameSlug);
  };

  return (
    <>
      <CH.Text variant="secondary" fontSize="md" mb={2} textAlign="center">
        {players?.length < 3 ? t("waitingRoom.waitText") : ""}
      </CH.Text>
      <CH.Button mb={18} onClick={startGame} isDisabled={players?.length < 3}>
        {t("waitingRoom.startGame")}
      </CH.Button>
    </>
  );
};

export default StartGame;

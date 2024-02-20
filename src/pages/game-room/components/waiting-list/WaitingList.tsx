import React from "react";
import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { GameContext, Player } from "duck";
import { AnimatePresence } from "framer-motion";
import { getWaitingList } from "./duck";
import { WaitingItem } from "./components";

const WaitingList = () => {
  const { t } = useTranslation();
  const {
    state: {
      currentRound,
      game: { players },
    },
  } = React.useContext(GameContext);
  const [waitingPlayers, setWaitingPlayers] = React.useState<Player[]>([]);

  React.useEffect(() => {
    setWaitingPlayers(getWaitingList(players, currentRound));
  }, [players, currentRound]);

  return (
    <CH.Flex>
      <CH.Text fontWeight="bold" fontSize="0.75rem" pt="0.125rem">
        {!currentRound.phrase
          ? t("game.waitingStoryteller")
          : t("game.waiting")}
        :
      </CH.Text>
      <CH.Flex ml={2} gap={1} flexWrap="wrap">
        {!currentRound.phrase && (
          <WaitingItem
            key={currentRound.narrator.nickname}
            nickname={currentRound.narrator.nickname}
          />
        )}
        <AnimatePresence>
          {currentRound.phrase &&
            waitingPlayers.map((player: Player) => (
              <WaitingItem
                key={player.user.id}
                nickname={player.user.nickname}
              />
            ))}
        </AnimatePresence>
      </CH.Flex>
    </CH.Flex>
  );
};

export default WaitingList;

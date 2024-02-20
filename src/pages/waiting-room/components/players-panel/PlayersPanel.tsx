import React from "react";
import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Player } from "data-access";
import { PlayersItem } from "../../components";
import { BiUser } from "react-icons/bi";

interface PlayersType {
  players: Player[];
  isHost: boolean;
  hostId: string | null | undefined;
}

const PlayersPanel: React.FC<PlayersType> = ({ players, isHost, hostId }) => {
  const { t } = useTranslation();

  return (
    <>
      <CH.Flex alignItems="center" mb={4}>
        <CH.Icon as={BiUser} color="accentColor3" w={6} h={6} />
        <CH.Heading size="md" ml={2} whiteSpace="pre-line">
          {t("waitingRoom.gamersList")}
        </CH.Heading>
      </CH.Flex>
      <CH.VStack spacing={3}>
        {players.map((player: any) => (
          <PlayersItem
            player={player.user}
            isHost={isHost}
            hostId={hostId}
            key={player.user?._id}
          />
        ))}
      </CH.VStack>
    </>
  );
};

export default PlayersPanel;

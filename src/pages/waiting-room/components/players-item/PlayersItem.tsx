import React from "react";
import * as CH from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { socketClient } from "configs";

interface PlayersItemType {
  player: any;
  isHost: boolean;
  hostId: string | null | undefined;
}

const PlayersItem: React.FC<PlayersItemType> = ({ player, isHost, hostId }) => {
  const { t } = useTranslation();
  const { gameSlug } = useParams();

  const removeHandler = (playerId: string) => {
    socketClient().emit("game:players:remove", gameSlug, playerId);
  };

  return (
    <CH.HStack
      position="relative"
      w="100%"
      key={player.id}
      backgroundColor="backgroundColor1"
      boxShadow="0 0 0 2px rgba(255,255,255,0.1)"
      px={4}
      py={2}
      borderRadius="16px"
      spacing={3}
      justifyContent="space-between"
    >
      <CH.Flex alignItems="center" gap={3}>
        <CH.Avatar
          src={player.avatar.src}
          size="md"
          boxShadow="0px 0px 0px 2px rgba(255,255,255,0.2)"
        />
        <CH.Text fontWeight="bold" color="textColor1" fontSize={18}>
          {player?.nickname}
        </CH.Text>
      </CH.Flex>
      {isHost && hostId !== player?._id && (
        <CH.Icon
          as={BiTrash}
          color="accentColor3"
          w={6}
          h={6}
          cursor="pointer"
          onClick={() => removeHandler(player?._id)}
        />
      )}
      {hostId === player?._id && (
        <CH.Box
          position="absolute"
          top="-10px"
          right={4}
          fontSize={14}
          lineHeight="1.2"
          pb="2px"
          fontWeight="bold"
          bg="accentColor3"
          px={2}
          borderRadius={20}
        >
          {t("owner")}
        </CH.Box>
      )}
    </CH.HStack>
  );
};

export default PlayersItem;

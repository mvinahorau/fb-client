import React from "react";
import * as CH from "@chakra-ui/react";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useWaitingQuery } from "data-access";
import { routes, socketClient } from "configs";
import { getFromLocalStorage } from "utils";
import { useTabActive } from "hooks";
import { InviteRow, PlayersPanel, StartGame } from "./components";

const WaitingRoom = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { gameSlug } = useParams();
  const userId = getFromLocalStorage("token");
  const [players, setPlayers] = React.useState([]);
  const toast = CH.useToast();
  const tabActive = useTabActive();

  const { data, loading } = useWaitingQuery({
    variables: {
      input: { slug: gameSlug },
    },
  });

  const isHost = userId === data?.game?.host?.id;

  React.useEffect(() => {
    if (tabActive) {
      socketClient().emit("players:user:connect", gameSlug);
      socketClient().on("players:list:update", (players) => {
        setPlayers(players);
      });
      socketClient().on("game:started", () => {
        navigate(generatePath(routes.game, { gameSlug }));
      });
    }
  }, [tabActive]);

  React.useEffect(() => {
    const isActiveUser = players.some((item: any) => item.user._id == userId);
    if (players.length && !isActiveUser) {
      toast({
        title: t("waitingRoom.removedFromTheGame"),
        position: "top",
        status: "warning",
        duration: 5000,
        isClosable: false,
      });
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [players]);

  React.useEffect(() => {
    if (data && data?.game?.status !== "waiting") {
      toast({
        title: t("waitingRoom.startedGame"),
        position: "top",
        status: "warning",
        duration: 5000,
        isClosable: false,
      });
      navigate("/");
    }
  }, [data]);

  if (loading) {
    return (
      <CH.Flex w="100%" h="100%" alignItems="center" justifyContent="center">
        <CH.Spinner size="md" color="white.500" />
      </CH.Flex>
    );
  }

  return (
    <CH.Flex h="100%" flexDirection="column">
      <CH.Heading fontSize="4xl" whiteSpace="pre-line" mb={4} mt={12}>
        {t("waitingRoom.title")}
      </CH.Heading>
      <CH.Text variant="secondary" fontSize="lg" mb={10}>
        {t(
          `waitingRoom.${
            isHost ? "inviteDescription" : "inviteDescriptionClient"
          }`
        )}
      </CH.Text>
      {isHost && <InviteRow gameSlug={gameSlug} />}
      <PlayersPanel
        players={players}
        isHost={isHost}
        hostId={data?.game?.host?.id}
      />
      <CH.Spacer />
      {isHost && data?.game?.status === "waiting" && (
        <StartGame players={players} />
      )}
    </CH.Flex>
  );
};

export default WaitingRoom;

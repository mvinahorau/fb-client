import React from "react";
import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { Game, Round } from "duck";
import { socketClient } from "configs";
import { Preloader } from "components";
import { compare } from "./duck";
import { PlayerItem } from "./components";
import Cup from "../finished-game/assets/images/game_win_cup.jpg";

const FinishedGame = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { gameSlug } = useParams();
  const [game, setGame] = React.useState<Game | null>(null);
  React.useEffect(() => {
    socketClient().emit("game:info:get", gameSlug);
    socketClient().on("game:info", (game: Game, currentRound: Round) => {
      setGame(game);
    });
  }, []);

  if (!game?.id) return <Preloader />;

  return (
    <CH.Flex pt={8} flexDirection="column" h="100%">
      <CH.Center mb={4}>
        <CH.Heading fontSize="1.75rem">{t("game.finishedGame")}</CH.Heading>
      </CH.Center>
      <CH.Flex justifyContent="center" mb={10}>
        <CH.Box
          position="relative"
          w="100px"
          minW="100px"
          h="100px"
          minH="100px"
          borderRadius="100%"
          boxShadow="0px 0px 0px 5px rgba(255,255,255,0.1)"
          overflow="hidden"
        >
          <CH.Image src={Cup} alt="Winner Cup" />
        </CH.Box>
      </CH.Flex>
      <CH.Box
        flex="1"
        overflowX="visible"
        overflowY="scroll"
        mt={-2}
        mb={{ base: -20, md: -8 }}
        mx={{ base: -6, md: -8 }}
        pt={2}
        pb={20}
        px={{ base: 6, md: 8 }}
      >
        <CH.Flex flexDirection="column" gap={2}>
          {game.players.sort(compare).map((player, index) => (
            <PlayerItem index={index} player={player} key={index} />
          ))}
        </CH.Flex>
      </CH.Box>
      <CH.Flex
        justifyContent="center"
        pt={10}
        pb={{ base: 10, md: 4 }}
        mb={{ base: -6, md: -8 }}
        mx={{ base: -6, md: -8 }}
        bgGradient="linear(transparent 0%, backgroundColor3 50%)"
      >
        <CH.Button size="lg" zIndex="1" onClick={() => navigate(`/`)}>
          {t("game.leaveGame")}
        </CH.Button>
      </CH.Flex>
    </CH.Flex>
  );
};

export default FinishedGame;

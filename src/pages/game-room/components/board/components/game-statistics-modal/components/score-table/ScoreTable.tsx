import React from "react";
import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { AiOutlineCrown } from "react-icons/ai";
import { GameContext } from "duck";
import { compare } from "./duck";

type ScoreTableProps = {
  isFinishedGame: boolean;
};

const ScoreTable: React.FC<ScoreTableProps> = ({ isFinishedGame }) => {
  const {
    state: {
      game: { roundsCount, players, status },
    },
  } = React.useContext(GameContext);
  const { t } = useTranslation();
  const isFinished = isFinishedGame || status === "finished" || false;

  return (
    <CH.Box>
      {roundsCount > 1 && !isFinished && (
        <CH.Tag size="md" bg="accentColor2" mb={8}>
          {t("game.finishedRounds")} - {roundsCount - 1}
        </CH.Tag>
      )}
      {isFinished && (
        <CH.Tag size="md" bg="accentColor2" mb={8}>
          {t("game.finishedGame")}
        </CH.Tag>
      )}

      {players.sort(compare).map((score: any, index) => (
        <CH.Flex
          key={index}
          backgroundColor={"backgroundColor1"}
          p={3}
          border="2px solid"
          borderColor={
            !index && score.score !== 0
              ? "rgba(252, 141, 12, 1)"
              : "backgroundColor4"
          }
          borderRadius="2xl"
          mb={3}
          alignItems="center"
          position="relative"
        >
          {!index && score.score !== 0 && (
            <CH.Tag
              top="-9px"
              left={3}
              size="sm"
              position="absolute"
              backgroundColor="accentColor3"
              fontSize="10px"
              minH={4}
            >
              <CH.Icon fontSize="12px" mt="-1px" mr={0.5} as={AiOutlineCrown} />
              {t("game.leader")}
            </CH.Tag>
          )}
          <CH.Avatar mr={4} border="2px solid white" src={score.user.avatar} />
          <CH.Text fontWeight="bold" fontSize="21px" mr={2}>
            {score.user.nickname}
          </CH.Text>
          <CH.Spacer />
          <CH.VStack spacing={-2}>
            <CH.Text fontSize="10px" fontWeight="bold" color="textColor3">
              {t("game.points")}
            </CH.Text>
            <CH.Text fontSize="28px" fontWeight="bold">
              {score.score}
            </CH.Text>
          </CH.VStack>
        </CH.Flex>
      ))}
    </CH.Box>
  );
};

export default ScoreTable;

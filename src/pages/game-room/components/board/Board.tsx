import React from "react";
import * as CH from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { socketClient } from "configs";
import { emptyVoting, GameContext, setVoting } from "duck";
import {
  CardBoard,
  Controls,
  Narrator,
  VotingCardBoard,
  RoundResults,
  GameStatisticsModal,
} from "./components";

type BoardType = {
  isFinishedGame: boolean;
};

const Board: React.FC<BoardType> = ({ isFinishedGame }) => {
  const { dispatch, state } = React.useContext(GameContext);
  const [scores, setScores] = React.useState<any>([]);
  const [voted, setVoted] = React.useState<boolean>(false);
  const [roundPhrase, setRoundPhrase] = React.useState("");
  const [roundTable, setRoundTable] = React.useState<any>([]);
  const [opened, setOpened] = React.useState(false);
  const { isOpen, onOpen, onClose } = CH.useDisclosure();
  const { gameSlug } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    socketClient().on("card:vote:ending", (score, phrase, table) => {
      setScores(score);
      setRoundPhrase(phrase);
      setRoundTable(table);
    });
  }, []);

  React.useEffect(() => {
    if (state.voting.cards.length > 0) {
      setTimeout(() => {
        setOpened(true);
      }, 500);
    }
  }, [state]);

  const nextRoundHandler = (status: boolean) => {
    if (status) {
      navigate(`/finished-game/${gameSlug}`);
    } else {
      setScores([]);
      setRoundTable([]);
      setVoted(false);
      setOpened(false);
      dispatch(setVoting({ voting: emptyVoting }));
    }
  };

  return (
    <CH.Flex
      flexDirection="column"
      backgroundColor="backgroundColor3"
      borderBottomLeftRadius="50"
      borderBottomRightRadius="50"
      transition="all ease 0.8s 0.3s"
      height={!opened ? "200px" : "100%"}
      pt={4}
      px={4}
      pb={8}
      position="relative"
      mb={4}
      mt={{ base: -6, md: -8 }}
      mr={{ base: -6, md: -8 }}
      ml={{ base: -6, md: -8 }}
    >
      <Controls onOpen={onOpen} isFinishedGame={isFinishedGame} />
      <Narrator key="Narrator" roundTable={roundTable} />
      <CardBoard opened={opened} key="CardBoard" />
      <VotingCardBoard
        key="VotingCardBoard"
        opened={opened}
        roundTable={roundTable}
        voted={voted}
        setVoted={setVoted}
        isFinishedGame={isFinishedGame}
      />
      <RoundResults
        scores={scores}
        roundPhrase={roundPhrase}
        roundTable={roundTable}
        nextRoundHandler={nextRoundHandler}
        opened={opened}
        key="RoundResults"
        isFinishedGame={isFinishedGame}
      />
      <GameStatisticsModal
        isOpen={isOpen}
        onClose={onClose}
        isFinishedGame={isFinishedGame}
      />
    </CH.Flex>
  );
};

export default Board;

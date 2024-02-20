import React from "react";
import * as CH from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { socketClient } from "configs";
import { TitleRow, VotingCardModal } from "./components";
import { Card, GameContext, RoundTable } from "duck";
import { VotingCard } from "../index";
import { useParams } from "react-router-dom";

type VotingCardBoardProps = {
  opened: boolean;
  roundTable: RoundTable[];
  voted: boolean;
  setVoted: React.Dispatch<React.SetStateAction<boolean>>;
  isFinishedGame: boolean;
};

const VotingCardBoard: React.FC<VotingCardBoardProps> = ({
  roundTable,
  opened,
  voted,
  setVoted,
  isFinishedGame,
}) => {
  const {
    state: { voting, game },
  } = React.useContext(GameContext);
  const { isOpen, onOpen, onClose } = CH.useDisclosure();
  const [activeCard, setActiveCard] = React.useState<any>({});
  const isFinished = isFinishedGame || game.status === "finished" || false;

  const { gameSlug } = useParams();

  React.useEffect(() => {
    socketClient().emit("game:card:voteBoard:reload", gameSlug);
  }, []);

  return opened && !roundTable.length && !isFinished ? (
    <CH.Box
      flex="1"
      display="flex"
      flexDirection="column"
      overflow="hidden"
      mx={-3}
      px={3}
      pb={3}
    >
      <TitleRow key="TitleRow" voted={voted} />
      <CH.Box
        flex="1"
        overflowX="visible"
        overflowY="auto"
        mt={-2}
        mb={-3}
        mx={-3}
        pt={2}
        px={3}
      >
        <CH.SimpleGrid columns={3} spacing={2}>
          <AnimatePresence>
            {voting.cards.map((card: Card, index: number) => (
              <VotingCard
                card={card}
                key={card.id}
                index={index}
                voted={voted}
                onOpen={onOpen}
                setActiveCard={setActiveCard}
              />
            ))}
          </AnimatePresence>
        </CH.SimpleGrid>
      </CH.Box>
      <VotingCardModal
        isOpen={isOpen}
        onClose={onClose}
        voting={voting}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        setVoted={setVoted}
        gameSlug={gameSlug}
        key="VotingCardModal"
      />
    </CH.Box>
  ) : (
    <></>
  );
};

export default VotingCardBoard;

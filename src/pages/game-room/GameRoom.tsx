import React from "react";
import { AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Preloader } from "components";
import { socketClient } from "configs";
import { Hand, Board, WaitingList } from "./components";
import { GameContext } from "duck";

const GameRoom: React.FC = () => {
  const {
    state: { game, voting },
  } = React.useContext(GameContext);
  const [isFinishedGame, setIsFinishedGame] = React.useState(false);
  const { gameSlug } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    socketClient().on("game:end", (status) => {
      if (status) setIsFinishedGame(true);
    });
  }, []);

  if (!game.id) return <Preloader />;
  if (game.status === "finished") navigate(`/finished-game/${gameSlug}`);

  return (
    <>
      <Board isFinishedGame={isFinishedGame} />
      {!isFinishedGame && <WaitingList />}
      <AnimatePresence>{!voting.cards.length && <Hand />}</AnimatePresence>
    </>
  );
};

export default GameRoom;

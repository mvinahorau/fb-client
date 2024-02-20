import React from "react";
import GameRoom from "./GameRoom";
import { useParams } from "react-router-dom";
import { socketClient } from "configs";
import {
  gameReducer,
  gameState,
  GameContext,
  Game,
  setGame,
  setCurrentRound,
  Round,
  setNarrator,
  Voting,
  setVoting,
} from "duck";
import { useTabActive } from "hooks";

const GameRoomProvider: React.FC = () => {
  const { gameSlug } = useParams();
  const [state, dispatch] = React.useReducer(gameReducer, gameState);
  const tabActive = useTabActive();

  React.useEffect(() => {
    if (tabActive) {
      socketClient().on("vote:card:ask", () => {
        socketClient().emit("vote:card:info", gameSlug);
      });
      socketClient().on("vote:card", (voting: Voting) => {
        dispatch(setVoting({ voting }));
      });
      socketClient().emit("game:info:get", gameSlug);
      socketClient().on("game:info", (game: Game, currentRound: Round) => {
        dispatch(setGame({ game }));
        dispatch(setCurrentRound({ currentRound }));
        dispatch(setNarrator({ narrator: currentRound.narrator }));
      });
      socketClient().on("game:info:round", (currentRound: Round) => {
        dispatch(setCurrentRound({ currentRound }));
        dispatch(setNarrator({ narrator: currentRound.narrator }));
      });
    }
  }, [tabActive]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <GameRoom />
    </GameContext.Provider>
  );
};

export default GameRoomProvider;

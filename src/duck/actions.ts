import { createAction } from "typesafe-actions";
import { Game, Round, User, Voting } from "./types";

export const setGame = createAction("GAME/SET_GAME")<{
  game: Game;
}>();

export const setCurrentRound = createAction("GAME/SET_CURRENT_ROUND")<{
  currentRound: Round;
}>();

export const setNarrator = createAction("GAME/SET_NARRATOR")<{
  narrator: User;
}>();

export const setVoting = createAction("GAME/SET_VOTING")<{
  voting: Voting;
}>();

export const setLoadingGame = createAction("GAME/SET_LOADING_GAME")<{
  loadingGame: boolean;
}>();

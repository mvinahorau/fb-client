import { createReducer, ActionType } from "typesafe-actions";
import { gameState } from "./state";
import * as actions from "./actions";
import * as Types from "./types";

type Action = ActionType<typeof actions>;

export const gameReducer = createReducer<Types.State, Action>(gameState)
  .handleAction(actions.setGame, (state, { payload: { game } }) => ({
    ...state,
    game,
  }))
  .handleAction(
    actions.setCurrentRound,
    (state, { payload: { currentRound } }) => ({
      ...state,
      currentRound,
    })
  )
  .handleAction(actions.setNarrator, (state, { payload: { narrator } }) => ({
    ...state,
    narrator,
  }))
  .handleAction(actions.setVoting, (state, { payload: { voting } }) => ({
    ...state,
    voting,
  }))
  .handleAction(
    actions.setLoadingGame,
    (state, { payload: { loadingGame } }) => ({
      ...state,
      loadingGame,
    })
  );

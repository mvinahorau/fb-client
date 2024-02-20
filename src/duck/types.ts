import React from "react";

export type AnyDispatch = React.Dispatch<any>;

export interface GameContextType {
  state: State;
  dispatch: AnyDispatch;
}

export interface Card {
  id: string;
  src: string;
  pack: string;
}

export interface Voting {
  cards: Card[];
  userCard: Card;
}

export interface User {
  id: string;
  nickname: string;
  avatar: string;
}

export interface Player {
  id: string;
  user: User;
  score: number;
}

export interface Vote {
  card: Card;
  user: User;
}

export interface Move {
  card: Card;
  user: User;
}

export interface Round {
  phrase: string;
  narrator: User;
  readyPlayers: User[];
  table: Move[];
  votes: Vote[];
}

export interface Game {
  id: string;
  slug: string;
  status: string;
  host: User;
  players: Player[];
  roundsCount: number;
}

export interface State {
  narrator: User;
  game: Game;
  currentRound: Round;
  voting: Voting;
}

export interface ActiveCard {
  id: string;
  src: string;
}
export interface RoundTable {
  isNarratorCard: boolean;
  narrator: User,
  owner: User;
  src: string;
  votes: Array<string>;
}
export interface Score {
  avatar: string;
  nickname: string;
  prevScore: number;
  score: number;
  userId: string;
}

import { State } from "./types";

const emptyUser = {
  id: "",
  nickname: "",
  avatar: "",
};

export const emptyVoting = {
  cards: [],
  userCard: {
    pack: "",
    src: "",
    id: "",
  },
};

export const gameState: State = {
  narrator: emptyUser,
  game: {
    id: "",
    slug: "",
    status: "",
    host: emptyUser,
    players: [],
    roundsCount: 0,
  },
  currentRound: {
    phrase: "",
    narrator: emptyUser,
    readyPlayers: [],
    table: [],
    votes: [],
  },
  voting: emptyVoting,
};

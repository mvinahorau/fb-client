import { Round, Player } from "duck";

export const getWaitingList = (players: Player[], currentRound: Round) => {
  const { votes, readyPlayers, narrator } = currentRound;

  if (votes.length) {
    return players
      .filter((player) =>
        votes.every((vote) => vote.user.id !== player.user.id)
      )
      .filter((player) => narrator.id !== player.user.id);
  } else {
    if (readyPlayers.length === players.length) {
      return players.filter((player) => narrator.id !== player.user.id);
    } else {
      return players.filter((player) =>
        readyPlayers.every((item) => item.id !== player.user.id)
      );
    }
  }
};

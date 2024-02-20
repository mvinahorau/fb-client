export const checkPassing = (readyPlayers: any, userId: any) => {
  let isReady = false;

  readyPlayers.forEach((player: any) => {
    const id = player._id || player.id;

    if (id === userId) {
      isReady = true;
    }
  });

  return isReady;
};

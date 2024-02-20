import { io } from "socket.io-client";

function makeSocketClient() {
  let savedToken = localStorage.getItem("token");
  let client = io(import.meta.env.VITE_SOCKET_URL, {
    extraHeaders: {
      ...(savedToken ? { authorization: savedToken } : {}),
    },
  });

  return function (newToken?: string) {
    if (newToken && newToken !== savedToken) {
      savedToken = newToken;

      client = io(import.meta.env.VITE_SOCKET_URL, {
        extraHeaders: {
          authorization: savedToken,
        },
      });
    }

    return client;
  };
}

export const socketClient = makeSocketClient();

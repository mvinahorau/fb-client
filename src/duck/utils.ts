import * as CH from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { State } from "./types";

export const ChakraBox: any = CH.chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || CH.shouldForwardProp(prop),
});

export const getTagObject = (color: string, text: string): any => ({
  color: color,
  text: text,
});

export const getVotedStatus = (state: State, userId: any) =>
  state.currentRound.readyPlayers.some((player) => player.id === userId);

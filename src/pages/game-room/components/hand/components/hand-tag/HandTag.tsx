import * as React from "react";
import * as CH from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAuth } from "hooks";
import { animationBox } from "./duck";
import { GameContext, getTagObject, getVotedStatus, State } from "duck";

const HandTag: React.FC = () => {
  const { t } = useTranslation();
  const { auth } = useAuth();
  const { state } = React.useContext(GameContext);
  const getTagData = (
    state: State,
    isNarrator: boolean,
    votedStatus: boolean
  ) => {
    if (isNarrator) {
      if (!state.currentRound.phrase)
        return getTagObject("accentColor3", t("game.makeStory"));
      if (state.currentRound.phrase)
        return getTagObject("accentColor1", t("game.wait"));
    }
    if (!isNarrator) {
      if (!state.currentRound.phrase)
        return getTagObject("accentColor1", t("game.waitingStoryteller"));
      if (state.currentRound.phrase && !votedStatus)
        return getTagObject("accentColor3", t("game.yourChoose"));
    }
    return getTagObject("accentColor1", t("game.wait"));
  };
  const isNarrator = state.narrator.id === auth?.user?.id;
  const votedStatus = getVotedStatus(state, auth?.user?.id);
  const tagData = getTagData(state, isNarrator, votedStatus);

  return (
    <CH.Tag
      size="sm"
      bg={tagData.color}
      as={motion.div}
      animation={tagData.color === "accentColor3" ? animationBox : "" }
    >
      {tagData.text}
    </CH.Tag>
  );
};

export default HandTag;

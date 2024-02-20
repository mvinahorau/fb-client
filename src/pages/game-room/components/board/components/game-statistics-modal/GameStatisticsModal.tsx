import React from "react";
import * as CH from "@chakra-ui/react";
import { AiOutlineFire } from "react-icons/ai";
import { ScoreTable } from "./components";
import { useTranslation } from "react-i18next";

type GameStatisticsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isFinishedGame: boolean;
};

const GameStatisticsModal: React.FC<GameStatisticsModalProps> = ({
  isOpen,
  onClose,
  isFinishedGame,
}) => {
  const { t } = useTranslation();

  return (
    <CH.Modal
      allowPinchZoom
      size={{ base: "full", sm: "md" }}
      isOpen={isOpen}
      onClose={onClose}
    >
      <CH.ModalOverlay backdropFilter="blur(1.5px)" />
      <CH.ModalContent>
        <CH.ModalCloseButton zIndex={10} />
        <CH.ModalHeader>
          <CH.Flex alignItems="center" gap={1}>
            <CH.Icon fontSize={26} color="accentColor3" as={AiOutlineFire} />
            {t("game.gameStatistics")}
          </CH.Flex>
        </CH.ModalHeader>
        <CH.ModalBody pt={4} pb={10}>
          <ScoreTable isFinishedGame={isFinishedGame} />
        </CH.ModalBody>
      </CH.ModalContent>
    </CH.Modal>
  );
};

export default GameStatisticsModal;

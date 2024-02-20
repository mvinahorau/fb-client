import React from "react";
import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { isIOS } from "react-device-detect";
import { GameContext } from "duck";
import {
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
  AiOutlineFire,
} from "react-icons/ai";
import screenfull from "screenfull";

type ControlsProps = {
  onOpen: () => void;
  isFinishedGame: boolean;
};

const Controls: React.FC<ControlsProps> = ({ onOpen, isFinishedGame }) => {
  const { t } = useTranslation();
  const [opened, setOpened] = React.useState<boolean>(false);

  const fullScreenHandler = () => {
    screenfull.toggle();
    const element: any = document.body;
    if (element.webkitEnterFullScreen) {
      element.webkitEnterFullScreen();
    }

    setOpened((opened) => !opened);
  };

  const {
    state: { game },
  } = React.useContext(GameContext);

  const isFinished = isFinishedGame || game.status === "finished" || false;

  return (
    <CH.Flex alignItems="center" justifyContent="between">
      <CH.Tag size="md" bg="accentColor2">
        {!isFinished
          ? `Round #${game.roundsCount}`
          : t("game.finishedGame")}
      </CH.Tag>
      <CH.Spacer />
      <CH.Flex gap={1}>
        <CH.IconButton
          backgroundColor="backgroundColor1"
          icon={
            <CH.Icon fontSize={18} as={AiOutlineFire} color="accentColor3" />
          }
          size="sm"
          aria-label="Game statistic"
          onClick={() => onOpen()}
        />
        {!isIOS && (
          <CH.IconButton
            backgroundColor="backgroundColor1"
            icon={
              <CH.Icon
                fontSize={18}
                as={opened ? AiOutlineFullscreenExit : AiOutlineFullscreen}
              />
            }
            size="sm"
            aria-label=""
            onClick={fullScreenHandler}
          />
        )}
      </CH.Flex>
    </CH.Flex>
  );
};

export default Controls;

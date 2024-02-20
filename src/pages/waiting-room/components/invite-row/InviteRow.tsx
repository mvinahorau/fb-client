import React from "react";
import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { routes } from "configs";

type InviteRowProps = {
  gameSlug: string | undefined;
};

const InviteRow: React.FC<InviteRowProps> = (gameSlug) => {
  const { t } = useTranslation();
  const inviteLink = `${window.location.origin}${routes.startGame}?gameSlug=${gameSlug.gameSlug}`;
  const { onCopy } = CH.useClipboard(inviteLink);
  const toast = CH.useToast();

  const handleCopy = () => {
    onCopy();
    toast({
      title: t("waitingRoom.copied"),
      position: "top",
      status: "success",
      duration: 3000,
      isClosable: false,
    });
  };

  return (
    <CH.Flex gap={2} mb={10}>
      <CH.FormControl variant="floating" isInvalid>
        <CH.Input placeholder=" " defaultValue={inviteLink} readOnly></CH.Input>
        <CH.FormLabel>{t("waitingRoom.inviteLink")}</CH.FormLabel>
      </CH.FormControl>
      <CH.Button onClick={handleCopy}>{t("waitingRoom.copy")}</CH.Button>
    </CH.Flex>
  );
};

export default InviteRow;

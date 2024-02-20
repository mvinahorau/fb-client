import React from "react";
import * as CH from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BiUser, BiChevronDown } from "react-icons/bi";
import { useAvatarsQuery, Avatar } from "data-access";
import { animationBox } from "./duck";

import defaultAvatar from "./assets/images/default-avatar.jpg";

type AvatarSelectorProps = {
  avatar: Avatar;
  setAvatar: React.Dispatch<React.SetStateAction<Avatar>>;
  modalOpen: boolean;
};

const AvatarSelector: React.FC<AvatarSelectorProps> = ({
  avatar,
  setAvatar,
  modalOpen,
}) => {
  const { t } = useTranslation();
  const { data, loading } = useAvatarsQuery();
  const { isOpen, onOpen, onClose } = CH.useDisclosure();
  const handleAvatarClick = ({ id, src }: Avatar) => {
    setAvatar({ id, src });
    onClose();
  };
  React.useEffect(() => {
    modalOpen && onOpen();
  }, [modalOpen]);

  if (loading) {
    return (
      <CH.Box
        w="60px"
        minW="60px"
        h="60px"
        minH="60px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="100%"
        boxShadow="0px 0px 0px 2px backgroundColor3"
        bg="rgba(255,255,255,0.1)"
      >
        <CH.Spinner size="sm" color="white.500" />
      </CH.Box>
    );
  }

  return (
    <>
      <CH.Box
        position="relative"
        w="60px"
        minW="60px"
        h="60px"
        minH="60px"
        borderRadius="100%"
        boxShadow="0px 0px 0px 2px rgba(255,255,255,0.1)"
        cursor="pointer"
        onClick={onOpen}
        as={motion.div}
        animation={!avatar.id && !isOpen ? animationBox : {}}
      >
        {!avatar.id ? (
          <CH.Flex
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="linear-gradient(135deg, rgba(92,215,207,1) 0%, rgba(35,132,125,1) 100%)"
            borderRadius="100%"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
          >
            <BiUser size="1.5rem" />
          </CH.Flex>
        ) : (
          <CH.Flex
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            borderRadius="100%"
            overflow="hidden"
          >
            <CH.Image
              src={avatar?.src || ""}
              alt={t("avatarSelector.modalHeader") || "User Avatar"}
              fallbackSrc={defaultAvatar}
            />
          </CH.Flex>
        )}
        <CH.Flex
          position="absolute"
          bottom="0"
          right="0"
          w="1.125rem"
          h="1.125rem"
          bg="#FC8D0C"
          borderRadius="100%"
          alignItems="center"
          justifyContent="center"
        >
          <BiChevronDown />
        </CH.Flex>
      </CH.Box>
      {/* Modals */}
      <CH.Modal size="sm" isOpen={isOpen} onClose={onClose} isCentered>
        <CH.ModalOverlay backdropFilter="blur(1.5px)" />
        <CH.ModalContent mx={4}>
          <CH.ModalHeader>{t("avatarSelector.modalHeader")}</CH.ModalHeader>
          <CH.ModalCloseButton />
          <CH.ModalBody
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
          >
            {data?.avatars?.map((item) => (
              <CH.Box
                id={item?.id || ""}
                w="60px"
                minW="60px"
                h="60px"
                minH="60px"
                borderRadius="100%"
                boxShadow={
                  avatar.id === item?.id
                    ? "0px 0px 0px 2px #FC8D0C"
                    : "0px 0px 0px 2px rgba(255,255,255,0.1)"
                }
                cursor="pointer"
                overflow="hidden"
                key={item?.id}
                onClick={() =>
                  handleAvatarClick({ id: item?.id, src: item?.src })
                }
              >
                <CH.Image
                  src={item?.src || ""}
                  alt={t("avatarSelector.modalHeader") || "Avatar"}
                  fallbackSrc={defaultAvatar}
                />
              </CH.Box>
            ))}
          </CH.ModalBody>
          <CH.ModalFooter></CH.ModalFooter>
        </CH.ModalContent>
      </CH.Modal>
    </>
  );
};

export default AvatarSelector;

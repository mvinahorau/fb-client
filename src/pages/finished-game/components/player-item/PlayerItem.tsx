import React from "react";
import * as CH from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AiOutlineCrown } from "react-icons/ai";
import { Player, ChakraBox } from "duck";

type PlayerItemType = {
  index: number;
  player: Player;
};

const PlayerItem: React.FC<PlayerItemType> = ({ index, player }) => {
  const { t } = useTranslation();
  const timer = 0.25;
  return (
    <ChakraBox
      as={motion.div}
      initial={{
        opacity: 0,
      }}
      animate={{
        x: ["-50px", "0px"],
        opacity: [0, 1],
        transition: {
          duration: "0.3",
          delay: timer + index * 0.2,
        },
      }}
    >
      <CH.Flex alignItems="center" justifyContent="center" gap={4}>
        <CH.Flex>
          <CH.Text fontWeight="bold" fontSize="1.25rem" lineHeight="1.2">
            {index + 1 + "."}
          </CH.Text>
        </CH.Flex>
        <CH.Flex
          position="relative"
          w="100%"
          h="100%"
          pl={4}
          pr={2}
          py={2}
          borderRadius="1.25rem"
          border="2px solid"
          bg="backgroundColor3"
          borderColor={index === 0 ? "accentColor3" : "backgroundColor4"}
        >
          <CH.Flex position="absolute" top="-0.825rem" left="4.5rem" gap={1}>
            {index === 0 && (
              <CH.Tag size="xs" bg="accentColor3">
                <CH.Icon
                  fontSize="12px"
                  mt="-1px"
                  mr={0.5}
                  as={AiOutlineCrown}
                />
                {t("game.winner")}
              </CH.Tag>
            )}
          </CH.Flex>
          <CH.Flex
            alignItems="center"
            justifyContent="space-between"
            mt={2}
            mb={3}
            w="100%"
            overflow="hidden"
          >
            <CH.Flex
              position="relative"
              zIndex="1"
              alignItems="center"
              overflow="hidden"
            >
              <CH.Box
                position="relative"
                w={{ base: "3rem", md: "2.5rem" }}
                minW={{ base: "3rem", md: "2.5rem" }}
                h={{ base: "3rem", md: "2.5rem" }}
                minH={{ base: "3rem", md: "2.5rem" }}
                borderRadius="100%"
                border="2px solid"
                mr={2}
              >
                <CH.Image src={player.user.avatar} alt="Avatar" />
              </CH.Box>
              <CH.Text
                fontWeight="bold"
                fontSize="1.25rem"
                lineHeight="1.2"
                isTruncated
              >
                {player.user.nickname}
              </CH.Text>
            </CH.Flex>
            <CH.Flex gap={{ base: 2, md: 3 }} mr={2}>
              <CH.Box>
                <CH.Text
                  fontWeight="bold"
                  fontSize={{ base: "0.75rem", md: "0.75rem" }}
                  lineHeight="1.2"
                  color="textColor2"
                  textAlign="center"
                >
                  Total
                </CH.Text>
                <CH.Text
                  fontWeight="bold"
                  fontSize={{ base: "1.5rem", md: "1.5rem" }}
                  lineHeight="1.2"
                  color="textColor1"
                  textAlign="center"
                >
                  {player.score}
                </CH.Text>
              </CH.Box>
            </CH.Flex>
          </CH.Flex>
        </CH.Flex>
      </CH.Flex>
    </ChakraBox>
  );
};

export default PlayerItem;

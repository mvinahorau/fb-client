import React from "react";
import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { RoundTable } from "duck";

type ResultsNarratorProps = {
  roundPhrase: string;
  roundTable: RoundTable[];
};

const ResultsNarrator: React.FC<ResultsNarratorProps> = ({
  roundPhrase,
  roundTable,
}) => {
  const { t } = useTranslation();
  const { narrator } = roundTable[0];

  return (
    <CH.Flex ml={3} mt={3} mb={8} position="relative" zIndex="1">
      <CH.Box
        position="relative"
        w="60px"
        minW="60px"
        h="60px"
        minH="60px"
        borderRadius="100%"
        boxShadow="0px 0px 0px 10px rgba(255,255,255,0.1)"
        mt={10}
        mr={1}
      >
        <CH.Image
          src={narrator.avatar}
          alt={t("avatarSelector.modalHeader") || "Avatar"}
        />
      </CH.Box>
      <CH.Flex alignItems="start">
        {/* Dots */}
        <CH.Flex mt={8} mr={1}>
          <CH.Box position="relative" w="1.5rem" h="1.5rem">
            <CH.Box
              w="5px"
              h="5px"
              bg="#A3A3A3"
              borderRadius="100%"
              position="absolute"
              bottom="0"
              left="0"
            />
            <CH.Box
              w="7px"
              h="7px"
              bg="#C1C1C1"
              borderRadius="100%"
              position="absolute"
              bottom="7px"
              left="3px"
            />
            <CH.Box
              w="11px"
              h="11px"
              bg="#E3E3E3"
              borderRadius="100%"
              position="absolute"
              top="0"
              right="0"
            />
          </CH.Box>
        </CH.Flex>
        {/* Phrase */}
        <CH.Box
          px="0.75rem"
          py="0.5rem"
          bg="#fff"
          borderRadius="0.875rem"
          boxShadow="0px 0px 0px 3px rgba(252,141,12,1)"
          m="5px"
        >
          <CH.Text
            color="#6D6D6D"
            fontWeight="bold"
            fontSize="0.875rem"
            lineHeight="1.2"
          >
            {narrator.nickname}
          </CH.Text>
          <CH.Text
            color="#171717"
            fontWeight="bold"
            fontSize="1rem"
            lineHeight="1.2"
          >
            {roundPhrase}
          </CH.Text>
        </CH.Box>
      </CH.Flex>
    </CH.Flex>
  );
};

export default ResultsNarrator;

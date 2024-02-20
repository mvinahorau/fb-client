import React from "react";
import * as CH from "@chakra-ui/react";
import { AiOutlineCrown } from "react-icons/ai";
import { motion } from "framer-motion";
import { RoundTable, ChakraBox, Score } from "duck";
import cardImageNoBoarder from "assets/images/card_back_noborder.svg";
import { useTranslation } from "react-i18next";

type ResultsCardProps = {
  score: Score;
  index: number;
  roundTable: RoundTable[];
};

const ResultsCard: React.FC<ResultsCardProps> = ({
  index,
  score,
  roundTable,
}) => {
  const { t } = useTranslation();
  const card: RoundTable[] = roundTable.filter(
    (item) => item.owner.id === score.userId
  );
  const { isNarratorCard, owner, src, votes } = card[0];
  const timer = 1;
  const roundScore = score.score - score.prevScore;
  const totalScore = score.score;

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
      exit={{
        opacity: [1, 0],
        transition: {
          duration: "0.3",
        },
      }}
    >
      <CH.Flex
        position="relative"
        key={score.userId}
        w="100%"
        h="100%"
        px={2}
        py={2}
        borderRadius="1.25rem"
        border="2px solid"
        borderColor={
          isNarratorCard || index === 0 ? "accentColor3" : "backgroundColor4"
        }
        bg="backgroundColor3"
      >
        <CH.Flex
          position="absolute"
          top="-0.825rem"
          left="50%"
          transform="translateX(-50%)"
          gap={1}
        >
          {isNarratorCard && (
            <CH.Tag size="xs" bg="accentColor3">
              {t("game.storyteller")}
            </CH.Tag>
          )}
          {index === 0 && (
            <CH.Tag size="xs" bg="accentColor3">
              <CH.Icon fontSize="12px" mt="-1px" mr={0.5} as={AiOutlineCrown} />
              {t("game.leader")}
            </CH.Tag>
          )}
        </CH.Flex>
        <CH.Box w="4rem" minW="4rem" mr={3}>
          <CH.Image
            src={src}
            fallbackSrc={cardImageNoBoarder}
            borderRadius="xl"
            border="2px solid"
            borderColor="backgroundColor4"
          />
        </CH.Box>
        <CH.Flex flexDirection="column" w="100%" overflow="hidden">
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
                w={{ base: "2rem", md: "2.5rem" }}
                minW={{ base: "2rem", md: "2.5rem" }}
                h={{ base: "2rem", md: "2.5rem" }}
                minH={{ base: "2rem", md: "2.5rem" }}
                borderRadius="100%"
                border="2px solid"
                borderColor={
                  isNarratorCard ? "accentColor3" : "backgroundColor4"
                }
                mr={2}
              >
                <CH.Image src={owner.avatar} alt="Avatar" />
              </CH.Box>
              <CH.Text
                fontWeight="bold"
                fontSize="1rem"
                lineHeight="1.2"
                isTruncated
              >
                {owner.nickname}
              </CH.Text>
            </CH.Flex>
            <CH.Flex gap={{ base: 2, md: 3 }} mr={2}>
              <CH.Box>
                <CH.Text
                  fontWeight="bold"
                  fontSize={{ base: "0.625rem", md: "0.75rem" }}
                  lineHeight="1.2"
                  color="textColor2"
                  textAlign="center"
                >
                  Round
                </CH.Text>
                <CH.Text
                  fontWeight="bold"
                  fontSize={{ base: "1.25rem", md: "1.5rem" }}
                  lineHeight="1.2"
                  color="textColor1"
                  textAlign="center"
                >
                  {roundScore ? `+${roundScore}` : "0"}
                </CH.Text>
              </CH.Box>
              <CH.Box>
                <CH.Text
                  fontWeight="bold"
                  fontSize={{ base: "0.625rem", md: "0.75rem" }}
                  lineHeight="1.2"
                  color="textColor2"
                  textAlign="center"
                >
                  Total
                </CH.Text>
                <CH.Text
                  fontWeight="bold"
                  fontSize={{ base: "1.25rem", md: "1.5rem" }}
                  lineHeight="1.2"
                  color="textColor1"
                  textAlign="center"
                >
                  {totalScore}
                </CH.Text>
              </CH.Box>
            </CH.Flex>
          </CH.Flex>
          <CH.Box>
            <CH.Text
              fontWeight="bold"
              fontSize="0.75rem"
              lineHeight="1.2"
              color="textColor2"
              mb={1}
            >
              Votes:
            </CH.Text>
            <CH.Text
              fontWeight="bold"
              fontSize="1rem"
              lineHeight="1.2"
              color="textColor1"
              mb={1}
            >
              {votes.length ? votes.join(", ") : "-"}
            </CH.Text>
          </CH.Box>
        </CH.Flex>
      </CH.Flex>
    </ChakraBox>
  );
};

export default ResultsCard;

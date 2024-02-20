import React from "react";
import * as CH from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BiSkipNext, BiCalendarStar } from "react-icons/bi";
import { ChakraBox, GameContext, RoundTable, Score } from "duck";
import { ResultsCard, ResultsNarrator } from "./components";
import { compare } from "./duck";

type RoundResultsProps = {
  scores: Score[];
  roundPhrase: string;
  roundTable: RoundTable[];
  nextRoundHandler: Function;
  opened: boolean;
  isFinishedGame: boolean;
};

const RoundResults: React.FC<RoundResultsProps> = ({
  scores,
  roundTable,
  roundPhrase,
  nextRoundHandler,
  opened,
  isFinishedGame,
}) => {
  const { t } = useTranslation();
  const {
    state: { game },
  } = React.useContext(GameContext);
  const isFinished = isFinishedGame || game.status === "finished" || false;

  return (
    <AnimatePresence>
      {opened && roundTable.length && (
        <ChakraBox
          display="flex"
          flexDirection="column"
          flex="1"
          maxHeight="100%"
          as={motion.div}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 0.3,
            },
          }}
          exit={{
            opacity: [1, 0],
            transition: {
              duration: 0.1,
            },
          }}
        >
          <ResultsNarrator roundPhrase={roundPhrase} roundTable={roundTable} />
          <CH.HStack mt={4} mb={4}>
            <CH.Heading fontSize="1.75rem">{t("game.roundResults")}</CH.Heading>
          </CH.HStack>
          <CH.Box
            flex="1"
            overflowX="hidden"
            overflowY="scroll"
            mt={-3}
            mx={-4}
            pt={3}
            px={4}
            mb={6}
            pb={20}
          >
            <CH.SimpleGrid columns={1} spacing={4}>
              <AnimatePresence>
                {scores.sort(compare).map((score, index) => (
                  <ResultsCard
                    key={score.userId}
                    score={score}
                    index={index}
                    roundTable={roundTable}
                  />
                ))}
                {/* {roundTable.sort(compare).map((card, index) => (
                  <ResultsCard
                    key={card.src}
                    card={card}
                    index={index}
                    scores={scores}
                  />
                ))} */}
              </AnimatePresence>
            </CH.SimpleGrid>
          </CH.Box>
          <CH.Flex
            position="absolute"
            bottom={0}
            left={0}
            w="100%"
            pt={10}
            pb={6}
            px={6}
            justifyContent="end"
            bgGradient="linear(transparent 0%, backgroundColor1 50%)"
            borderBottomLeftRadius="50"
            borderBottomRightRadius="50"
          >
            <CH.Button
              size={{ base: "md", md: "lg" }}
              px={4}
              zIndex="1"
              rightIcon={!isFinished ? <BiSkipNext /> : <BiCalendarStar />}
              onClick={() => nextRoundHandler(isFinished)}
            >
              {!isFinished ? t("game.nextRound") : t("game.showResults")}
            </CH.Button>
          </CH.Flex>
        </ChakraBox>
      )}
    </AnimatePresence>
  );
};

export default RoundResults;

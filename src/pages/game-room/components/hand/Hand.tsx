import React from "react";
import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChakraBox } from "duck";
import { socketClient } from "configs";
import { HandCardModal, HandTag } from "./components";
import cardImageNoBoarder from "assets/images/card_back_noborder.svg";

const Hand: React.FC = () => {
  const { t } = useTranslation();
  const [hand, setHand] = React.useState([]);
  const { isOpen, onOpen, onClose } = CH.useDisclosure();
  const [activeCard, setActiveCard] = React.useState<any>({});

  React.useEffect(() => {
    socketClient().emit("hand:get");
    socketClient().on("hand", (hand) => {
      setHand(hand);
    });
  }, []);

  const imageClickHandler = (id: string, src: string) => {
    onOpen();
    setActiveCard({ id, src });
  };

  return (
    <ChakraBox
      as={motion.div}
      display="flex"
      flexDirection="column"
      flex="1"
      overflow="hidden"
      mx={{ base: -6, md: -8 }}
      px={{ base: 6, md: 8 }}
      mb={{ base: -6, md: -8 }}
      pb={{ base: 6, md: 8 }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1],
        transition: {
          duration: "0.5",
          ease: "linear",
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: "0.3",
          ease: "linear",
        },
      }}
    >
      <CH.HStack mt={4} mb={4}>
        <CH.Heading fontSize="1.75rem">{t("game.myHand")}</CH.Heading>
        <CH.Spacer />
        <HandTag />
      </CH.HStack>
      <CH.Box
        flex="1"
        overflowX="visible"
        overflowY="scroll"
        mt={-2}
        mb={{ base: -6, md: -8 }}
        mx={{ base: -6, md: -8 }}
        pt={2}
        px={{ base: 6, md: 8 }}
      >
        <CH.SimpleGrid columns={3} spacing={2} mb={12}>
          {hand.map((card: any) => (
            <CH.Box
              key={card.src}
              w="100%"
              h="100%"
              borderRadius="xl"
              border="3px solid"
              overflow="hidden"
              onClick={() => imageClickHandler(card.id, card.src)}
              _hover={{ transform: "scale(1.05)" }}
              transition="all ease 0.3s"
              cursor="pointer"
            >
              <CH.Image
                w="100%"
                src={card.src || ""}
                fallbackSrc={cardImageNoBoarder}
              />
            </CH.Box>
          ))}
        </CH.SimpleGrid>
      </CH.Box>
      <HandCardModal
        isOpen={isOpen}
        onClose={onClose}
        hand={hand}
        setActiveCard={setActiveCard}
        activeCard={activeCard}
      />
    </ChakraBox>
  );
};

export default Hand;

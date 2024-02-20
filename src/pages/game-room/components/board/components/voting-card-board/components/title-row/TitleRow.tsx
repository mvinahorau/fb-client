import * as React from "react";
import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Tag } from "../";
import { ChakraBox } from "duck";
import { motion } from "framer-motion";

type TitleRowProps = {
  voted: boolean;
};

const TitleRow: React.FC<TitleRowProps> = ({ voted }) => {
  const { t } = useTranslation();

  return (
    <ChakraBox
      as={motion.div}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.3,
          duration: 0.4,
        },
      }}
      exit={{
        opacity: [1, 0],
        transition: {
          duration: "0.3",
        },
      }}
    >
      <CH.HStack mt={4} mb={4}>
        <CH.Heading fontSize="1.75rem">{t("game.votingBoard")}</CH.Heading>
        <CH.Spacer />
        <Tag voted={voted} />
      </CH.HStack>
    </ChakraBox>
  );
};

export default TitleRow;

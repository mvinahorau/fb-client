import React from "react";
import * as CH from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChakraBox } from "duck";

type WaitingItemProps = {
  nickname: string;
};

const WaitingItem: React.FC<WaitingItemProps> = ({ nickname }) => {
  return (
    <ChakraBox
      as={motion.div}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      transition={{
        duration: "0.4",
      }}
    >
      <CH.Tag bg="backgroundColor3" size="xs">
        {nickname}
      </CH.Tag>
    </ChakraBox>
  );
};

export default WaitingItem;

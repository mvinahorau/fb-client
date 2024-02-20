import React from "react";
import * as CH from "@chakra-ui/react";

type ContainerProps = {
  children?: React.ReactElement;
  props?: any;
};

const WebsiteContainer: React.FC<ContainerProps> = ({ children, props }) => {
  return (
    <CH.Flex flexDirection="column" maxW="1366px" px={{ base: 4, md: 8 }} mx="auto" {...props}>
      {children}
    </CH.Flex>
  );
};

export default WebsiteContainer;

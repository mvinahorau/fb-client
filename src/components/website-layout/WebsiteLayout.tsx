import React from "react";
import { Outlet } from "react-router-dom";
import * as CH from "@chakra-ui/react";

type WebsiteLayoutProps = {
  children?: React.ReactElement;
};

const WebsiteLayout: React.FC<WebsiteLayoutProps> = ({ children }) => {
  return (
    <CH.Flex
      flexDirection="column"
      position="relative"
      minH={{base: "100%", md: "100vh"}}
      overflow="hidden"
    >
      <React.Suspense fallback={null}>
        {children}
        <Outlet />
      </React.Suspense>
    </CH.Flex>
  );
};

export default WebsiteLayout;

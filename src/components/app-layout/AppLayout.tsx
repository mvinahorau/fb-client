import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import * as CH from "@chakra-ui/react";
import BackgroundImage from "./assets/background.svg";

type AppLayoutProps = {
  children?: React.ReactElement;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isWebpages = () => {
    if (location.pathname === "/" || location.pathname === "/support-us") {
      return true;
    }
    return false;
  };

  return (
    <CH.Flex
      flexDirection="column"
      position="relative"
      maxW={isWebpages() ? "100%" : { base: "3xl", md: "xl" }}
      my={isWebpages() ? 0 : { base: 0, md: 6 }}
      mx="auto"
      boxShadow="md"
      h={
        isWebpages() ? "100vh" : { base: "100vh", md: "calc(100vh - 3.25rem)" }
      }
      p={isWebpages() ? 0 : { base: 6, md: 8 }}
      borderRadius={{ md: "xl" }}
      overflow="hidden"
      bgImage={isWebpages() ? "none" : BackgroundImage}
      bgSize="cover"
      bgPosition="center"
    >
      <React.Suspense fallback={null}>
        {children}
        <Outlet />
      </React.Suspense>
    </CH.Flex>
  );
};

export default AppLayout;

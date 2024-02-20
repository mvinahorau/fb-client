import React from 'react'
import * as CH from "@chakra-ui/react";
import * as C from "components"
import Logo from "./assets/images/logo.svg"

const Header = () => {
  return (
    <header>
      <C.WebsiteContainer>
        <CH.Flex
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          py={4}
        >
          <CH.Link href="/">
            <CH.Image
              src={Logo}
              alt="Fabletopia logo"
              htmlWidth="193"
              htmlHeight="64"
            ></CH.Image>
          </CH.Link>
          <C.LangSelector />
        </CH.Flex>
      </C.WebsiteContainer>
    </header>
  );
}

export default Header
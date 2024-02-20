import React from "react";
import * as CH from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { theme, apolloClient } from "configs";
import { AuthProvider } from "components";
import AppRouter from "./AppRouter";

const AppProvider: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <CH.ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      <CH.ChakraProvider theme={theme}>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </CH.ChakraProvider>
    </BrowserRouter>
  </ApolloProvider>
);

export default AppProvider;

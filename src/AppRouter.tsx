import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AppLayout, Preloader } from "components";
import { useAuth } from "hooks";
import { routes } from "configs";
import * as Pages from "./pages";

const AppRouter: React.FC = () => {
  const { auth } = useAuth();

  if (auth?.isAuthenticating) {
    return (
      <AppLayout>
        <Preloader />
      </AppLayout>
    );
  }
  return (
    <Routes>
      <Route path={routes.intro} element={<Pages.Intro />} />
      <Route path={routes.supportUs} element={<Pages.SupportUs />} />
      <Route path="*" element={<Pages.Intro />} />
      <Route path="/" element={<AppLayout />}>
        <Route path={routes.startGame} element={<Pages.StartGame />} />
        <Route path={routes.waitingRoom} element={<Pages.WaitingRoom />} />
        <Route path={routes.game} element={<Pages.GameRoom />} />
        <Route path={routes.finishedGame} element={<Pages.FinishedGame />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

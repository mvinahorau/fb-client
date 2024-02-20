import React from "react";
import { Helmet } from "react-helmet";
import * as CH from "@chakra-ui/react";
import { generatePath, useNavigate } from "react-router-dom";
import { useAuth, useQuery } from "hooks";
import { useTranslation } from "react-i18next";
import { Avatar, CreateGameInput, useStartGameMutation } from "data-access";
import { AvatarSelector, LangSelector } from "components";
import { getFromLocalStorage, setToLocalStorage } from "utils";
import { routes, socketClient } from "configs";
import * as CC from "components"

const StartGame: React.FC = () => {
  const { t } = useTranslation();
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const toast = CH.useToast();
  const query = useQuery();
  const queryGameSlug = query.get("gameSlug");
  const [avatar, setAvatar] = React.useState<Avatar>(auth?.user?.avatar || {});
  const [nickname, setNickname] = React.useState(auth?.user?.nickname || "");
  const [startGameMutation, { loading }] = useStartGameMutation();
  const [modalOpen, setModalOpen] = React.useState(false);

  const title = "Start New Game | Fabletopia"
  const description = "Embark on a new adventure in Fabletopia, the Dixit-based online game. Unleash your imagination and immerse yourself in a world of wonder and enchantment. Create captivating stories with your friends and explore the mysteries of Fabletopia. Start your journey today and experience the magic!"
  const canonical = "http://fabletopia.games/start-game"

  const handlerCreateGame = (input: CreateGameInput): any => {
    if (!avatar.id) {
      setModalOpen(!modalOpen);
    } else {
      startGameMutation({
        variables: {
          input: {
            ...input,
            ...(queryGameSlug ? { slug: queryGameSlug } : {}),
            ...(auth?.user?.id ? { userId: auth.user.id } : {}),
          },
        },
      }).then((res) => {
        if (res.data?.startGame?.game?.status === "waiting") {
          const playerId = res.data?.startGame?.player?.id;
          const gameSlug = res.data?.startGame?.game?.slug;

          if (playerId && !getFromLocalStorage("token")) {
            setToLocalStorage("token", playerId);
            setAuth({
              isAuthenticating: false,
              user: res.data?.startGame?.player,
              token: res.data?.startGame?.player?.id,
              isLoggedIn: true,
            });
            socketClient(playerId);
          }

          if (gameSlug) {
            navigate(generatePath(routes.waitingRoom, { gameSlug }));
          }
        } else {
          toast({
            title: t("waitingRoom.startedGame"),
            position: "top",
            status: "warning",
            duration: 5000,
            isClosable: false,
          });
          setTimeout(() => {
            navigate("/");
          }, 5000);
        }
      });
    }
  };

  return (
    <>
      <CC.Seo title={title} description={description} canonical={canonical} />
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <CH.Flex h="100%" flexDirection="column">
        <CH.Flex justifyContent="end" mb={12}>
          <LangSelector />
        </CH.Flex>
        <CH.Box mb={12}>
          <CH.Heading fontSize="5xl" whiteSpace="pre-line">
            {t("startGame.title")}
          </CH.Heading>
          {queryGameSlug && (
            <CH.Text mt={4} fontSize={18} color="textColor2">
              {t("startGame.invitedSubtitle")}
            </CH.Text>
          )}
        </CH.Box>
        <CH.Flex direction="column" mb={10}>
          <CH.Flex mb={8} gap={4}>
            <AvatarSelector
              avatar={avatar}
              setAvatar={setAvatar}
              modalOpen={modalOpen}
            />
            <CH.FormControl variant="floating" isInvalid>
              <CH.Input
                placeholder=" "
                defaultValue={nickname}
                onChange={(e) => setNickname(e.currentTarget.value)}
              />
              <CH.FormLabel>{t("startGame.nickname")}</CH.FormLabel>
            </CH.FormControl>
          </CH.Flex>
          <CH.Button
            isDisabled={!nickname}
            isLoading={loading}
            onClick={() =>
              handlerCreateGame({ nickname: nickname, avatar: avatar.id })
            }
          >
            {t(`startGame.${queryGameSlug ? "joinGame" : "createGame"}`)}
          </CH.Button>
        </CH.Flex>
        <CH.Spacer />
      </CH.Flex>
    </>
  );
};

export default StartGame;

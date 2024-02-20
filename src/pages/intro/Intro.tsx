import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import * as CC from "components";
import * as C from "./components";
import BackgroundImage from "./assets/images/background.svg";

const Intro = () => {
  const title = "Fabletopia - Dixit Based Online Game";
  const description =
    "Experience the wonder and enchantment of Fabletopia, the online game inspired by the popular board game Dixit. Create imaginative and captivating stories with your friends in a whimsical world full of mystery and magic. Play Fabletopia today and unleash your creativity!";
  const canonical = "http://fabletopia.games";
  const navigate = useNavigate();
  const { t } = useTranslation();

  
  return (
    <>
      <CC.Seo title={title} description={description} canonical={canonical} />
      <CC.WebsiteLayout>
        <CH.Flex
          flexDirection="column"
          position="relative"
          maxW="100%"
          minH={{ base: "100vh", md: "100vh" }}
          overflow="hidden"
          bgImage={BackgroundImage}
          bgSize="cover"
          bgPosition="center"
        >
          <CC.Header />
          <CH.Flex flex={1} flexDirection="column">
            <CC.WebsiteContainer props={{ flex: 1 }}>
              <CH.SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 8, md: 4 }}
                flex={1}
                h="100%"
                mt={{ base: 10, md: 4 }}
              >
                <CH.Flex
                  flexDirection="column"
                  justifyContent="center"
                  maxH={{ base: "auto", md: "800px" }}
                >
                  <CH.Heading
                    size={{ base: "2xl", md: "3xl" }}
                    mb={6}
                    dangerouslySetInnerHTML={{ __html: t("intro.title") }}
                  ></CH.Heading>
                  <CH.Text
                    w={{ base: "100%", md: "80%" }}
                    fontSize={{ base: "1.125rem", md: "1.25rem" }}
                    mb={10}
                    dangerouslySetInnerHTML={{ __html: t("intro.description") }}
                  ></CH.Text>
                  <CH.Flex gap={4} flexWrap="wrap">
                    <CH.Button
                      w="fit-content"
                      onClick={() => navigate("/start-game")}
                    >
                      {t("intro.playNow")}
                    </CH.Button>
                    <CH.Button
                      colorScheme="secondary"
                      w="fit-content"
                      onClick={() => navigate("/support-us")}
                    >
                      {t("intro.supportUs")}
                    </CH.Button>
                  </CH.Flex>
                </CH.Flex>
                <CH.Flex maxH={{ base: "auto", md: "800px" }}>
                  <C.IntroCards />
                </CH.Flex>
              </CH.SimpleGrid>
            </CC.WebsiteContainer>
          </CH.Flex>
          <CC.Footer />
        </CH.Flex>
      </CC.WebsiteLayout>
    </>
  );
};

export default Intro;

import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChakraBox } from "duck";
import * as CC from "components";
import Support from "./assets/images/support-min.png";
import BackgroundImage from "./assets/images/background.svg";

const Intro = () => {
  const title = "Support us | Fabletopia";
  const description =
    "Looking to support the development of Fabletopia Dixit, the adventurous and imaginative storytelling game? Look no further than our Support Us page! By contributing to Fabletopia Dixit, you'll help us continue to create unique and engaging gameplay experiences for players of all ages.";
  const canonical = "http://fabletopia.games/support-us";
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
                mb={10}
              >
                <CH.Flex
                  flexDirection="column"
                  maxH={{ base: "auto", md: "800px" }}
                >
                  <CH.Heading
                    size={{ base: "2xl", md: "2xl" }}
                    mt={{ base: "0", md: "15%" }}
                    mb={8}
                    dangerouslySetInnerHTML={{ __html: t("supportUs.title") }}
                  ></CH.Heading>

                  <Tabs variant="fabletopia" colorScheme="secondary">
                    <TabList>
                      <Tab>{t("supportUs.makeDonate")}</Tab>
                      <Tab>{t("supportUs.orderCard")}</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <CH.Text
                          w={{ base: "100%", md: "80%" }}
                          fontSize={{ base: "1rem", md: "1rem" }}
                          mb={6}
                          dangerouslySetInnerHTML={{
                            __html: t("supportUs.makeDonateDesc"),
                          }}
                        ></CH.Text>
                        <CH.Link
                          href="https://www.paypal.com/donate/?hosted_button_id=EX8GK3A5VNVSL"
                          isExternal
                        >
                          <CH.Button
                            colorScheme="primary"
                            size="md"
                            w="fit-content"
                          >
                            {t("supportUs.donateUsBtn")}
                          </CH.Button>
                        </CH.Link>
                      </TabPanel>
                      <TabPanel>
                        <CH.Text
                          w={{ base: "100%", md: "80%" }}
                          fontSize={{ base: "1rem", md: "1rem" }}
                          mb={6}
                          dangerouslySetInnerHTML={{
                            __html: t("supportUs.orderCardDesc"),
                          }}
                        ></CH.Text>
                        <CH.Link
                          href="https://www.paypal.com/donate/?hosted_button_id=EX8GK3A5VNVSL"
                          isExternal
                        >
                          <CH.Button
                            colorScheme="primary"
                            size="md"
                            w="fit-content"
                          >
                            {t("supportUs.orderCardBtn")}
                          </CH.Button>
                        </CH.Link>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </CH.Flex>
                <CH.Flex
                  maxH={{ base: "auto", md: "800px" }}
                  alignItems="center"
                >
                  <ChakraBox
                    as={motion.div}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: [0, 1],
                      transition: {
                        delay: 0.2,
                        duration: "0.3",
                      },
                    }}
                  >
                    <CH.Image src={Support} w="100%" h="auto" htmlWidth="1000" htmlHeight="738" alt="Support Fabletopia team"></CH.Image>
                  </ChakraBox>
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

import React from "react";
import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChakraBox } from "duck";
import {
  animationDot1,
  animationDot2,
  animationDot3,
  animationBox,
} from "./duck";
import Girl from "./assets/images/girl.jpg";
import MainCard from "./assets/images/main-card.png";
import CardBack from "assets/images/card_back.svg";

const IntroCards = () => {
  const { t } = useTranslation();
  const [playAnimation, setPlayAnimation] = React.useState(false);
  const boxRef = React.useRef<any>();
  const boxW = boxRef.current?.clientWidth;
  const boxH = boxRef.current?.clientHeight;

  React.useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <CH.Flex position="relative" w="100%" h="100%" ref={boxRef}>
      <CH.Flex
        position="relative"
        zIndex="1"
        w="100%"
        h="100%"
        py={{ base: 10, sm: 0 }}
        alignItems="center"
        justifyContent="center"
      >
        <ChakraBox
          as={motion.div}
          position="relative"
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
          <CH.Box position="absolute" top={0} left={0}>
            <CH.Flex
              ml={{ base: "15px", sm: "-25px" }}
              mt="-40px"
              mb={8}
              position="relative"
              zIndex="1"
            >
              <CH.Box
                position="relative"
                w={{ base: "60px", sm: "80px" }}
                minW={{ base: "60px", sm: "80px" }}
                h={{ base: "60px", sm: "80px" }}
                minH={{ base: "60px", sm: "80px" }}
                borderRadius="100%"
                boxShadow="0px 0px 0px 10px rgba(255,255,255,0.1)"
                mt={10}
                mr={1}
                overflow="hidden"
              >
                <CH.Image
                  src={Girl}
                  alt="Players Avatar"
                  htmlWidth="100"
                  htmlHeight="100"
                />
              </CH.Box>
              <CH.Flex alignItems="start">
                {/* Dots */}
                <CH.Flex mt={8} mr={1}>
                  <CH.Box position="relative" w="1.5rem" h="1.5rem">
                    <CH.Box
                      w="5px"
                      h="5px"
                      bg="#A3A3A3"
                      borderRadius="100%"
                      position="absolute"
                      bottom="0"
                      left="0"
                      as={motion.div}
                      animation={animationDot1}
                    />
                    <CH.Box
                      w="7px"
                      h="7px"
                      bg="#C1C1C1"
                      borderRadius="100%"
                      position="absolute"
                      bottom="7px"
                      left="3px"
                      as={motion.div}
                      animation={animationDot2}
                    />
                    <CH.Box
                      w="11px"
                      h="11px"
                      bg="#E3E3E3"
                      borderRadius="100%"
                      position="absolute"
                      top="0"
                      right="0"
                      as={motion.div}
                      animation={animationDot3}
                    />
                  </CH.Box>
                </CH.Flex>
                {/* Phrase */}
                <CH.Box
                  pl="0.75rem"
                  pr="3rem"
                  py="0.75rem"
                  bg="#fff"
                  borderRadius="0.875rem"
                  m="5px"
                  as={motion.div}
                  animation={animationBox}
                >
                  <CH.Text
                    color="#6D6D6D"
                    fontWeight="bold"
                    fontSize="0.875rem"
                    lineHeight="1.2"
                  >
                    Vanessa
                  </CH.Text>
                  <CH.Text
                    color="#171717"
                    fontWeight="bold"
                    fontSize="1rem"
                    lineHeight="1.2"
                  >
                    {t("intro.phrase")}
                  </CH.Text>
                </CH.Box>
              </CH.Flex>
            </CH.Flex>
          </CH.Box>
          <CH.Flex alignItems="center" justifyContent="center">
            <CH.Image
              src={MainCard}
              w={{ base: "60%", sm: "65%" }}
              mx="auto"
              alt="Fabletopia main cart"
              htmlWidth="421"
              htmlHeight="743"
            ></CH.Image>
          </CH.Flex>
        </ChakraBox>
      </CH.Flex>
      {playAnimation && (
        <>
          <ChakraBox
            position="absolute"
            as={motion.div}
            zIndex="0"
            initial={{
              x: `${boxW + 300}px`,
              y: `-${boxH + 300}px`,
              rotateZ: "-60deg",
              scale: 1.6,
            }}
            animate={{
              x: [`${boxW + 300}px`, "0px"],
              y: [`-${boxH + 300}px`, `${boxH / 2}px`],
              rotateZ: ["-60deg", "-15deg"],
              scale: [1.6, 1],
              transition: {
                delay: 0.6,
                duration: "1",
                ease: [0.075, 0.82, 0.165, 1],
              },
            }}
          >
            <CH.Image
              src={CardBack}
              w={`${boxW / 3}px`}
              alt="Fabletopia cart back side"
              htmlWidth="120"
              htmlHeight="200"
            />
          </ChakraBox>
          <ChakraBox
            position="absolute"
            as={motion.div}
            zIndex="0"
            initial={{
              x: `${boxW + 300}px`,
              y: `-${boxH + 300}px`,
              rotateZ: "-60deg",
              scale: 1.6,
            }}
            animate={{
              x: [`${boxW + 300}px`, `${boxW - boxH / 3}px`],
              y: [`-${boxH + 300}px`, `${boxH / 2}px`],
              rotateZ: ["-60deg", "40deg"],
              scale: [1.6, 1],
              transition: {
                delay: 0.8,
                duration: "1",
                ease: [0.075, 0.82, 0.165, 1],
              },
            }}
          >
            <CH.Image
              src={CardBack}
              w={`${boxW / 3}px`}
              alt="Fabletopia cart back side"
              htmlWidth="120"
              htmlHeight="200"
            />
          </ChakraBox>
          <ChakraBox
            position="absolute"
            as={motion.div}
            zIndex="0"
            initial={{
              x: `${boxW + 300}px`,
              y: `-${boxH + 300}px`,
              rotateZ: "-60deg",
              scale: 1.6,
            }}
            animate={{
              x: [`${boxW + 300}px`, `${boxW / 1.5}px`],
              y: [`-${boxH + 300}px`, `${boxH / 8}px`],
              rotateZ: ["-60deg", "20deg"],
              scale: [1.6, 1],
              transition: {
                delay: 1,
                duration: "1",
                ease: [0.075, 0.82, 0.165, 1],
              },
            }}
          >
            <CH.Image
              src={CardBack}
              w={`${boxW / 3}px`}
              alt="Fabletopia cart back side"
              htmlWidth="120"
              htmlHeight="200"
            />
          </ChakraBox>
        </>
      )}
    </CH.Flex>
  );
};

export default IntroCards;

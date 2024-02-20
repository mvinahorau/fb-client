import * as CH from "@chakra-ui/react";

const Preloader = () => {
  return (
    <CH.Flex w="100%" h="100%" alignItems="center" justifyContent="center">
      <CH.Spinner size="lg" color="gray.500" />
    </CH.Flex>
  );
};

export default Preloader;

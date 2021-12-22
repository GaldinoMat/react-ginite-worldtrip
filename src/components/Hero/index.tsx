import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Flex
      w="100%"
      h={[220, 300]}
      py="7"
      px="4"
      color="white.HeroText"
      fontWeight="400"
      backgroundImage="url(Background.svg)"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      flexDirection={["column", "row"]}
      justifyContent="center"
      alignItems={["flex-start", "center"]}
    >
      <Box>
        <Heading
          mb="5"
          fontWeight="500"
          fontSize={["2xl", "4xl"]}
          maxW="30rem"
        >
          5 Continentes, infinitas possibilidades.
        </Heading>
        <Text color="gray.Text" fontSize={["lg", "xl"]} maxW="35rem" fontWeight="400">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Box>
        <Image src="Airplane.svg" alt="plane image" display={["none", "block"]} mt="5rem"/>
      </Box>
    </Flex>
  );
};

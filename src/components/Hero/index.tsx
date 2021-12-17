import { Box, Heading, Text } from "@chakra-ui/react"

export const Hero = () => {
  return (
    <Box maxH={375}
      py="7"
      px="4"
      color="white.HeroText"
      fontWeight="400"
      backgroundImage="url(Background.svg)"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Heading mb="5">5 continentes, infinitas possibilidades</Heading>
      <Text color="gray.Text" fontSize="lg">
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </Box>
  )
}

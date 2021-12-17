import { Box, Flex, Heading, HStack, Icon, Image, Text } from "@chakra-ui/react"
import { InfoOutlineIcon } from "@chakra-ui/icons"

export const Continent = () => {
  return (
    <Flex flexDirection="column">
      <Box>
        <Image />
        <Heading>Post title</Heading>
      </Box>
      <Flex flexDirection="column">
        <Box>
          <Text>Posts text</Text>
        </Box>
        <Flex>
          <HStack>
            <Text>Number of countries</Text>
            <Text>Number of languages</Text>
            <Text>Number of cities <InfoOutlineIcon /></Text>
          </HStack>
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <Heading>Cidades +100</Heading>
        <Box>
          <Image />
          <Flex>
            <Box>
              <Heading>
                Titulo da cidade
              </Heading>
              <Text>Pais da cidade</Text>
            </Box>
            <Image />
            <Box></Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Continent
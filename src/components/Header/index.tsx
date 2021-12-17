import { Flex, Image } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Flex as="header" h={50} align="center" justify="center" py=".9375rem">
      <Image src="/Logo.svg" alt="worldtrip logo" />
    </Flex>
  )
}

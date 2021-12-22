import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BulletListIcon } from "./BulletListIcon";

interface ICTAListItemProps {
  text: string;
  last?: boolean;
  imageThumb: string | undefined;
  alt: string;
}

export const CTAListItem = ({
  text,
  last = false,
  imageThumb,
  alt = "alt image text",
}: ICTAListItemProps) => {
  if (last) {
    return (
      <Flex
        fontSize="2xl"
        mb={["1.6875rem", "0"]}
        my="0"
        mx={["auto", "0"]}
        flexDirection={["row", "column"]}
        justifyContent="center"
        alignItems="center"
      >
        <Box display={["block", "none"]}>
          <BulletListIcon />
        </Box>
        <Box display={["none", "block"]}>
          <Image src={imageThumb} alt={alt} h="4.375rem" w="5rem"/>
        </Box>
        <Text fontWeight="semibold" color="gray.Headings" mt="1.5rem">
          {text}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      fontSize="2xl"
      mb={["1.6875rem", "0"]}
      my="0"
      mx={["auto", "0"]}
      flexDirection={["row", "column"]}
      justifyContent="center"
      alignItems="center"
    >
      <Box display={["block", "none"]}>
        <BulletListIcon />
      </Box>
      <Box display={["none", "block"]}>
        <Image src={imageThumb} alt={alt} h="4.375rem" w="5rem"/>
      </Box>
      <Text fontWeight="600" color="gray.Headings" mt="1.5rem">
        {text}
      </Text>
    </Flex>
  );
};

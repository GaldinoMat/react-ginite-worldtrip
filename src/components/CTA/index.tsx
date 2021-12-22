import { Flex } from "@chakra-ui/react";
import { CTAListItem } from "./CTAListItem";

export const CTA = () => {
  return (
    <Flex
      my={[9, 14]}
      px={["2rem", "15rem"]}
      w="100%"
      wrap="wrap"
      alignItems="center"
      justifyContent="space-between"
      color="gray.Headings"
    >
      <CTAListItem
        text="vida noturna"
        imageThumb="NightLife.svg"
        alt="nightlife"
      />
      <CTAListItem text="praia" imageThumb="Beach.svg" alt="beach" />
      <CTAListItem text="moderno" imageThumb="Modern.svg" alt="modern" />
      <CTAListItem text="clássico" imageThumb="Classic.svg" alt="classic" />
      <CTAListItem
        text="e mais..."
        last={true}
        imageThumb="World.svg"
        alt="more"
      />
    </Flex>
  );
};

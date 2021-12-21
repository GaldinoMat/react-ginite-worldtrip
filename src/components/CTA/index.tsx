import { Flex } from "@chakra-ui/react";
import { CTAListItem } from "./CTAListItem";

export const CTA = () => {
  return (
    <Flex
      m={9}
      px="2rem"
      w="100%"
      wrap="wrap"
      alignItems="center"
      justifyContent="space-between"
      color="gray.Headings"
    >
      <CTAListItem text="vida noturna" />
      <CTAListItem text="praia" />
      <CTAListItem text="moderno" />
      <CTAListItem text="clássico" />
      <CTAListItem text="e mais..." last={true} />
    </Flex>
  );
};

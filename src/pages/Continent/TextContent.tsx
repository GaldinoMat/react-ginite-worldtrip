import { Box, Text } from "@chakra-ui/react";

interface ITextContentProps {
  content: {
    body: string;
  }[];
}

export const TextContent = ({content} : ITextContentProps) => {
  return (
    <Box my="1.5rem">
      {content.map((element) => (
        <Text key={content.indexOf(element)} textAlign="justify">
          {element.body}
        </Text>
      ))}
    </Box>
  );
};

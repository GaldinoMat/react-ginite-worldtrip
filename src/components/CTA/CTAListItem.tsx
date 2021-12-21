import { Box } from "@chakra-ui/react";
import { BulletListIcon } from "./BulletListIcon";

interface ICTAListItemProps {
  text: string;
  last?: boolean;
}

export const CTAListItem = ({ text, last = false }: ICTAListItemProps) => {
  if (last) {
    return (
      <Box fontSize="2xl" mb="1.6875rem" my="0" mx="auto">
        <BulletListIcon />
        {text}
      </Box>
    );
  }

  return (
    <Box fontSize="2xl" mb="1.6875rem">
      <BulletListIcon />
      {text}
    </Box>
  );
};

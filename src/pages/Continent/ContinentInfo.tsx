import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { WordSplitToArr } from "../../utils/WordSplitToArr";

interface IContinentInfoProps {
  info: {
    body: string;
  }[];
}

export const ContinentInfo = ({ info }: IContinentInfoProps) => {
  const city_info = WordSplitToArr(info[0].body);

  return (
    <>
      <Text
        fontSize="5xl"
        fontWeight="semibold"
        color="yellow.Highlight"
        alignSelf="flex-start"
      >
        {city_info[0]}
      </Text>
      <Flex alignItems="center">
        <Text fontSize="lg">{city_info[1]}</Text>
        {city_info.length > 2 && (
          <>
            <Text fontSize="lg">{city_info[2]}</Text>
            <InfoOutlineIcon ml=".5rem" />
          </>
        )}
      </Flex>
    </>
  );
};

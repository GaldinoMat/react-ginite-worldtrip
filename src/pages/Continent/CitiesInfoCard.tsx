import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface ICitiesInfoCardProps {
  city_country_name: string;
  city_name: string;
  city_image: {
    city_image_alt: string;
    city_image_url: string;
  };
  city_country_symbol: {
    country_symbol_url: string;
    country_symbol_alt: string;
  };
}

export const CitiesInfoCard = ({
  city_country_name,
  city_name,
  city_image,
  city_country_symbol,
}: ICitiesInfoCardProps) => {
  return (
    <>
      <Image src={city_image.city_image_url} alt={city_image.city_image_alt} />
      <Flex
        px="1.5rem"
        py="1.125rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Text fontWeight="semibold" fontSize="1.25rem" color="gray.Headings">
            {city_name}
          </Text>
          <Text color="gray.Text">{city_country_name}</Text>
        </Box>
        <Image
          src={city_country_symbol.country_symbol_url}
          alt={city_country_symbol.country_symbol_alt}
          width="30px"
          height="30px"
        />
      </Flex>
    </>
  );
};

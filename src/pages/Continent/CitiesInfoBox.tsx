import { Box, Flex, } from "@chakra-ui/react";
import { CitiesInfoCard } from "./CitiesInfoCard";

interface ICitiesInfoBoxProps {
  cities_infos: {
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
  }[];
}

export const CitiesBoxInfo = ({ cities_infos }: ICitiesInfoBoxProps) => {
  return (
    <Flex
      flexDirection="column"
      px="2.75rem"
      alignItems="center"
      justifyContent="center"
    >
      {cities_infos.map((city) => (
        <Box
          key={cities_infos.indexOf(city)}
          border="1px"
          borderColor="yellow.Highlight"
          borderRadius=".3125rem"
          my=".625rem"
        >
          <CitiesInfoCard
            city_name={city.city_name}
            city_country_name={city.city_country_name}
            city_country_symbol={city.city_country_symbol}
            city_image={city.city_image}
          />
        </Box>
      ))}
    </Flex>
  );
};

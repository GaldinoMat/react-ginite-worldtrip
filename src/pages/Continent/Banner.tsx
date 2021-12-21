import { Flex, Heading } from "@chakra-ui/react";

interface IBannerProps {
  imageUrl: string;
  title: string;
}

export const Banner = ({ imageUrl, title }: IBannerProps) => {
  return (
    <Flex
      backgroundImage={imageUrl}
      height="9.375rem"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="contain"
      alignItems="center"
      justifyContent="center"
    >
      <Heading color="white.HeroText" textAlign="center">
        {title}
      </Heading>
    </Flex>
  );
};

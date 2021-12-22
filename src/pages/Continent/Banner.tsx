import { Flex, Heading } from "@chakra-ui/react";

interface IBannerProps {
  imageUrl: string;
  title: string;
}

export const Banner = ({ imageUrl, title }: IBannerProps) => {
  return (
    <Flex
      w="100%"
      backgroundImage={imageUrl}
      height={["9.375rem", "31.25rem"]}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="contain"
      alignItems={["center", "flex-end"]}
      justifyContent={["center", "flex-start"]}
    >
      <Heading color="white.HeroText" textAlign="center">
        {title}
      </Heading>
    </Flex>
  );
};
